import { Range } from "vscode";
import { TokenType } from "./types";

export class Token {
	constructor(
		readonly type: TokenType,
		readonly data: string,
		readonly range: Range,
	) {}

	toString(): string {
		let { start, end } = this.range;
		return [
			`Token {`,
			`	type: ${this.type}`,
			`	data: ${this.data}`,
			`	range: {`,
			`		start: ${start.line + 1}:${start.character}`,
			`		end: ${end.line + 1}:${end.character}`,
			`	}`,
			`}`,
		].join("\n");
	}
}
