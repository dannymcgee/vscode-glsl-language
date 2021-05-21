import { Token } from "../lexer";
import { SemanticToken } from "../semantic-tokens.legend";

export class Decl {
	private constructor(
		public token: Token,
		public type: SemanticToken,
	) {}

	static macro(token: Token): Decl {
		return new Decl(token, SemanticToken.Macro);
	}

	static func(token: Token): Decl {
		return new Decl(token, SemanticToken.Function);
	}

	static param(token: Token): Decl {
		return new Decl(token, SemanticToken.Param);
	}

	static variable(token: Token): Decl {
		return new Decl(token, SemanticToken.Variable);
	}

	print(depth = 0): string {
		let pre = "\t".repeat(depth);
		let name = this.type.charAt(0).toUpperCase() + this.type.slice(1);

		let result = `${name}Decl {\n`;
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
}
