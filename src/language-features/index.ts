import { languages, ExtensionContext } from "vscode";

import SemanticTokensProvider, { SEMANTIC_TOKENS_LEGEND } from "./semantic-tokens";

export function activate(ctx: ExtensionContext) {
	console.log("GLSL Language activated!");

	ctx.subscriptions.push(
		languages.registerDocumentSemanticTokensProvider(
			{ language: "glsl" },
			new SemanticTokensProvider(),
			SEMANTIC_TOKENS_LEGEND
		)
	);
}
