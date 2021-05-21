import { languages, ExtensionContext } from "vscode";

import { SemanticTokensProvider } from "./semantic-tokens.provider";
import { SEMANTIC_TOKENS_LEGEND } from "./semantic-tokens.legend";

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
