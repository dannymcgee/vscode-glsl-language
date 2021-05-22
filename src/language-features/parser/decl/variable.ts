import { Token } from "../../lexer";
import { SemanticToken } from "../../semantic-tokens";
import { Decl } from "./decl";

export class VariableDecl extends Decl {
	readonly semanticType = SemanticToken.Variable;

	constructor(
		readonly token: Token,
		readonly type: Token,
		readonly modifier?: Token,
		readonly docComment?: Token,
	) {
		super(token);

		let content = "";
		if (modifier) content += modifier.data + " ";
		content += `${type.data} ${token.data}`;

		// @ts-ignore
		this.content = content;
	}
}
