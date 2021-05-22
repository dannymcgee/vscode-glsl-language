import { Token, TokenType } from "../../lexer";
import { SemanticToken } from "../../semantic-tokens";
import { isValue } from "../utility";
import { Decl } from "./decl";

export class MacroDecl extends Decl {
	readonly semanticType = SemanticToken.Macro;

	constructor(
		readonly token: Token,
		readonly value: Token,
		readonly content: string,
		readonly docComment?: Token,
	) {
		super(token);

		this.expect(token.type === TokenType.Ident,
			`Expected an identifier, but received ${token.toString()}`
		);
		this.expect(isValue(value),
			`Expected a float, integer, or identifier, but received ${value.toString}`
		);
		if (docComment) {
			this.expect(docComment.type === TokenType.BlockComment,
				`Expected a documentation comment, but received ${docComment.toString()}`
			);
		}
	}
}
