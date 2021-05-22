import { Token } from "../../lexer";
import { SemanticToken } from "../../semantic-tokens";
import { Decl } from "./decl";
import { ParamDecl } from "./param";

export class FuncDecl extends Decl {
	readonly semanticType = SemanticToken.Function;

	constructor(
		readonly token: Token,
		readonly returnType: Token,
		readonly params: ParamDecl[],
		readonly docComment?: Token,
	) {
		super(token);
		// @ts-ignore
		this.content = [
			returnType.data,
			token.data,
			"(",
			params.map(p => p.content).join(", "),
			") { ... }",
		].join(" ");
	}
}
