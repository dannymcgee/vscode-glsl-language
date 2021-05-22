import {
	DocumentSemanticTokensProvider,
	SemanticTokens,
	SemanticTokensBuilder,
	TextDocument,
} from "vscode";

import lexer, { TokenType } from "../lexer";
import parser from "../parser";
import { SEMANTIC_TOKENS_LEGEND } from "./legend";

export class SemanticTokensProvider implements DocumentSemanticTokensProvider {
	provideDocumentSemanticTokens(doc: TextDocument): SemanticTokens {
		let builder = new SemanticTokensBuilder(SEMANTIC_TOKENS_LEGEND);
		let tokens = lexer.scan(doc.getText());
		parser.parse(doc, tokens);

		tokens
			.filter(tok => tok.type === TokenType.Ident)
			.forEach(tok => {
				let scope = parser.getScope(doc, tok.range);
				if (!scope) throw new Error(
					`Couldn't find scope for token:\n${tok.toString()}`
				);

				let decl = scope.get(tok.data);
				if (!decl) return;

				builder.push(tok.range, decl.semanticType);
			});

		return builder.build();
	}
}
