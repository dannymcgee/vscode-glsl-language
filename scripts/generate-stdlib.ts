import { promises as fs } from "fs";
import * as path from "path";

import { JSDOM } from "jsdom";

const ROOT_DIR = "vendor/OpenGL-Refpages/gl4";

let document: Document;

enum NodeType {
	Element = 1,
	Attribute = 2,
	Text = 3,
	CDataSection = 4,
	ProcessingInstruction = 7,
	Comment = 8,
	Document = 9,
	DocumentType = 10,
	DocumentFragment = 11,
}

interface Signature {
	returnType: string;
	name: string;
	params: { type: string; name: string; }[];
}

const GENERIC_MAPPINGS = {
	genType:  ["float",   "vec2",  "vec3",  "vec4"],
	genBType: ["bool",   "bvec2", "bvec3", "bvec4"],
	genDType: ["double", "dvec2", "dvec3", "dvec4"],
	genIType: ["int",    "ivec2", "ivec3", "ivec4"],
	genUType: ["uint",   "uvec2", "uvec3", "uvec4"],
	vec:      [ "vec2",  "vec3",  "vec4"],
	bvec:     ["bvec2", "bvec3", "bvec4"],
	dvec:     ["dvec2", "dvec3", "dvec4"],
	ivec:     ["ivec2", "ivec3", "ivec4"],
	uvec:     ["uvec2", "uvec3", "uvec4"],
	mat:      ["mat2",   "mat3",   "mat4",
	           "mat2x2", "mat2x3", "mat2x4",
	           "mat3x2", "mat3x3", "mat3x4",
	           "mat4x2", "mat4x3", "mat4x4"],
	dmat:     ["dmat2",   "dmat3",   "dmat4",
	           "dmat2x2", "dmat2x3", "dmat2x4",
	           "dmat3x2", "dmat3x3", "dmat3x4",
	           "dmat4x2", "dmat4x3", "dmat4x4"],
};
const GENERIC_PATTERN = /^(?:gen[BDIU]?Type|[bdiu]?vec|d?mat)$/;

const REPLACE_MAPPINGS = {
	gimage:   ["image",   "iimage",   "uimage"],
	gvec:     ["vec",     "ivec",     "uvec"],
	gsampler: ["sampler", "isampler", "usampler"],
};
const REPLACE_PATTERN = /^(g(?:image|vec|sampler))(\S+)/;

(async function () {
	let dir = path.resolve(process.cwd(), ROOT_DIR);
	(await findXmlRefs(dir))
		.filter(it => it != null)
		.forEach(async ({ filename, content: xml }) => {
			let dom: JSDOM;
			try {
				dom = new JSDOM(xml.split("\n").slice(1).join("\n"), {
					contentType: "text/xml",
				});
			} catch (err) {
				console.error(`Failed to parse ${filename}:`, err);
				return;
			}
			document = dom.window.document;

			let summary = parseSummary();
			let paramMap = parseParams();
			let signatures = parseSignatures();
			let content = generateContent(summary, paramMap, signatures);

			if (content) {
				let dest = path.resolve(
					process.cwd(),
					"vendor/stdlib",
					filename.replace(/\.xml$/, ".glsl"),
				);

				await fs.writeFile(dest, content);
			}
		});
})();

async function findXmlRefs(dir: string) {
	let list = await fs.readdir(dir);

	return Promise.all(list.map(async filename => {
		if (path.basename(filename).startsWith("gl")) return null;
		if (path.extname(filename) !== ".xml") return null;

		let file = path.resolve(process.cwd(), ROOT_DIR, filename);
		let content = (await fs.readFile(file)).toString();

		return { filename, content };
	}));
}

function parseSummary(): string {
	return text($("refnamediv > refpurpose")[0]);
}

function parseParams(): Record<string, string> {
	let result = {};

	let paramsNode = $(`refsect1[xml:id="parameters"]`)[0];
	$("varlistentry", paramsNode).forEach(entry => {
		let name = text($("term > parameter", entry)[0]);
		let desc = text($("listitem > para", entry)[0]);
		result[name] = desc;
	});

	return result;
}

function parseSignatures(): Signature[] {
	let result = [];

	let protos = $("funcsynopsis > funcprototype");
	protos.forEach(proto => {
		let funcdef = $("funcdef", proto)[0];
		let returnType = text(funcdef);
		let name = text($("function", funcdef)[0]);

		let params = $("paramdef", proto)
			.map(param => ({
				type: text(param),
				name: text($("parameter", param)[0]),
			}));

		result.push({
			returnType,
			name,
			params,
		});
	});

	return result;
}

function generateContent(
	summary: string,
	paramMap: Record<string, string>,
	signatures: Signature[],
): string {
	let result = "";

	signatures
		.flatMap(expandSignature)
		.forEach(sig => {
			let params = sig.params
				.filter(({ name }) => !!name)
				.filter(({ name }) => !!paramMap[name]);

			result += "/**\n";
			result += ` * ${summary}\n`;

			if (params.length) {
				result += ` * \n`;
				params.forEach(({ name }) => {
					result += ` * @param ${name} ${paramMap[name]} \n`
				});
			}

			result += ` */\n`;
			result += `${sig.returnType} ${sig.name}(`;

			if (params.length) {
				result += " ";
				result += params
					.map(p => `${p.type} ${p.name}`)
					.join(", ");
				result += " ";
			}

			result += ")\n\n";
		});

	return result;
}

function expandSignature(sig: Signature): Signature[] {
	let result: Signature[] = [];

	if (GENERIC_PATTERN.test(sig.returnType)
		|| sig.params.some(p => GENERIC_PATTERN.test(p.type)))
	{
		let genTypeCount = [sig.returnType, ...sig.params.map(p => p.type)]
			.filter(t => GENERIC_PATTERN.test(t))
			.map(t => (GENERIC_MAPPINGS[t] as string[])?.length)
			.reduce((accum, current) => {
				if (current !== accum) {
					console.error(
						"Generic types with different-size mappings encountered in signature:\n",
						`${sig.returnType} ${sig.name} ( ${
							sig.params
								.map(p => `${p.type} ${p.name}`)
								.join(", ")
						} )`
					);
					process.exit(1);
				}
				return current;
			});

		for (let i = 0; i < genTypeCount; i++) {
			result.push({
				returnType: GENERIC_MAPPINGS[sig.returnType]?.[i] ?? sig.returnType,
				name: sig.name,
				params: sig.params.map(p => ({
					name: p.name,
					type: GENERIC_MAPPINGS[p.type]?.[i] ?? p.type,
				})),
			});
		}
	}

	if (!result.length) result = [sig];

	result = result
		.map(sig => {
			if (REPLACE_PATTERN.test(sig.returnType)
				|| sig.params.some(p => REPLACE_PATTERN.test(p.type)))
			{
				let returnMapping: string[]|undefined;
				let m = sig.returnType.match(REPLACE_PATTERN);

				if (m) returnMapping = REPLACE_MAPPINGS[m[1]];

				let paramMappings: Record<string, string[]> = {};
				sig.params.forEach(p => {
					m = p.type.match(REPLACE_PATTERN);
					if (m) paramMappings[p.name] = REPLACE_MAPPINGS[m[1]];
				});

				return [0, 1, 2].map(idx => {
					let result = { ...sig };
					if (returnMapping) {
						result.returnType = sig.returnType.replace(
							REPLACE_PATTERN,
							`${returnMapping[idx]}$2`,
						);
					}

					result.params = sig.params.map(p => {
						let result = { ...p };
						if (paramMappings[p.name]) {
							result.type = p.type.replace(
								REPLACE_PATTERN,
								`${paramMappings[p.name][idx]}$2`,
							);
						}
						return result;
					});

					return result;
				});
			}

			return sig;
		})
		.flat();

	return result;
}

function $(
	selector: string,
	parent: Node = document,
): Element[] {
	if (!parent) return [];

	let finder = parseSelector(selector);
	return finder(parent);
}

function parseSelector(selector: string): (parent: Node) => Element[] {
	if (/^[a-zA-Z0-9]+$/.test(selector)) {
		let pattern = new RegExp(selector, "i");
		let pred = (node: Node) => isElement(node) && pattern.test(node.nodeName);

		return (parent) => {
			return findNodes(pred, parent, { recursive: true }) as Element[];
		};
	}

	let m: RegExpMatchArray;
	if ((m = selector.match(/^([a-zA-Z0-9]+)\s*>\s*([a-zA-Z0-9]+)$/))) {
		let parentPattern = new RegExp(m[1], "i");
		let childPattern = new RegExp(m[2], "i");
		let pred = (node: Node) => (isElement(node)
			&& childPattern.test(node.nodeName)
			&& isElement(node.parentNode)
			&& parentPattern.test(node.parentNode.nodeName));

		return (parent) => {
			return findNodes(pred, parent, { recursive: true }) as Element[];
		}
	}

	if ((m = selector.match(/^([a-zA-Z0-9]+)\[(.+)(?:="(.+)")\]$/))) {
		let namePattern = new RegExp(m[1], "i");
		let attrName = m[2];
		let attrVal = m[3];

		let pred = (node: Node) => (isElement(node)
			&& namePattern.test(node.nodeName)
			&& node.hasAttribute(attrName)
			&& node.getAttribute(attrName) === attrVal);

		return (parent) => {
			return findNodes(pred, parent, { recursive: true }) as Element[];
		}
	}
}

function findNodes(
	pred: (node: Node) => boolean,
	parent: Node,
	opts?: { recursive: boolean },
): Node[] {
	let result: Node[] = [];
	if (!parent) return result;

	parent.childNodes.forEach(node => {
		if (pred(node)) result.push(node);
		if (opts?.recursive && node.childNodes.length) {
			result.push(...findNodes(pred, node, opts));
		}
	});

	return result;
}

function isElement(node: Node): node is Element {
	return node.nodeType === NodeType.Element;
}

function isText(node: Node): node is Text {
	return node.nodeType === NodeType.Text;
}

function text(node?: Node): string {
	let result = "";

	if (node?.childNodes.length)
		node.childNodes.forEach(child => {
			if (isText(child)) result += child.nodeValue;
		});

	return result.replace(/\s+/, " ").trim();
}

function prettyPrint(node: Node, indent: number = 0): string {
	let indents = "   ".repeat(indent);

	let content = "";
	if (isElement(node)) {
		let classContent = node.className ? ` class="${node.className}"` : "";
		content += `<${node.tagName.toLowerCase()}${classContent}`;

		const atts = Array
			.from(node.attributes)
			.filter((attr) => attr.name !== "class");
		if (atts.length) {
			atts.forEach((attr) => {
				content += `\n${indents}   `;
				content += `${attr.name}="${attr.value}"`;
			});
			content += `\n${indents}`;
		}
		content += ">";
	} else if (isText(node)) {
		content = node.textContent?.trim() ?? "";
	}

	let result = content ? `\n${indents}${content}` : "";

	indent++;
	let childContent = "";
	Array.from(node.childNodes).forEach((child) => {
		childContent += prettyPrint(child, indent);
	});

	result += childContent;

	if (node.nodeType === NodeType.Element) {
		if (childContent) {
			result += `\n${indents}`;
		}
		result += `</${(node as Element).tagName.toLowerCase()}>`;
	}

	return result;
}
