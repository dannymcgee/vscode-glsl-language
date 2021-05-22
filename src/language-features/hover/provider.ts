import * as vscode from "vscode";
import {
	CancellationToken,
	Hover,
	MarkdownString,
	Position,
	ProviderResult,
	TextDocument,
} from "vscode";

import lexer, { TokenType } from "../lexer";
import parser from "../parser";

export class HoverProvider implements vscode.HoverProvider {
	provideHover(
		doc: TextDocument,
		pos: Position,
		token: CancellationToken,
	): ProviderResult<Hover> {
		let tokens = lexer.scan(doc.getText());
		let match = tokens.find(tok => tok.range.contains(pos));

		if (match?.type !== TokenType.Ident) return;

		let scope = parser.getScope(doc, pos);
		let decl = scope.get(match.data);

		if (!decl) return;

		let contents = new MarkdownString();
		contents.appendCodeblock(decl.content, "glsl");

		return new Hover(contents, match.range);
	}
}
