import { ExtensionContext, languages } from "vscode";
import { Constructor } from "./types";

export * from "./cache";
export * from "./constants";
export * from "./types";

export function assert(expr: any, msg?: string): asserts expr {
	if (!expr) throw new Error(
		msg ?? `Assertion failed: ${expr}`
	);
}

export function sleep(timeout: number) {
	return new Promise<void>((resolve) => {
		setTimeout(resolve, timeout);
	});
}

export function provide(
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

	ctx.subscriptions.push(func({ language: "glsl" }, new Ctor(), ...addtl));
}
