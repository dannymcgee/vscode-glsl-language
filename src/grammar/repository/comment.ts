import { TMGrammarScope } from "../types";
import { regex } from "../utility";
import { EOL, IDENT } from "../patterns";

const DOC_COMMENT_LINE_PUNC: TMGrammarScope = {
	match: /^\s*\*\s/,
	name: "punctuation.definition.comment.glsl",
};

const DOC_COMMENT_PATTERNS: TMGrammarScope[] = [
	DOC_COMMENT_LINE_PUNC,
	{
		begin: /```/,
		end: /```/,
		name: "meta.docblock.example-code.glsl",
		// prettier-ignore
		patterns: [
			DOC_COMMENT_LINE_PUNC,
			{ include: "source.glsl" },
		],
	},
	{
		match: regex`/(@param)\s+(${IDENT})/`,
		captures: {
			1: { name: "storage.type.class.glsl" },
			2: { name: "variable.other.glsl" },
		},
	},
	{
		match: regex`/@${IDENT}/`,
		name: "storage.type.class.glsl",
	},
];

export const comment: TMGrammarScope = {
	patterns: [
		{
			begin: /\/\//,
			beginCaptures: {
				0: { name: "punctuation.definition.comment.glsl" },
			},
			end: EOL,
			name: "comment.line.glsl",
		},
		{
			begin: /\/\*\*/,
			beginCaptures: {
				0: { name: "punctuation.definition.comment.begin.glsl" },
			},
			end: /\*\//,
			endCaptures: {
				0: { name: "punctuation.definition.comment.end.glsl" },
			},
			name: "comment.block.documentation.glsl",
			patterns: DOC_COMMENT_PATTERNS,
		},
		{
			begin: /\/\*/,
			beginCaptures: {
				0: { name: "punctuation.definition.comment.begin.glsl" },
			},
			end: /\*\//,
			endCaptures: {
				0: { name: "punctuation.definition.comment.end.glsl" },
			},
			name: "comment.block.glsl",
		},
	],
};
