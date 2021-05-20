import { TMGrammar } from '../types';
import { identifier, punctuation, stringLiteral } from './repository';

const grammar: TMGrammar = {
	name: 'OpenGL Shading Language',
	scopeName: 'source.glsl',
	patterns: [
		{ include: '#stringLiteral' },
		{ include: '#punctuation' },
		{ include: '#identifier' },
	],
	repository: {
		identifier,
		punctuation,
		stringLiteral,
	},
};

export default grammar;
