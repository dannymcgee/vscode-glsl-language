import { SemanticTokensLegend } from "vscode";

export enum SemanticToken {
	Macro = "macro",
}

export const SEMANTIC_TOKENS_LEGEND = new SemanticTokensLegend([
	"macro",
]);
