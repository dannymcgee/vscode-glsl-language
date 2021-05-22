import { Token, TokenType } from "../lexer";
import { TYPE_SAMPLER, TYPE_SIMPLE, TYPE_STRUCT } from "./regex";

export function isType(token: Token): boolean {
	return token.type === TokenType.Keyword
		&& (TYPE_SIMPLE.test(token.data)
			|| TYPE_STRUCT.test(token.data)
			|| TYPE_SAMPLER.test(token.data));
}

export function isValue(token: Token): boolean {
	switch (token.type) {
		case TokenType.Float:
		case TokenType.Integer:
		case TokenType.Ident:
			return true;
		default:
			return false;
	}
}

export function isDocComment(token: Token): boolean {
	return token.type === TokenType.BlockComment
		&& token.data.trim().startsWith("/**");
}
