import * as stream from "stream";

// http://stack.gl/packages/#stackgl/glsl-tokenizer

export interface Fn<Args extends any[] = [], Return = void> {
	(...args: Args): Return;
}

export interface Options {
	version?: string;
}

export enum TokenType {
	BlockComment = "block-comment",
	LineComment = "line-comment",
	Preprocessor = "preprocessor",
	Operator = "operator",
	Float = "float",
	Ident = "ident",
	Builtin = "builtin",
	Integer = "integer",
	Whitespace = "whitespace",
	Keyword = "keyword",
	EOF = "eof",
}

export interface Token {
	type: TokenType;
	data: string;
	position: number;
	line: number;
	column: number;
}

export type TokenStream = Omit<stream.Duplex, "on"> & {
	on(event: "close", listener: () => void): TokenStream;
	on(event: "data", listener: (token: Token) => void): TokenStream;
	on(event: "end", listener: () => void): TokenStream;
	on(event: "error", listener: (err: Error) => void): TokenStream;
	on(event: "pause", listener: () => void): TokenStream;
	on(event: "readable", listener: () => void): TokenStream;
	on(event: "resume", listener: () => void): TokenStream;
};
