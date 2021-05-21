import { TMGrammarScope } from "../types";

export const operator: TMGrammarScope = {
	patterns: [
		{
			match: /\+\+|--|[-+*\/%]/,
			name: "keyword.operator.arithmetic.glsl",
		},
		{
			match: /<<|>>|[&^|]/,
			name: "keyword.operator.bitwise.glsl",
		},
		{
			match: /&&|\^\^|\|\|/,
			name: "keyword.operator.logical.glsl",
		},
		{
			match: /(?:[=!<>]=)|[<>]/,
			name: "keyword.operator.comparison.glsl",
		},
		{
			match: /(?:<<|>>|[-+*\/%&^|])?=/,
			name: "keyword.operator.assignment.glsl",
		},
		{
			match: /\?:|[?:]/,
			name: "keyword.operator.selection.glsl",
		},
	],
};
