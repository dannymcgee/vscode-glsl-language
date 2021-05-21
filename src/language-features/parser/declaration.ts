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
		result += [
			`	start: ${this.token.line}:${this.token.column - this.token.data.length + 1}`,
			`	end: ${this.token.line}:${this.token.column + 1}`,
			`}`
		]
			.map(line => pre + line)
			.join("\n");

		return result;
	}
}
