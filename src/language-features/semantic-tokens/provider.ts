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
		let tokens = lexer.tokenize(doc);
		parser.parse(doc, tokens);

		tokens
			.filter(tok => tok.type === TokenType.Ident)
			.forEach(tok => {
				let decl = parser
					.getScopeAt(doc, tok.range)
					?.findDeclOf(tok.data);

				if (!decl) return;

				builder.push(tok.range, decl.semanticType);
			});

		return builder.build();
	}
}
