export function assert(expr: any, msg?: string): asserts expr {
	if (!expr) throw new Error(
		msg ?? `Assertion failed: ${expr}`
	);
}
