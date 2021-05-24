import { extensions } from "vscode";

export const EXTENSION_ID = "dannymcgee.vscode-glsl-language";
export const EXTENSION_PATH = extensions
	.getExtension(EXTENSION_ID)!
	.extensionPath;

export const BUILT_INS = {
	comp: [
		"gl_NumWorkGroups",
		"gl_WorkGroupSize",
		"gl_WorkGroupID",
		"gl_LocalInvocationID",
		"gl_GlobalInvocationID",
		"gl_LocalInvocationIndex",
	],
	vert: [
		"gl_VertexID",
		"gl_InstanceID",
		"gl_Position",
		"gl_PointSize",
		"gl_ClipDistance",
	],
	geom: [
		"gl_Position",
		"gl_PointSize",
		"gl_ClipDistance",
		"gl_PrimitiveIDIn",
		"gl_InvocationID",
		"gl_PrimitiveID",
		"gl_Layer",
		"gl_ViewportIndex",
	],
	tesc: [
		"gl_Position",
		"gl_PointSize",
		"gl_ClipDistance",
		"gl_PatchVerticesIn",
		"gl_PrimitiveID",
		"gl_PatchVerticesIn",
		"gl_InvocationID",
		"gl_TessLevelOuter",
		"gl_TessLevelInner",
	],
	tese: [
		"gl_Position",
		"gl_PointSize",
		"gl_ClipDistance",
		"gl_PatchVerticesIn",
		"gl_PrimitiveID",
		"gl_TessCoord",
		"gl_TessLevelOuter",
		"gl_TessLevelInner",
	],
	frag: [
		"gl_FragCoord",
		"gl_FrontFacing",
		"gl_ClipDistance",
		"gl_PointCoord",
		"gl_PrimitiveID",
		"gl_SampleID",
		"gl_SamplePosition",
		"gl_SampleMaskIn",
		"gl_Layer",
		"gl_ViewportIndex",
		"gl_FragDepth",
		"gl_SampleMask",
		"gl_FragColor",
		"gl_FragData",
	],
}

const keys = Object.keys(BUILT_INS);

export const UNIQUE_BUILT_INS = Object
	.entries(BUILT_INS)
	.map(([key, vars]) => {
		let otherVars = keys
			.filter(k => k !== key)
			.reduce((accum, k) => accum.concat(BUILT_INS[k]), [] as string[]);

		let uniques = vars.filter(v => !otherVars.includes(v));

		return [key, uniques] as [string, string[]];
	})
	.reduce((accum, [key, vars]) => {
		accum[key] = vars;
		return accum;
	}, {} as typeof BUILT_INS);
