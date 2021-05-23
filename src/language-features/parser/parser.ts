import { ExtensionContext, Position, Range, TextDocument } from "vscode";

import lexer, { TokenType } from "../lexer";
import { DocumentCache } from "../utility";
import { DocParser } from "./doc-parser";
import { Scope } from "./scope";

export namespace parser {
	let cache: DocumentCache<Scope>;
	let parse: (doc: TextDocument) => Scope;

	export function getScopeAt(doc: TextDocument, range: Range): Scope;
	export function getScopeAt(doc: TextDocument, pos: Position): Scope;
	export function getScopeAt(doc: TextDocument, pos: Range|Position): Scope {
		let scope = parse(doc);

		while (scope.children.length) {
			let childAtPos = scope.children.find(ch => ch.range?.contains(pos));
			if (!childAtPos) break;

			scope = childAtPos;
		}

		return scope;
	}

	export function bootstrap(ctx: ExtensionContext) {
		cache = new DocumentCache(ctx);

		parse = cache.memoize((doc) => {
			let first = doc.lineAt(0).range;
			let last = doc.lineAt(doc.lineCount - 1).range;
			let docRange = new Range(first.start, last.end);

			let tokens = lexer
				.tokenize(doc)
				.filter(tok => tok.type !== TokenType.Whitespace);

			let scope = Scope.fromRange(docRange);
			new DocParser(tokens, scope).parse();

			return scope;
		});
	}
}
