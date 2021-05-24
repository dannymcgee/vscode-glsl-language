import {
	Disposable,
	ExtensionContext,
	languages,
	TextDocument,
	TextDocumentChangeEvent,
	TextEditor,
	Uri,
	window,
	workspace,
} from "vscode";
import * as os from "os";

import { Analyzer } from "./analyzer";

namespace diagnostics {
	const collection = languages.createDiagnosticCollection("GLSL Diagnostics");
	const analyzers = new Map<Uri, Analyzer>();
	let ctx: ExtensionContext;
	let subs: Disposable[] = [];

	export async function bootstrap(context: ExtensionContext) {
		ctx = context;

		if (!/^(darwin|linux|win32)$/.test(os.platform())) {
			window.showWarningMessage(
				"OpenGL Diagnostics are only supported on Windows, OSX, and Linux. "
					+ "If you believe you're seeing this message in error, please "
					+ "raise an issue on the extension's GitHub repository." // TODO: Add hyperlink
			);
			return;
		}

		let doc = window.activeTextEditor?.document;
		if (doc && languages.match("glsl", doc)) {
			await addWorker(doc);
		}

		subs.push(
			window.onDidChangeActiveTextEditor(onDidChangeActiveTextEditor),
			workspace.onDidOpenTextDocument(onDidOpenTextDocument),
			workspace.onDidChangeTextDocument(onDidChangeTextDocument),
			workspace.onDidSaveTextDocument(onDidSaveTextDocument),
			workspace.onDidCloseTextDocument(onDidCloseTextDocument),
		)
		ctx.subscriptions.push(...subs);
	}

	async function abort() {
		subs.forEach(sub => sub.dispose());
		if (analyzers.size) await Promise.all(Array
			.from(analyzers.values())
			.map(analyzer => analyzer.dispose())
		);
		analyzers.clear();
		collection.clear();
	}

	async function addWorker(doc: TextDocument) {
		let analyzer: Analyzer;
		try { analyzer = new Analyzer(ctx, doc); }
		catch (err) {
			window.showErrorMessage(err.message);
			return abort();
		}

		analyzers.set(doc.uri, analyzer);
		let diagnostics = await analyzer.validate();

		collection.set(doc.uri, diagnostics);
	}

	async function notifyWorker(doc: TextDocument) {
		let analyzer = analyzers.get(doc.uri)!;
		let diagnostics = await analyzer.validate();

		collection.set(doc.uri, diagnostics);
	}

	async function disposeWorker(doc: TextDocument) {
		if (analyzers.has(doc.uri)) {
			let analyzer = analyzers.get(doc.uri)!;
			await analyzer.dispose();
		}
		collection.delete(doc.uri);
		analyzers.delete(doc.uri);
	}

	async function onDidChangeActiveTextEditor(editor?: TextEditor) {
		if (!editor) return;
		if (!languages.match("glsl", editor.document)) return;
		if (analyzers.has(editor.document.uri)) return;

		await addWorker(editor.document);
	}

	async function onDidOpenTextDocument(doc: TextDocument) {
		if (!languages.match("glsl", doc)) return;
		if (analyzers.has(doc.uri)) return;

		await addWorker(doc);
	}

	async function onDidSaveTextDocument(doc: TextDocument) {
		if (!languages.match("glsl", doc)) return;
		if (!analyzers.has(doc.uri)) return;

		await notifyWorker(doc);
	}

	async function onDidChangeTextDocument({
		document: doc
	}: TextDocumentChangeEvent) {
		if (!languages.match("glsl", doc)) return;
		if (!analyzers.has(doc.uri)) return;

		await notifyWorker(doc);
	}

	async function onDidCloseTextDocument(doc: TextDocument) {
		if (!analyzers.has(doc.uri)) return;

		await disposeWorker(doc);
	}
}

export default diagnostics;
