import {
	Diagnostic,
	DiagnosticSeverity,
	ExtensionContext,
	Position,
	Range,
	TextDocument,
} from "vscode";
import * as cp from "child_process";
import { promises as fs } from "fs";
import * as os from "os";
import * as path from "path";
import { v1 as uuid } from "uuid";

import lexer, { Token, TokenType } from "../lexer";
import { BUILT_INS, EXTENSION_PATH, UNIQUE_BUILT_INS } from "../utility";

const DIAG_PATTERN = /^(ERROR|WARNING): ([0-9]+):([0-9]+): '(.*)' : (.+)$/;

export class Analyzer {
	private readonly _validatorPath: string;
	private readonly _uuid: string;

	private _fsReady: Promise<void> = Promise.resolve();
	private _tempDir?: string;
	private _tempFilePath: string|null = null;

	private get _platform() {
		switch (os.platform()) {
			case "darwin": return "osx";
			case "linux": return "linux";
			case "win32": return "windows-x64";
			default: {
				throw new Error("Unsupported platform");
			}
		}
	}

	private get _validatorFilename() {
		let result = "glslangValidator";
		if (this._platform === "windows-x64")
			result += ".exe";
		return result;
	}

	private get _fileName() {
		return path.basename(this._doc.fileName);
	}

	constructor(
		private _ctx: ExtensionContext,
		private _doc: TextDocument
	) {
		this._uuid = uuid();
		this._validatorPath = path.resolve(
			EXTENSION_PATH,
			"vendor",
			this._platform,
			this._validatorFilename,
		);

		(async () => {
			let stat = await fs.stat(this._validatorPath);
			if (!stat.isFile()) {
				throw new Error("Failed to resolve path to validator binary");
			}
		})();
	}

	async validate(): Promise<Diagnostic[]> {
		let filePath = await this._getFilePath();
		let validation = await this._runValidator(filePath);
		let result: Diagnostic[] = [];

		// FIXME: Reduce complexity by delegating to some funcitons
		if (validation.startsWith("Usage:")) {
			result.push({
				message: "Failed to classify shader stage by filename.\n\n"
					+ "File can end in .<stage> for auto-stage classification, where <stage> is:\n"
					+ "    .vert    for a vertex shader\n"
					+ "    .tesc    for a tessellation control shader\n"
					+ "    .tese    for a tessellation evaluation shader\n"
					+ "    .geom    for a geometry shader\n"
					+ "    .frag    for a fragment shader\n"
					+ "    .comp    for a compute shader\n"
					+ "    .mesh    for a mesh shader\n"
					+ "    .task    for a task shader\n"
					+ "    .rgen    for a ray generation shader\n"
					+ "    .rint    for a ray intersection shader\n"
					+ "    .rahit   for a ray any hit shader\n"
					+ "    .rchit   for a ray closest hit shader\n"
					+ "    .rmiss   for a ray miss shader\n"
					+ "    .rcall   for a ray callable shader\n"
					+ "    .glsl    for .vert.glsl, .tesc.glsl, ..., .comp.glsl compound suffixes\n"
					+ "    .hlsl    for .vert.hlsl, .tesc.hlsl, ..., .comp.hlsl compound suffixes",
				range: new Range(new Position(0, 0), new Position(0, 0)),
				severity: DiagnosticSeverity.Hint,
			});

			let stage: string|null = null;

			let tokens = lexer.tokenize(this._doc);

			let comments = tokens.filter(tok => tok.type === TokenType.LineComment);
			let builtIns = tokens.filter(tok => tok.type === TokenType.Builtin);

			let pat = /\bstage:\s*(comp|vert|geom|tesc|tese|frag)\b/
			let tok: Token|undefined;
			if ((tok = comments.find(c => pat.test(c.data)))) {
				stage = tok.data.match(pat)![1];
			}

			let stageRange: Range;
			if (!stage) {
				for (let [key, vars] of Object.entries(UNIQUE_BUILT_INS)) {
					let tok: Token|undefined;
					if ((tok = builtIns.find(v => vars.includes(v.data)))) {
						stage = key;
						stageRange = tok.range;
						break;
					}
				}
			}

			if (!stage) {
				let usages = { comp: 0, vert: 0, frag: 0 };
				let subset = ["comp", "vert", "frag"];
				// Unique-ify the used built-ins
				let builtInsSet = new Set<string>();
				builtIns.forEach(tok => builtInsSet.add(tok.data));
				let builtInsUsed = Array.from(builtInsSet);

				subset.forEach(key => {
					BUILT_INS[key].forEach((v: string) => {
						if (builtInsUsed.includes(v)) {
							stageRange = builtIns.find(tok => tok.data === v)!.range;
							usages[key]++;
						}
					});
				});

				let used = Object
					.entries(usages)
					.filter(([, u]) => u > 0)

				if (used.length === 1) {
					stage = used[0][0];

					let ext = path.extname(this._fileName);
					let proposedRename = this._fileName.replace(ext, `.${stage}`);
					result.push({
						message: `Guessing stage '${stage}' based on usage of built-in `
							+ `variable, but this may be incorrect. Diagnostic accuracy `
							+ `and performance can be improved by renaming this file to `
							+ `'${proposedRename}'.`,
						range: stageRange!,
						severity: DiagnosticSeverity.Warning,
					});

					validation = await this._runValidator(filePath, ["-S", stage]);
				}
				else {
					result.push({
						message: "Failed to infer shader stage from built-in variable "
							+ "usage. This file cannot be validated.",
						range: new Range(new Position(0, 0), new Position(0, 0)),
						severity: DiagnosticSeverity.Warning,
					});

					return result;
				}
			}
			else {
				if (stageRange!) {
					let ext = path.extname(this._fileName);
					let proposedRename = this._fileName.replace(ext, `.${stage}`);
					result.push({
						message: `Inferring stage '${stage}' based on usage of built-in `
							+ `variable. Diagnostic performance can be improved by renaming `
							+ `this file to '${proposedRename}'.`,
						range: stageRange,
						severity: DiagnosticSeverity.Information,
					});
				}

				validation = await this._runValidator(filePath, ["-S", stage]);
			}
		}

		validation
			.split("\n")
			.slice(1)
			.map(line => line.trim())
			.forEach(msg => {
				let diag: Diagnostic;

				if (!DIAG_PATTERN.test(msg)) {
					console.error(msg);
					return;
				}

				let m = msg.match(DIAG_PATTERN)!;
				try {
					let sev = m[1] === "ERROR"
						? DiagnosticSeverity.Error
						: DiagnosticSeverity.Warning;
					let lineNum = parseInt(m[3], 10);
					let lexeme = m[4];
					let message = m[5];

					let line = this._doc.lineAt(lineNum);
					let char = line.text.indexOf(lexeme);

					let range = char > -1
						? new Range(
							new Position(lineNum, char),
							new Position(lineNum, char + lexeme.length))
						: line.range;

					diag = new Diagnostic(range, message, sev);
				}
				catch (err) {
					console.error(`Error parsing diagnostic: ${err.message}`);
					console.error(`Original message: ${msg}`);
					throw err;
				}

				result.push(diag);
			});

		return result;
	}

	async dispose() {
		if (!this._tempFilePath) return;

		try { await fs.unlink(this._tempFilePath); }
		catch (err) {
			console.warn("Failed to delete temp file:", err);
			return;
		}

		if (!this._tempDir) return;

		try { await fs.unlink(this._tempDir); }
		catch (err) {
			console.warn("Failed to delete temp directory:", err);
			return;
		}
	}

	private _runValidator = (
		filePath: string,
		extraArgs: string[] = [],
	) => new Promise<string>((resolve) => {
		let result = "";

		let proc = cp.spawn(
			this._validatorPath,
			[filePath, ...extraArgs],
			{ stdio: "pipe" },
		);
		proc.stdout.on("data", (buf: Buffer) => {
			result += buf.toString();
		});

		proc.on("exit", () => {
			if (filePath === this._tempFilePath) {
				fs.unlink(filePath)
					.then(() => {
						this._tempFilePath = null;
						this._fsUnlock();

						resolve(result);
					})
					.catch((err) => console.error(err));
			} else {
				resolve(result);
			}
		});
	});

	private async _getFilePath(): Promise<string> {
		if (!this._doc.isDirty) {
			return this._doc.fileName;
		}

		await this._fsReady;
		this._fsLock();

		if (this._tempFilePath) return this._tempFilePath;
		if (!this._ctx.storageUri) throw new Error("No storage URI!");

		let dirName = (this._tempDir ??= path.resolve(
			this._ctx.storageUri.fsPath,
			this._uuid
		));
		let tempFilePath = path.resolve(dirName, this._fileName);

		try { await fs.stat(dirName); }
		catch { await fs.mkdir(dirName, { recursive: true }); }

		await fs.writeFile(tempFilePath, this._doc.getText());
		this._tempFilePath = tempFilePath;

		return tempFilePath;
	}

	private _fsLock(): void {
		this._fsReady = new Promise((resolve) => {
			this._fsUnlock = resolve;
		});
	}

	private _fsUnlock = () => {};
}
