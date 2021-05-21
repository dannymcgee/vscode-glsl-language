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

	export function getScope(doc: TextDocument, range: Range): Scope|null {
		let scope = map.get(doc.uri);
		if (!scope) return null;

		while (scope.children.length) {
			let candidates = scope.children.filter(ch => ch.range.contains(range));
			if (candidates.length > 1) throw new Error(
				`Multiple candidates found for range ${range.start.line}:${range.start.character}`
				+ ` - ${range.end.line}:${range.end.character}`
			);

			if (!candidates.length) break;

			scope = candidates[0];
		}

		return scope;
	}
}
