export interface Fn<Args extends any[], R> {
	(...args: Args): R;
}
