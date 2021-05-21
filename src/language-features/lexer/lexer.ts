import { Position, Range } from "vscode";
import * as _tokenStream from "glsl-tokenizer/stream";
import * as _tokenString from "glsl-tokenizer/string";

import { Options, Token, _Token } from "./types";

export namespace lexer {
	export function scan(src: string, opts: Options): Token[] {
		return (_tokenString(src, opts) as _Token[])
			.map((tok: _Token) => {
				let range = new Range(
					new Position(tok.line-1, Math.max(0, tok.column-tok.data.length)),
					new Position(tok.line-1, tok.column),
				);

				return {
					type: tok.type,
					data: tok.data,
					range,
					toString(this: Token) {
						let { start, end } = this.range;

						return [
							`Token {`,
							`	type: ${this.type}`,
							`	data: ${this.data}`,
							`	range: {`,
							`		start: ${start.line + 1}:${start.character}`,
							`		end: ${end.line + 1}:${end.character}`,
							`	}`,
							`}`,
						].join("\n");
					}
				};
			});
	}
}
