import { Token } from "../../lexer";
import { SemanticToken } from "../../semantic-tokens";
import { Decl } from "./decl";

export class ParamDecl extends Decl {
	readonly semanticType = SemanticToken.Param;

	constructor(
		readonly token: Token,
		readonly type: Token,
		readonly modifiers: Token[] = [],
	) {
		super(token);

		let content = "";
		if (modifiers.length) {
			content += modifiers.map(mod => mod.data).join(" ") + " ";
		}
		content += `${type.data} ${token.data}`;

		// @ts-ignore
		this.content = content;
	}
}
