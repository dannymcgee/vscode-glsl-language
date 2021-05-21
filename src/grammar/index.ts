import { TMGrammar } from "./types";
import {
	comment,
	identifier,
	keyword,
	numericLiteral,
	operator,
	punctuation,
} from "./repository";

const grammar: TMGrammar = {
	name: "OpenGL Shading Language",
	scopeName: "source.glsl",
	patterns: [
		{ include: "#comment" },
		{ include: "#keyword" },
		{ include: "#numericLiteral" },
		{ include: "#punctuation" },
		{ include: "#operator" },
		{ include: "#identifier" },
	],
	repository: {
		comment,
		identifier,
		keyword,
		numericLiteral,
		operator,
		punctuation,
	},
};

export default grammar;
