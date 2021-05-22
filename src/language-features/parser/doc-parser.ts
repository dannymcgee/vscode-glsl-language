import { Position, Range } from "vscode";

import { Token, TokenType } from "../lexer";
import { FuncDecl, MacroDecl, ParamDecl, VariableDecl } from "./decl";
import { FLOAT, IDENT, INT_DEC, INT_HEX, regex } from "./regex";
import { Scope } from "./scope";
import { isDocComment, isType } from "./utility";

export class DocParser {
	private readonly _tokens: Token[];
	private readonly _scopes: Scope[];
	private _ptr = 0;

	get scope()   { return this._scopes[this._scopes.length - 1]; }
	get outer()   { return this._scopes[this._scopes.length - 2]; }

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
		let line = this.current.data;
		let { start, end } = this.current.range;
		let match = line.match(regex`/#\s*define\s+(${IDENT})\s+(\S+)/`);

		if (!match) {
			return this.advance();
		}

		// Create token for the macro identifier
		let identStartIdx = line.indexOf(match[1]);
		let identRange = new Range(
			new Position(start.line, identStartIdx),
			new Position(end.line, identStartIdx + match[1].length)
		)
		let ident = new Token(TokenType.Ident, match[1], identRange);

		// Create token for the macro value
		let valueStartIdx = line.indexOf(match[2]);
		let valueRange = new Range(
			new Position(start.line, valueStartIdx),
			new Position(end.line, identStartIdx + match[2].length),
		);
		let valueType: TokenType;
		if (INT_DEC.test(match[2]) || INT_HEX.test(match[2])) {
			valueType = TokenType.Integer;
		} else if (FLOAT.test(match[2])) {
			valueType = TokenType.Float;
		} else if (IDENT.test(match[2])) {
			valueType = TokenType.Ident;
		}
		let value = new Token(valueType, match[2], valueRange);

		// Find the preceding doc-comment token if it exists
		let docComment: Token;
		if (this.prev?.type === TokenType.BlockComment
			&& this.prev?.data.trim().startsWith("/**"))
		{
			docComment = this.prev;
		}

		// Add the declaration to the current scope
		this.scope.add(match[1], new MacroDecl(
			ident,
			value,
			line.replace(/\s+/g, " "),
			docComment
		));
		this.advance();
	}

	private parseIdent() {
		if (!isType(this.prev))
			return this.advance();

		if (this.checkNext(TokenType.Operator, "("))
			return this.parseFunction();

		return this.parseVariable();
	}

	private parseFunction() {
		let returnType = this.prev;

		let docComment: Token;
		// FIXME
		if (isDocComment(this._tokens[this._ptr - 2])) {
			docComment = this._tokens[this._ptr - 2];
		}

		let funcToken = this.consume(TokenType.Ident);
		let params: ParamDecl[] = [];
		// this.scope.add(func.data, new FuncDecl(func));

		let open = this.consume(TokenType.Operator, "(");
		this.pushScope(open);

		while (!this.check(TokenType.Operator, ")")) {
			if (this.check(TokenType.Operator, ","))
				this.advance();

			let modifier: Token;
			if (!this.checkNext(TokenType.Ident)) {
				if (this.check(TokenType.Keyword)) {
					modifier = this.consume(TokenType.Keyword)
				} else {
					this.advance();
				}
			}

			let type = this.consume(TokenType.Keyword);
			let token = this.consume(TokenType.Ident);
			let param = new ParamDecl(token, type, modifier);

			params.push(param);
			this.scope.add(token.data, param);
		}

		let func = new FuncDecl(funcToken, returnType, params, docComment);
		this.outer.add(funcToken.data, func);

		this.consume(TokenType.Operator, ")");
		this.consume(TokenType.Operator, "{");
	}

	private parseVariable() {
		let type = this.prev;
		let modifier: Token;
		// FIXME
		if (this._tokens[this._ptr - 2]?.type === TokenType.Keyword) {
			modifier = this._tokens[this._ptr - 2];
		}
		let ident = this.consume(TokenType.Ident);

		this.scope.add(ident.data, new VariableDecl(ident, type, modifier));
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

	private pushScope(token: Token) {
		let child = this.scope.addChild(token.range.start);
		this._scopes.push(child);
	}

	private popScope(token: Token) {
		this.scope.close(token.range.end);
		this._scopes.pop();
	}
}
