import * as vscode from "vscode";
import { Location, Position, TextDocument } from "vscode";

import lexer, { TokenType } from "../lexer";
import parser from "../parser";

export class DefinitionProvider implements vscode.DefinitionProvider {
	provideDefinition(doc: TextDocument, pos: Position): Location|null {
		let tokens = lexer.tokenize(doc);
		let match = tokens.find(tok => tok.range.contains(pos));

		if (match?.type !== TokenType.Ident) return null;

		let decl = parser.getScopeAt(doc, pos)?.findDeclOf(match.data);
		if (!decl) return null;

		return new Location(doc.uri, decl.token.range);
	}
}
