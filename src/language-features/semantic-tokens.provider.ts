import {
	CancellationToken,
	DocumentSemanticTokensProvider,
	Position,
	Range,
	SemanticTokens,
	SemanticTokensBuilder,
	TextDocument,
} from "vscode";

import { SemanticToken, SEMANTIC_TOKENS_LEGEND } from "./semantic-tokens.legend";
import { Token, tokenString, TokenType } from "./tokenizer";

export class SemanticTokensProvider implements DocumentSemanticTokensProvider {
	provideDocumentSemanticTokens(
		document: TextDocument,
		token: CancellationToken,
	): SemanticTokens {
		let src = document.getText();
		let tokens = tokenString(src, { version: "440 core" });
		let idents = parse(tokens);
		let builder = new SemanticTokensBuilder(SEMANTIC_TOKENS_LEGEND);

		tokens
			.filter(tok => tok.type === TokenType.Ident)
			.forEach(tok => {
				if (!idents.has(tok.data)) return;

				let range = new Range(
					new Position(tok.line-1, tok.column-tok.data.length),
					new Position(tok.line-1, tok.column),
				);

				builder.push(range, idents.get(tok.data));
			});

		return builder.build();
	}
}

function parse(tokens: Token[]): Map<string, SemanticToken> {
	let result = new Map<string, SemanticToken>();

	tokens
		.filter(tok => tok.type === TokenType.Preprocessor)
		.forEach(tok => {
			let match = tok.data.match(/#\s*define\s+([a-zA-Z][_a-zA-Z0-9]*)/);
			if (match) {
				result.set(match[1], SemanticToken.Macro);
			}
		});

	return result;
}
