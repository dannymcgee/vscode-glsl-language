// TODO: Duplication
export const IDENT = /[a-zA-Z][_a-zA-Z0-9]*/;
export const TYPE_SIMPLE = /void|bool|(?:atomic_u|u)?int|float|double/;
export const TYPE_STRUCT = /[dbiu]?vec[234]|d?mat[234](?:x[234])?/;

const SAMPLER_MAIN = /sampler|image/;
const SAMPLER_SUFFIX = /[123]D|Cube|Array|Rect|Shadow|Buffer|MS/;
export const TYPE_SAMPLER = regex`/[ui]?(?:${SAMPLER_MAIN})(?:${SAMPLER_SUFFIX})*/`;

export const INT_HEX = /(0[xX][0-9a-fA-F]+)([uU])?/;
export const INT_DEC = /([0-9]+)([uU])?/;
const FLOAT_1 = /([0-9]*)(\.)([0-9]+)(?:([eE])([0-9]+))?(f|F|lf|LF)?/;
const FLOAT_2 = /([0-9]*)(\.)?([0-9]+)(?:([eE])([0-9]+))(f|F|lf|LF)?/;
export const FLOAT = regex`/(?:${FLOAT_1})|(?:${FLOAT_2})/`;

export function regex(
	strings: TemplateStringsArray,
	...values: (RegExp | string)[]
) {
	let src: string = strings.raw.reduce((accum, curr) => {
		accum += curr;

		let value = values.shift();
		if (typeof value === "string") accum += value;
		else if (value) accum += value.source;

		return accum;
	}, "");

	let endIdx = src.lastIndexOf("/");
	let flags = src.substring(endIdx + 1);
	src = src.substring(0, endIdx).replace(/^\//, "");

	return new RegExp(src, flags);
}
