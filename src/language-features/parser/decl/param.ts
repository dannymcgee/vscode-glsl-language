import { Token } from "../../lexer";
import { SemanticToken } from "../../semantic-tokens";
import { Decl } from "./decl";

export class ParamDecl extends Decl {
	readonly semanticType = SemanticToken.Param;

	constructor(
		readonly token: Token,
		readonly type: Token,
		readonly modifier?: Token,
	) {
		super(token);

		let content = "";
		if (modifier) content += modifier.data + " ";
		content += `${type.data} ${token.data}`;

		// @ts-ignore
		this.content = content;
	}
}
