import { Token } from "../lexer";

export class Decl {
	private constructor(
		public token: Token,
		public type: string,
	) {}

	static macro(token: Token): Decl {
		return new Decl(token, "macro");
	}

	static func(token: Token): Decl {
		return new Decl(token, "function");
	}

	static param(token: Token): Decl {
		return new Decl(token, "param");
	}

	static variable(token: Token): Decl {
		return new Decl(token, "variable");
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
