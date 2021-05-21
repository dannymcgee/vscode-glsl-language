import { regex } from "./utility";

export const IDENT = /[a-zA-Z][_a-zA-Z0-9]*/;
export const EOL = /(?<!\\)(?=\n)/;

export const TYPE_SIMPLE = /void|bool|(?:atomic_u|u)?int|float|double/;
export const TYPE_STRUCT = /[dbiu]?vec[234]|d?mat[234](?:x[234])?/;

const SAMPLER_MAIN = /sampler|image/;
const SAMPLER_SUFFIX = /[123]D|Cube|Array|Rect|Shadow|Buffer|MS/;
export const TYPE_SAMPLER = regex`/[ui]?(?:${SAMPLER_MAIN})(?:${SAMPLER_SUFFIX})*+/`;
