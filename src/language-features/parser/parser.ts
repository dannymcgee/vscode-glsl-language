import { Range, TextDocument, Uri } from "vscode";
import { Token, TokenType } from "../lexer";

import { DocParser } from "./doc-parser";
import { Scope } from "./scope";

export namespace parser {
	const map = new Map<Uri, Scope>();

	export function parse(doc: TextDocument, tokens: Token[]): Scope {
		let first = doc.lineAt(0).range;
		let last = doc.lineAt(doc.lineCount - 1).range;
		let docRange = new Range(first.start, last.end);

		tokens = tokens.filter(tok => tok.type !== TokenType.Whitespace);
		let scope = Scope.fromRange(docRange);
		new DocParser(tokens, scope).parse();

		map.set(doc.uri, scope);

		return scope;
	}
}
