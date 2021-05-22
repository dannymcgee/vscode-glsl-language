import { Position, Range, TextDocument, Uri } from "vscode";

import { Token, TokenType } from "../lexer";
import { DocParser } from "./doc-parser";
import { Scope } from "./scope";

export namespace parser {
	const map = new Map<Uri, Scope>();

	// TODO: Figure out how to cache this result and invalidate it when changes happen
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

	export function getScopeAt(doc: TextDocument, range: Range): Scope|null;
	export function getScopeAt(doc: TextDocument, pos: Position): Scope|null;

	export function getScopeAt(
		doc: TextDocument,
		rangeOrPos: Range|Position,
	): Scope|null {
		let scope = map.get(doc.uri);
		if (!scope) return null;

		let { children } = scope;
		while (children.length) {
			let candidates = children.filter(ch => ch.range?.contains(rangeOrPos));
			// #region debug
			if (candidates.length > 1) {
				if (rangeOrPos instanceof Position) {
					throw new Error(`Multiple candidates found for position ${
						rangeOrPos.line
					}:${
						rangeOrPos.character
					}`);
				}
				throw new Error(`Multiple candidates found for range ${
					rangeOrPos.start.line}:${rangeOrPos.start.character
				} - ${rangeOrPos.end.line}:${rangeOrPos.end.character}`);
			}
			// #endregion
			if (!candidates.length) break;

			scope = candidates[0];
		}

		return scope ?? null;
	}
}
