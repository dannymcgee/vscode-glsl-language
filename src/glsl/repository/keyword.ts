import { TMGrammarScope } from "../../types";
import { regex } from "../../utility";
import {
	EOL,
	IDENT,
	TYPE_SAMPLER,
	TYPE_SIMPLE,
	TYPE_STRUCT,
} from "../patterns";

export const keyword: TMGrammarScope = {
	patterns: [
		{
			// Storage types - primitive
			match: regex`/${TYPE_SIMPLE}(?!\s*\()/`,
			name: "storage.type.primitive.$0.glsl",
		},
		{
			// Storage types - other
			match: regex`/(${TYPE_STRUCT}|${TYPE_SAMPLER})(?!\s*\()/`,
			name: "storage.type.other.$1.glsl",
		},
		{
			// Storage modifiers
			match: /\b(const|in|out|attribute|uniform|varying|buffer|shared)\b/,
			name: "storage.modifier.$1.glsl",
		},
		{
			// Control keywords
			match: /\b(if|else|for|do|while|break|continue|switch|case|default|discard|return)\b/,
			name: "keyword.control.$1.glsl",
		},
		{
			// Preprocessor define
			begin: regex`/((#)\s*define)\s+(${IDENT})/`,
			beginCaptures: {
				1: { name: "keyword.control.directive.define.glsl" },
				2: { name: "punctuation.definition.directive.glsl" },
				3: { name: "entity.name.function.preprocessor.glsl" },
			},
			end: EOL,
			name: "meta.preprocessor.macro.glsl",
			patterns: [{ include: "source.glsl" }],
		},
		{
			// Preprocessor directive - other
			begin: regex`/(#)\s*(${IDENT})/`,
			beginCaptures: {
				0: { name: "keyword.control.directive.$2.glsl" },
				1: { name: "punctuation.definition.directive.glsl" },
			},
			end: EOL,
			name: "keyword.control.directive.glsl",
			patterns: [
				{
					match: /\\/,
					name: "punctuation.whitespace.glsl",
				},
			],
		},
	],
};
