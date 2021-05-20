import { TMGrammarScope } from "../../types";
import { regex } from "../../utility";
import { IDENT, TYPE_SAMPLER, TYPE_SIMPLE, TYPE_STRUCT } from "../patterns";

export const identifier: TMGrammarScope = {
	patterns: [
		{
			match: regex`/gl_${IDENT}/`,
			name: "variable.language.reserved.glsl",
		},
		{
			match: /GL_[A-Z0-9_]+/,
			name: "entity.name.function.preprocessor.reserved.glsl",
		},
		{
			match: regex`/(${TYPE_SIMPLE})\s*(?=\()/`,
			captures: {
				1: { name: "entity.name.type.primitive.glsl" },
			},
		},
		{
			match: regex`/(${TYPE_STRUCT}|${TYPE_SAMPLER})\s*(?=\()/`,
			captures: {
				1: { name: "entity.name.type.other.glsl" },
			},
		},
		{
			match: regex`/(${IDENT})\s*(?=\()/`,
			captures: {
				1: { name: "entity.name.function.glsl" },
			},
		},
		{
			match: /\b([a-zA-Z][_a-zA-Z0-9]*)\b/,
			captures: {
				1: { name: "variable.other.glsl" },
			},
		},
	],
};
