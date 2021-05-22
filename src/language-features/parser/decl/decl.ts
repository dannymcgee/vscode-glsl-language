import { Token } from "../../lexer";
import { SemanticToken } from "../../semantic-tokens";

export abstract class Decl {
	readonly semanticType: SemanticToken;
	readonly content: string;

	constructor(
		public token: Token,
	) {}

	print(depth = 0): string {
		let pre = "\t".repeat(depth);

		let result = `${this.constructor.name} {\n`;
		let start = this.token.range.start;
		let end = this.token.range.end;

		result += [
			`	start: ${start.line + 1}:${start.character + 1}`,
			`	end: ${end.line + 1}:${end.character + 1}`,
			`}`
		]
			.map(line => pre + line)
			.join("\n");

		return result;
	}

	protected expect(expr: any, failureMsg: string): asserts expr {
		if (!expr) throw new Error(failureMsg);
	}
}
