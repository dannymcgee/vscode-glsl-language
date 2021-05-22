import * as vscode from "vscode";
import { Location, Position, TextDocument } from "vscode";

import lexer, { TokenType } from "../lexer";
import parser from "../parser";

export class DefinitionProvider implements vscode.DefinitionProvider {
	provideDefinition(doc: TextDocument, pos: Position): Location|null {
		let tokens = lexer.scan(doc.getText());
		let match = tokens.find(tok => tok.range.contains(pos));

		if (match?.type !== TokenType.Ident) return null;

		let scope = parser.getScope(doc, pos);
		let decl = scope?.get(match.data);

		if (!decl) return null;
		return new Location(doc.uri, decl.token.range);
	}
}
