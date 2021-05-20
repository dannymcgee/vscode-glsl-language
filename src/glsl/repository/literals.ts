import { TMGrammarScope } from "../../types";

export const numericLiteral: TMGrammarScope = {
	patterns: [
		{
			// Int - hexadecimal
			match: /(0[xX][0-9a-fA-F]+)([uU])?/,
			name: "meta.literal.numeric.hexadecimal.glsl",
			captures: {
				1: { name: "constant.numeric.integer.hexadecimal.glsl" },
				2: { name: "keyword.numeric.suffix.unsigned.glsl" },
			},
		},
		{
			// Float - Mandatory decimal, optional exponent
			match: /([0-9]*)(\.)([0-9]+)(?:([eE])([0-9]+))?(f|F|lf|LF)?/,
			name: "meta.literal.numeric.float.glsl",
			captures: {
				1: { name: "constant.numeric.float.glsl" },
				2: { name: "punctuation.separator.numeric.decimal.glsl" },
				3: { name: "constant.numeric.float.glsl" },
				4: { name: "keyword.numeric.exponent.glsl" },
				5: { name: "constant.numeric.float.glsl" },
				6: { name: "keyword.numeric.suffix.size.glsl" },
			},
		},
		{
			// Float - Optional decimal, mandatory exponent
			match: /([0-9]*)(\.)?([0-9]+)(?:([eE])([0-9]+))(f|F|lf|LF)?/,
			name: "meta.literal.numeric.float.glsl",
			captures: {
				1: { name: "constant.numeric.float.glsl" },
				2: { name: "punctuation.separator.numeric.decimal.glsl" },
				3: { name: "constant.numeric.float.glsl" },
				4: { name: "keyword.numeric.exponent.glsl" },
				5: { name: "constant.numeric.float.glsl" },
				6: { name: "keyword.numeric.suffix.size.glsl" },
			},
		},
		{
			// Int - decimal
			match: /([0-9]+)([uU])?/,
			name: "meta.literal.numeric.decimal.glsl",
			captures: {
				1: { name: "constant.numeric.integer.decimal.glsl" },
				2: { name: "keyword.numeric.suffix.unsigned.glsl" },
			},
		},
	],
};
