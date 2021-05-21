import { SemanticTokensLegend } from "vscode";

export enum SemanticToken {
	Macro = "macro",
	Function = "function",
	Param = "parameter",
	Variable = "variable",
}

export const SEMANTIC_TOKENS_LEGEND = new SemanticTokensLegend([
	SemanticToken.Macro,
	SemanticToken.Function,
	SemanticToken.Param,
	SemanticToken.Variable,
]);
