import { languages, ExtensionContext } from "vscode";

import HoverProvider from "./hover";
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

	ctx.subscriptions.push(
		languages.registerHoverProvider({ language: "glsl" }, new HoverProvider())
	);
}
