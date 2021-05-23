import * as vscode from "vscode";
import {
	Hover,
	MarkdownString,
	Position,
	TextDocument,
} from "vscode";

import lexer, { TokenType } from "../lexer";
import parser, { FuncDecl } from "../parser";
import { parseDocComment } from "./doc-comment";

export class HoverProvider implements vscode.HoverProvider {
	provideHover(doc: TextDocument, pos: Position): Hover|null {
		let token = lexer
			.tokenize(doc)
			.find(tok => tok.range.contains(pos));

		if (token?.type !== TokenType.Ident) return null;

		let decl = parser
			.getScopeAt(doc, pos)
			.findDeclOf(token.data);

		if (!decl) return null;

		let contents = new MarkdownString()
			.appendCodeblock(decl.content, "glsl");

		let docBlock: MarkdownString[];
		if (decl instanceof FuncDecl) {
			docBlock = parseDocComment(
				decl.docComment,
				decl.params,
				decl.returnType
			);
		} else {
			docBlock = parseDocComment(decl.docComment);
		}

		return new Hover([contents, ...docBlock], token.range);
	}
}
