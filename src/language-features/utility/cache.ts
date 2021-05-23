import { ExtensionContext, TextDocument, Uri, workspace } from "vscode";

import { Fn } from "./types";

interface Cache<T> {
	version: number;
	value: T;
}

export class DocumentCache<T> {
	private _map = new Map<Uri, Cache<T>>();

	constructor(ctx: ExtensionContext) {
		ctx.subscriptions.push(
			workspace.onDidCloseTextDocument((doc) => {
				this._map.delete(doc.uri);
			}),
		);
	}

	memoize(operation: Fn<[TextDocument], T>) {
		return (doc: TextDocument) => {
			if (this._map.has(doc.uri)) {
				let cache = this._map.get(doc.uri)!;
				if (cache.version === doc.version) {
					return cache.value;
				}
			}

			let value = operation(doc);
			this._map.set(doc.uri, { version: doc.version, value });

			return value;
		}
	}
}
