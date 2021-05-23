export interface Fn<Args extends any[], R> {
	(...args: Args): R;
}

export interface Constructor<T = any> extends Function {
	new (...args: any[]): T;
}
