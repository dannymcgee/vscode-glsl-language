import {
	CancellationToken,
	DocumentSemanticTokensProvider,
	SemanticTokens,
	SemanticTokensBuilder,
	TextDocument,
} from "vscode";

import lexer, { TokenType } from "../lexer";
import parser from "../parser";
import { SEMANTIC_TOKENS_LEGEND } from "./legend";

export class SemanticTokensProvider implements DocumentSemanticTokensProvider {
	provideDocumentSemanticTokens(
		doc: TextDocument,
		token: CancellationToken,
	): SemanticTokens {
		let src = doc.getText();
		let builder = new SemanticTokensBuilder(SEMANTIC_TOKENS_LEGEND);

		let tokens = lexer.scan(src, { version: "440 core" });
		parser.parse(doc, tokens);

		tokens
			.filter(tok => tok.type === TokenType.Ident)
			.forEach(tok => {
				let scope = parser.getScope(doc, tok.range);
				if (!scope) throw new Error(
					`Couldn't find scope for token:\n${tok.toString()}`
				);

				let decl = scope.get(tok.data);
				if (!decl) {
					console.warn(
						`Couldn't find declaration for ident:\n`,
						tok.toString(),
					);
					return;
				}

				builder.push(tok.range, decl.type);
			});

		return builder.build();
	}
}
