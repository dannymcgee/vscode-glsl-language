import { ExtensionContext } from "vscode";
import { DefinitionProvider } from "./definition";
import diagnostics from "./diagnostics";

import HoverProvider from "./hover";
import lexer from "./lexer";
import parser from "./parser";
import SemanticTokensProvider, { SEMANTIC_TOKENS_LEGEND } from "./semantic-tokens";
import { provide } from "./utility";

export function activate(ctx: ExtensionContext) {
	console.log("GLSL Language activated!");

	lexer.bootstrap(ctx);
	parser.bootstrap(ctx);
	diagnostics.bootstrap(ctx);

	provide(ctx, "DocumentSemanticTokens", SemanticTokensProvider, SEMANTIC_TOKENS_LEGEND);
	provide(ctx, "Hover", HoverProvider);
	provide(ctx, "Definition", DefinitionProvider);
}
