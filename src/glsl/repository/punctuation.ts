import { TMGrammarScope } from '../../types';

export const punctuation: TMGrammarScope = {
	patterns: [
		{
			match: /[()]/,
			name: 'punctuation.brace.round.glsl',
		},
		{
			match: /[{}]/,
			name: 'punctuation.brace.curly.glsl',
		},
		{
			match: /[\[\]]/,
			name: 'punctuation.brace.square.glsl',
		},
		{
			match: /,/,
			name: 'punctuation.separator.comma.glsl',
		},
		{
			match: /:/,
			name: 'punctuation.separator.key-value.glsl',
		},
		{
			match: /\./,
			name: 'punctuation.accessor.glsl',
		},
		{
			match: /;/,
			name: 'punctuation.terminator.glsl',
		},
	],
};
