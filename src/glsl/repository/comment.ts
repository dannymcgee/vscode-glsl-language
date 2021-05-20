import { TMGrammarScope } from "../../types";
import { EOL } from "../patterns";

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
			patterns: [
				{
					match: /^\s*\*\s/,
					name: "punctuation.definition.comment.glsl",
				},
			],
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
