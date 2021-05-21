import * as _tokenStream from "glsl-tokenizer/stream";
import * as _tokenString from "glsl-tokenizer/string";

import { Fn, Options, Token, TokenStream } from "./types";

export * from "./types";

namespace lexer {
	export const stream: Fn<[Options], TokenStream> = _tokenStream;
	export const scan: Fn<[string, Options], Token[]> = _tokenString;
}
export default lexer;
