import { TextDocument, Uri } from "vscode";

import { sleep } from ".";
import { Fn } from "./types";

interface Cache<T> {
	version: number;
	value: T;
}

export class DocumentCache<T> {
	private _map = new Map<Uri, Cache<T>>();

	memoize(operation: Fn<[TextDocument], T>) {
		return (doc: TextDocument) => {
			if (this._map.has(doc.uri)) {
				let cache = this._map.get(doc.uri)!;
				if (cache.version === doc.version) {
					return cache.value;
				}
			}
			// If this is the first time we're seeing this document, watch for
			// it to close so we don't keep the reference alive forever.
			else {
				this._disposeCacheWhenClosed(doc);
			}

			let value = operation(doc);
			this._map.set(doc.uri, { version: doc.version, value });

			return value;
		}
	}

	private async _disposeCacheWhenClosed(doc: TextDocument) {
		await sleep(5000);

		if (doc.isClosed) {
			this._map.delete(doc.uri);
			return;
		}

		this._disposeCacheWhenClosed(doc);
	}
}
