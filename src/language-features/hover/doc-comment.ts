import { MarkdownString } from "vscode";
import { Token } from "../lexer";
import { ParamDecl } from "../parser";

export function parseDocComment(
	docComment?: Token,
	params?: ParamDecl[],
	returnType?: Token,
): MarkdownString[] {
	if (!docComment) return [];

	let content = docComment.data
		.split("\n")
		.map(line => line.trim())
		.map(line => line.replace(/^\s*(?:\/\*\*?|\* ?)/, ""))
		.map(line => line.replace(/\*?\/$/, ""))

	while (content[0] === "") content.shift();
	if (!content.length) return [];

	let result: MarkdownString[] = [];
	let summary = new MarkdownString();

	while (content[0] != null
		&& !content[0].trim().startsWith("@")
		&& !content[0].trim().startsWith("```"))
	{
		summary.appendMarkdown(content.shift() + "\n");
	}
	if (summary.value) result.push(summary);
	if (!content.length) return result;

	if (params) {
		let consumedIdxes: number[] = [];
		let paramsBlock = "";

		content
			.filter(line => /^@\s*param/.test(line.trim()))
			.map((line, idx) => {
				let match = line.match(/^\s*@param\s+(\S+)(?:\s+(.+)$)?/);
				return {
					idx,
					name: match[1],
					description: match[2],
				};
			})
			.forEach(({ idx, name, description }) => {
				let decl = params.find(p => p.token.data === name);
				if (!decl) return;

				consumedIdxes.push(idx);

				paramsBlock += ` - `;
				if (decl.modifier)
					paramsBlock += `_${decl.modifier.data}_ `;
				paramsBlock += `_${decl.type.data}_&nbsp;&nbsp;`;
				paramsBlock += `**${decl.token.data}**`
					+ (description
						? "&nbsp;&nbsp;**:**&nbsp;&nbsp;" + description
						: "");
				paramsBlock += "\n";
			});

		if (paramsBlock) {
			result.push(new MarkdownString(paramsBlock));
		}

		let consumedLines = consumedIdxes.map(idx => content[idx]);
		content = content.filter(line => !consumedLines.includes(line));
	}

	let remaining = new MarkdownString();
	let codeBlock = false;

	while (content.length) {
		let line = content.shift();

		if (line.trim().startsWith("```")) {
			codeBlock = !codeBlock;
			continue;
		}

		if (codeBlock) {
			remaining.appendCodeblock(line, "glsl");
		} else {
			remaining.appendMarkdown(
				line.replace(/@([a-zA-Z][-_a-zA-Z0-9]*)/, `**$1**`)
			);
		}
	}

	if (remaining.value) {
		result.push(remaining);
	}

	return result;
}
