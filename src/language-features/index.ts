import { ExtensionContext } from "vscode";

import { provide } from "./utility";
import diagnostics from "./diagnostics";
import lexer from "./lexer";
import parser from "./parser";
import DefinitionProvider from "./definition";
import HoverProvider from "./hover";
import SemanticTokensProvider, { SEMANTIC_TOKENS_LEGEND } from "./semantic-tokens";

export function activate(ctx: ExtensionContext) {
	console.log("GLSL Language activated!");

	lexer.bootstrap(ctx);
	parser.bootstrap(ctx);
	diagnostics.bootstrap(ctx);

	provide(ctx, "DocumentSemanticTokens", SemanticTokensProvider, SEMANTIC_TOKENS_LEGEND);
	provide(ctx, "Hover", HoverProvider);
	provide(ctx, "Definition", DefinitionProvider);
}
