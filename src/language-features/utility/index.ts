export interface Constructor<T = any> extends Function {
	new (...args: any[]): T;
}

export function assert(expr: any, msg?: string): asserts expr {
	if (!expr) throw new Error(
		msg ?? `Assertion failed: ${expr}`
	);
}
