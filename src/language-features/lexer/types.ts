import { Range } from "vscode";

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

// http://stack.gl/packages/#stackgl/glsl-tokenizer
export interface _Token {
	type: TokenType;
	data: string;
	position: number;
	line: number;
	column: number;
}

export interface Token {
	type: TokenType;
	data: string;
	range: Range;
	toString(): string;
}
