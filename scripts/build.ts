import { promises as fs } from "fs";
import * as Path from "path";

import { JsonObject, TMGrammar } from "../src/grammar/types";
import { clean } from "./clean";
import log from "./log";
import cli from "./cli";

interface Args {
	default: string;
	name: string;
	out: string;
}

(async function () {
	let { default: srcPath, name, out }: Args = cli.args();

	let outPath = Path.resolve(process.cwd(), out ?? "dist");
	let relPath = "";
	let absPath = "";

	if (srcPath) {
		absPath = Path.resolve(process.cwd(), srcPath);
		relPath = Path.relative(__dirname, absPath).replace(/\\/g, "/");
	} else {
		relPath = "../src/grammar";
		absPath = Path.resolve(__dirname, relPath);
	}

	try {
		let grammar = (await import(relPath)).default;

		await build(grammar, outPath, name);
		await copyConfigs(absPath, outPath);
	} catch (err) {
		cli.err(err);
	}

	async function build(grammar: TMGrammar, outPath: string, name = "glsl") {
		let processed = toJson(grammar);
		let content = JSON.stringify(processed, null, "\t");
		let filePath = Path.resolve(outPath, `${name}.tmLanguage.json`);

		await clean(outPath);
		await fs.writeFile(filePath, content);

		log.ok(`Wrote file '${filePath}'`);
	}

	function copyConfigs(srcPath: string, outPath: string) {
		return new Promise<void>(async (resolve, reject) => {
			let files = await fs.readdir(srcPath);
			files = files.filter((file) => /(json|config\.ts)$/.test(file));

			let pending = files.length;
			let done = 0;

			if (!pending) resolve();

			files.forEach(async (file) => {
				let dest = Path.resolve(outPath, file);
				file = Path.resolve(srcPath, file);

				if (file.endsWith("json")) {
					fs.copyFile(file, dest)
						.catch(reject)
						.then(() => {
							log.ok(`Copied '${file}' -> '${dest}'`);
							if (++done === pending) resolve();
						});
				} else {
					let config = (await import(file)).default;
					config = toJson(config);
					dest = dest.replace(/\.ts$/, ".json");

					fs.writeFile(dest, JSON.stringify(config, null, "\t"))
						.catch(reject)
						.then(() => {
							log.ok(`Copied '${file}' -> '${dest}'`);
							if (++done === pending) resolve();
						});
				}
			});
		});
	}

	// prettier-ignore
	function toJson(obj: any): any {
		if (/^(string|number|boolean)$/.test(typeof obj))
			return obj;

		if (Array.isArray(obj))
			return obj.map(toJson);

		let processed: JsonObject = {};
		for (let [key, value] of Object.entries(obj)) {
			if (typeof value === 'string')
				processed[key] = value;
			else if (value instanceof RegExp)
				processed[key] = value.toString().replace(/^\/|\/$/g, '');
			else if (Array.isArray(value))
				processed[key] = value.map(toJson);
			else
				processed[key] = toJson(value);
		}
		return processed;
	}
})();
