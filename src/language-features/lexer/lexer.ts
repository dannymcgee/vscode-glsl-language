import { Position, Range } from "vscode";
import * as _tokenStream from "glsl-tokenizer/stream";
import * as _tokenString from "glsl-tokenizer/string";

import { Options, _Token } from "./types";
import { Token } from "./token";

const DEFAULT_OPTIONS: Options = {
	version: "440 core",
};

export namespace lexer {
	export function scan(src: string, opts: Options = DEFAULT_OPTIONS): Token[] {
		return (_tokenString(src, opts) as _Token[])
			.map((tok: _Token) => {
				let range = new Range(
					new Position(tok.line-1, Math.max(0, tok.column-tok.data.length)),
					new Position(tok.line-1, tok.column),
				);

				return new Token(tok.type, tok.data, range);
			});
	}
}
