import { ExtensionContext, TextDocument, Uri, workspace } from "vscode";

import { sleep } from ".";
import { Fn } from "./types";

interface Cache<T> {
	version: number;
	value: T;
}

export class DocumentCache<T> {
	private _map = new Map<Uri, Cache<T>>();
	private _hasCtx: boolean;

	constructor(ctx?: ExtensionContext) {
		if (ctx) {
			this._hasCtx = true;
			ctx.subscriptions.push(
				workspace.onDidCloseTextDocument((doc) => {
					this._map.delete(doc.uri);
				}),
			);
		} else {
			this._hasCtx = false;
		}
	}

	memoize(operation: Fn<[TextDocument], T>) {
		return (doc: TextDocument) => {
			if (this._map.has(doc.uri)) {
				let cache = this._map.get(doc.uri)!;
				if (cache.version === doc.version) {
					return cache.value;
				}
			} else if (!this._hasCtx) {
				this._watchForDocumentClose(doc);
			}

			let value = operation(doc);
			this._map.set(doc.uri, { version: doc.version, value });

			return value;
		}
	}

	private async _watchForDocumentClose(doc: TextDocument) {
		await sleep(1000);
		if (doc.isClosed) {
			this._map.delete(doc.uri);
			return;
		}
		this._watchForDocumentClose(doc);
	}
}
