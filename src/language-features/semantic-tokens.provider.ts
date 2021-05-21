import {
	CancellationToken,
	DocumentSemanticTokensProvider,
	Position,
	Range,
	SemanticTokens,
	SemanticTokensBuilder,
	TextDocument,
} from "vscode";

import lexer, { Token, TokenType } from "./lexer";
import parser from "./parser";
import { SemanticToken, SEMANTIC_TOKENS_LEGEND } from "./semantic-tokens.legend";

export class SemanticTokensProvider implements DocumentSemanticTokensProvider {
	provideDocumentSemanticTokens(
		document: TextDocument,
		token: CancellationToken,
	): SemanticTokens {

		let src = document.getText();
		let tokens = lexer.scan(src, { version: "440 core" });
		let scope = parser.parse(document, tokens);

		console.log("\n" + scope.print());

		let idents = parse(tokens); // TODO
		let builder = new SemanticTokensBuilder(SEMANTIC_TOKENS_LEGEND);

		// TODO
		tokens
			.filter(tok => tok.type === TokenType.Ident)
			.forEach(tok => {
				if (!idents.has(tok.data)) return;
				builder.push(tok.range, idents.get(tok.data));
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
