import { Position, Range } from "vscode";

import { Decl } from "./decl";

export class Scope {
	private _decls = new Map<string, Decl>();
	private _parent?: Scope;
	private _depth: number;

	private _start: Position;
	private _end?: Position;
	private _range?: Range;
	get range() {
		if (!this._end) return null;
		return this._range ??= new Range(this._start, this._end);
	}

	private _children: Scope[] = [];
	get children() { return this._children as readonly Scope[]; }

	private constructor(start: Position, parent?: Scope, depth = 0) {
		this._start = start;
		this._parent = parent;
		this._depth = depth;
	}

	static fromRange(range: Range) {
		let scope = new Scope(range.start);
		scope.close(range.end);

		return scope;
	}

	print(): string {
		let pre = "\t".repeat(this._depth + this._depth);
		let children = this._children.map(ch => ch.print());

		let lines = [
			`Scope {`,
			`	depth: ${this._depth}`,
			`	start: ${this._start.line + 1}:${this._start.character + 1}`,
			`	end: ${
					this._end
						? `${this._end.line + 1}:${this._end.character + 1}`
						: "null"
				}`,
			`	declarations: [`,
			`	]`,
			`	children: [`,
			`	]`,
			`}`,
		].map(line => pre + line);

		lines = [
			...lines.slice(0, 7),
			...children,
			...lines.slice(7),
		];

		lines = [
			...lines.slice(0, 5),
			...this._printDeclarations(pre),
			...lines.slice(5),
		];

		return lines.join("\n");
	}

	private _printDeclarations(pre: string): string[] {
		return Array
			.from(this._decls.entries())
			.map(([name, decl]) =>
				pre + `		${name}: ${decl.print(this._depth + this._depth + 2)}`
			);
	}

	get(ident: string): Decl|null {
		return this._decls.get(ident)
			?? this._parent?.get(ident)
			?? null;
	}

	addChild(start: Position) {
		// TODO: Verify position is in range
		let child = new Scope(start, this, this._depth + 1);
		this._children.push(child);

		return child;
	}

	add(ident: string, decl: Decl) {
		this._decls.set(ident, decl);
	}

	close(end: Position) {
		// TODO: Verify all children are in range
		this._end = end;
	}
}
