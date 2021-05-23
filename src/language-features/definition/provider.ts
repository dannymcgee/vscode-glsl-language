import * as vscode from "vscode";
import { Location, Position, TextDocument } from "vscode";

import lexer, { TokenType } from "../lexer";
import parser from "../parser";

export class DefinitionProvider implements vscode.DefinitionProvider {
	provideDefinition(doc: TextDocument, pos: Position): Location|null {
		let token = lexer
			.tokenize(doc)
			.find(tok => tok.range.contains(pos));

		if (token?.type !== TokenType.Ident) return null;

		let decl = parser
			.getScopeAt(doc, pos)
			.findDeclOf(token.data);

		if (!decl) return null;

		return new Location(doc.uri, decl.token.range);
	}
}
