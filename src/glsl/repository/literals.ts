import { TMGrammarScope } from '../../types';

export const stringLiteral: TMGrammarScope = {
	name: 'string.glsl',
	begin: /"/,
	beginCaptures: {
		0: { name: 'punctuation.definition.string.begin.glsl' },
	},
	end: /(?<!\\)(")|\\\\(")/,
	endCaptures: {
		1: { name: 'punctuation.definition.string.end.glsl' },
		2: { name: 'punctuation.definition.string.end.glsl' },
	},
};
