import { Position, Range, TextDocument } from "vscode";
import * as _tokenStream from "glsl-tokenizer/stream";
import * as _tokenString from "glsl-tokenizer/string";

import { Options, _Token } from "./types";
import { Token } from "./token";

const DEFAULT_OPTIONS: Options = {
	version: "440 core",
};

export namespace lexer {
	export function tokenize(doc: TextDocument): Token[] {
		let src = doc.getText();

		return (_tokenString(src, DEFAULT_OPTIONS) as _Token[])
			.map((tok: _Token) => {
				let range = new Range(
					new Position(tok.line-1, Math.max(0, tok.column-tok.data.length)),
					new Position(tok.line-1, tok.column),
				);

				return new Token(tok.type, tok.data, range);
			});
	}
}
