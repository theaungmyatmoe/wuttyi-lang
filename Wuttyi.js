import assert from 'assert';
import Environment from "./Environment.js";


/* It evaluates a JavaScript expression and returns the result */
export default class Wuttyi {
    // Create the Wuttyi instance with the global environment
    constructor(env = new Environment()) {
        this.global = env;
    }

    // -------------------- Self evaluation -------------
    // Evaluate an expression in the given environment
    eval(exp, env = this.global) {
        if (isNumber(exp)) {
            return exp;
        }

        if (isString(exp)) {
            return exp.slice(1, -1)
        }

        // -------------- Math Operators ---------------
        if (exp[0] === '+') {
            return this.eval(exp[1], env) + this.eval(exp[2], env);
        }

        if (exp[0] === '-') {
            return this.eval(exp[1], env) - this.eval(exp[2], env);
        }

        if (exp[0] === '*') {
            return this.eval(exp[1], env) * this.eval(exp[2], env);
        }

        if (exp[0] === '/') {
            return this.eval(exp[1], env) / this.eval(exp[2], env);
        }

        if (exp[0] === '%') {
            return this.eval(exp[1], env) % this.eval(exp[2], env);
        }

        // ------------------- Logical Operator -----------------

        if (exp[0] === '>') {
            return this.eval(exp[1], env) > this.eval(exp[2], env);
        }

        if (exp[0] === '<') {
            return this.eval(exp[1], env) < this.eval(exp[2], env);
        }

        if (exp[0] === '>=') {
            return this.eval(exp[1], env) >= this.eval(exp[2], env);
        }

        if (exp[0] === '<=') {
            return this.eval(exp[1], env) <= this.eval(exp[2], env);
        }

        // ----------------- Equality operator (strict) -------------
        if (exp[0] === '==') {
            return this.eval(exp[1], env) === this.eval(exp[2], env);
        }

        // ------------ Block -----------------
        if (exp[0] === 'begin') {
            // set the parent env of the block
            const blockEnv = new Environment({}, env);
            return this._evalBlock(exp, blockEnv);
        }

        // ----------------- Variable declaration ---------------
        if (exp[0] === 'var') {
            const [_, name, value] = exp;
            return env.define(name, this.eval(value, env));
        }

        if (exp[0] === 'set') {
            const [_, name, value] = exp;
            return env.assign(name, this.eval(value, env));
        }

        // ---------------- Variable Access ---------------------------
        if (isVariableName(exp)) {
            return env.lookup(exp);
        }

        // ------------ If  ---------------------------
        if (exp[0] === 'if') {
            const [_tag, condition, consequent, alternate] = exp;
            if (this.eval(condition, env)) {
                return this.eval(consequent, env);
            }
            return this.eval(alternate, env);
        }

        // -------------- while ---------------
        if (exp[0] === 'while') {
            const [_tag, condition, body] = exp;
            let result;
            while (this.eval(condition, env)) {
                result = this.eval(body, env);
            }
            return result;
        }
        throw `Unimplemented: ${exp.toString()}`;
    }

    // evaluate the expressions
    _evalBlock(block, env) {
        let result;
        const [_tag, ...expressions] = block;
        expressions.forEach(exp => {
            result = this.eval(exp, env);
        })
        return result;
    }
}


function isNumber(exp) {
    return typeof exp === 'number';
}

function isString(exp) {
    return typeof exp === 'string' && exp.startsWith('"') && exp.endsWith('"');
}

function isVariableName(exp) {
    return typeof exp === 'string' && /^[a-zA-Z][a-zA-Z0-9_]*$/.test(exp);
}


/**
 * ------------------ Production Rules (BNF Grammer )  -----------------------
 *
 * exp ::= number
 *       | string                                                            // literal string
 *       | number                                                            // literal number
 *       | [+ number, number]                                                // addition operation (+ binary operator)
 *       | [+ exp, exp]                                                      // recursive descent
 *       | [var name, exp]                                                   // variable declaration
 *       | [set name, exp]                                                   // variable re-assigning (assignment operator)
 *       | name                                                              // variable accessing
 *       | [begin exp]                                                       // block scope (function block, block scope)
 *       | [if <condition> <consequent> <alternate>]                         // if block
 *       | [while <condition> <block>                                        // while block
 */
