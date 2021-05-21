import { regex } from "./utility";

const DOCBLOCK_START = /^\s*\/\*\*(?!\/)/;
const DOCBLOCK_END = /^\s*\*\//;
const INNER_DOCBLOCK_LINE = regex`/(${DOCBLOCK_START}|^\s*\* )/`;

export default {
	comments: {
		lineComment: "//",
		blockComment: ["/*", "*/"],
	},
	brackets: [
		["(", ")"],
		["[", "]"],
		["{", "}"],
	],
	surroundingPairs: [
		["(", ")"],
		["[", "]"],
		["{", "}"],
	],
	autoClosingPairs: [
		{ open: "{", close: "}" },
		{ open: "[", close: "]" },
		{ open: "(", close: ")" },
		{ open: "/**", close: " */" },
	],
	onEnterRules: [
		{
			// e.g., /**| */
			beforeText: regex`/${DOCBLOCK_START}\s*/`,
			afterText: DOCBLOCK_END,
			action: {
				indent: "indentOutdent",
				appendText: " * ",
			},
		},
		{
			// e.g., /** ...|
			beforeText: regex`/${DOCBLOCK_START}.*(?<!\*\/)$/`,
			action: {
				indent: "none",
				appendText: " * ",
			},
		},
		{
			// e.g.,  * ...|
			beforeText: /^\s*\* .*$/,
			previousLineText: INNER_DOCBLOCK_LINE,
			action: {
				indent: "none",
				appendText: "* ",
			},
		},
		{
			// e.g., */|
			beforeText: DOCBLOCK_END,
			previousLineText: INNER_DOCBLOCK_LINE,
			action: {
				indent: "none",
				removeText: 1,
			},
		},
	],
};
