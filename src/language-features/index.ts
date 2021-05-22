import { languages, ExtensionContext } from "vscode";
import { DefinitionProvider } from "./definition";

import HoverProvider from "./hover";
import SemanticTokensProvider, { SEMANTIC_TOKENS_LEGEND } from "./semantic-tokens";
import { assert, Constructor } from "./utility";

const GLSL = { language: "glsl" };

export function activate(ctx: ExtensionContext) {
	console.log("GLSL Language activated!");

	provide(ctx, "DocumentSemanticTokens", SemanticTokensProvider, SEMANTIC_TOKENS_LEGEND);
	provide(ctx, "Hover", HoverProvider);
	provide(ctx, "Definition", DefinitionProvider);
}

function provide(
	ctx: ExtensionContext,
	key: string,
	Ctor: Constructor,
	...addtl: any[]
) {
	let funcName = `register${key}Provider`;
	let func = languages[funcName];

	// Type-safety is out the window with this, so do some runtime sanity checks
	assert(func != null, `Function '${funcName}' does not exist!`);
	assert(typeof func === "function", `'${funcName}' is not a function!`);

	ctx.subscriptions.push(func(GLSL, new Ctor(), ...addtl));
}
