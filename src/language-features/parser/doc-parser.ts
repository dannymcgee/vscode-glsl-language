import { Token, TokenType } from "../lexer";
import { Decl } from "./declaration";
import { regex } from "./regex";
import { Scope } from "./scope";

// TODO: Duplication
const IDENT = /[a-zA-Z][_a-zA-Z0-9]*/;
const TYPE_SIMPLE = /void|bool|(?:atomic_u|u)?int|float|double/;
const TYPE_STRUCT = /[dbiu]?vec[234]|d?mat[234](?:x[234])?/;

const SAMPLER_MAIN = /sampler|image/;
const SAMPLER_SUFFIX = /[123]D|Cube|Array|Rect|Shadow|Buffer|MS/;
const TYPE_SAMPLER = regex`/[ui]?(?:${SAMPLER_MAIN})(?:${SAMPLER_SUFFIX})*/`;

export class DocParser {
	private readonly _tokens: Token[];
	private readonly _scopes: Scope[];
	private _ptr = 0;

	get scope()   { return this._scopes[this._scopes.length - 1]; }

	get prev()    { return this._tokens[this._ptr - 1]; }
	get current() { return this._tokens[this._ptr]; }
	get next()    { return this._tokens[this._ptr + 1]; }

	get isDone() {
		return this.current == null;
	}

	constructor(tokens: Token[], top: Scope) {
		this._tokens = tokens;
		this._scopes = [top];
	}

	parse() {
		while (!this.isDone) {
			switch (this.current.type) {
				case TokenType.Preprocessor: {
					this.parseMacro();
					break;
				}
				case TokenType.Ident: {
					this.parseIdent();
					break;
				}
				case TokenType.Operator: {
					if (this.check(TokenType.Operator, "{")) {
						this.pushScope(this.consume(TokenType.Operator, "{"));
					} else if (this.check(TokenType.Operator, "}")) {
						this.popScope(this.consume(TokenType.Operator, "}"));
					} else {
						this.advance();
					}
					break;
				}
				default: {
					this.advance();
				}
			}
		}
	}

	private parseMacro() {
		let match = this.current.data.match(regex`/#\s*define\s+(${IDENT})/`);
		if (match) {
			this.scope.add(match[1], Decl.macro(this.current));
		}
		this.advance();
	}

	private parseIdent() {
		if (!this.isType(this.prev))
			return this.advance();

		if (this.checkNext(TokenType.Operator, "("))
			return this.parseFunction();

		return this.parseVariable();
	}

	private parseFunction() {
		let func = this.consume(TokenType.Ident);
		this.scope.add(func.data, Decl.func(func));

		let open = this.consume(TokenType.Operator, "(");
		this.pushScope(open);

		while (!this.check(TokenType.Operator, ")")) {
			if (this.check(TokenType.Operator, ","))
				this.advance();

			if (!this.checkNext(TokenType.Ident))
				this.advance();

			// TODO
			let _type = this.consume(TokenType.Keyword);
			let param = this.consume(TokenType.Ident);
			this.scope.add(param.data, Decl.param(param));
		}

		this.consume(TokenType.Operator, ")");
		this.consume(TokenType.Operator, "{");
	}

	private parseVariable() {
		let ident = this.consume(TokenType.Ident);
		this.scope.add(ident.data, Decl.variable(ident));
	}

	private advance() {
		this._ptr++;
	}

	private check(type: TokenType, data?: string): boolean {
		return (this.current.type === type
			&& (!data || this.current.data === data));
	}

	private checkNext(type: TokenType, data?: string): boolean {
		return (this.next.type === type
			&& (!data || this.next.data === data));
	}

	private isType(token: Token): boolean {
		return token.type === TokenType.Keyword
			&& (TYPE_SIMPLE.test(token.data)
				|| TYPE_STRUCT.test(token.data)
				|| (TYPE_SAMPLER as RegExp).test(token.data));
	}

	private consume(type: TokenType, data?: string): Token {
		if (this.check(type, data)) {
			this.advance();
			return this.prev;
		}

		throw new Error((data
			? `Expected token type ${type} with data '${data}'`
			: `Expected token type ${type}`)
			+ `, but received ${this.current.type} : '${this.current.data}'`);
	}

	private findNext(type: TokenType, data?: string): Token|null {
		for (let i = this._ptr; i < this._tokens.length; i++) {
			let tok = this._tokens[i];
			if (tok.type === type && tok.data === data) {
				return tok;
			}
		}
		return null;
	}

	private pushScope(token: Token) {
		let child = this.scope.addChild(token.range.start);
		this._scopes.push(child);
	}

	private popScope(token: Token) {
		this.scope.close(token.range.end);
		this._scopes.pop();
	}
}
