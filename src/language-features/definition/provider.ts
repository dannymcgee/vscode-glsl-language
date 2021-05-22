import * as vscode from "vscode";
import {
	CancellationToken,
	Location,
	LocationLink,
	Position,
	ProviderResult,
	TextDocument,
} from "vscode";

import lexer, { TokenType } from "../lexer";
import parser from "../parser";

export class DefinitionProvider implements vscode.DefinitionProvider {
	provideDefinition(
		doc: TextDocument,
		pos: Position,
		token: CancellationToken
	): ProviderResult<Location|Location[]|LocationLink[]> {
		let tokens = lexer.scan(doc.getText());
		let match = tokens.find(tok => tok.range.contains(pos));

		if (match?.type !== TokenType.Ident) return;

		let scope = parser.getScope(doc, pos);
		let decl = scope?.get(match.data);

		if (!decl) return;
		return new Location(doc.uri, decl.token.range);
	}
}
