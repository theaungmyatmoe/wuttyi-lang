import assert from 'assert';
import Environment from "./Environment.js";


/* It evaluates a JavaScript expression and returns the result */
class Wuttyi {
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

// -------------------- Tests ----------------
// set the predefined variable
const wuttyi = new Wuttyi(new Environment({
    true: true, false: false, null: null, version: '1.0.0',
}));

/**
 * ------------------ Production Rules (Language Grammars) -----------------------
 *
 * exp ::= number
 *       | string               // literal string
 *       | number               // literal number
 *       | [+ number, number]   // addition operation (+ binary operator)
 *       | [+ exp, exp]         // recursive exp (recursive descent algorithm will be implemented in here)
 *       | [var name, exp]      // variable declaration
 *       | [set name, exp]      // variable re-assigning (assignment operator)
 *       | name                 // variable accessing
 *       | [begin exp]          // block scope (function block, block scope)
 */

// ----------- Math Tests ----------------------
// exp ::= number | string | [+ number, number]

assert.strictEqual(wuttyi.eval(1), 1);
assert.strictEqual(wuttyi.eval('"hello"'), 'hello');
assert.strictEqual(wuttyi.eval(['+', 1, 2]), 3);
assert.strictEqual(wuttyi.eval(['+', ['+', 6, 2], 2]), 10);
assert.strictEqual(wuttyi.eval(['+', ['*', 6, 2], 2]), 14);
assert.strictEqual(wuttyi.eval(['*', ['+', 2, 3], 5]), 25);

// ------------- Variable -----------------------
// | [var name, exp] | name

assert.strictEqual(wuttyi.eval(['var', 'x', 10]), 10);
assert.strictEqual(wuttyi.eval('x'), 10);

// var isUser = true;
// [var name, exp]
assert.strictEqual(wuttyi.eval(['var', 'isUser', 'true']), true);
// | name
assert.strictEqual(wuttyi.eval('isUser'), true);

assert.strictEqual(wuttyi.eval(['var', 'y', 100]), 100);
assert.strictEqual(wuttyi.eval('y'), 100);

assert.deepEqual(wuttyi.eval(['var', 'name', '"Mg Mg"']), 'Mg Mg');
assert.strictEqual(wuttyi.eval('name'), 'Mg Mg')

// exp ::= [begin exps]
assert.strictEqual(wuttyi.eval(
    ['begin',
        ['var', 'x', 10],
        ['var', 'y', 20],
        ['*', ['+', 'x', 'y'], 30]
    ]
), 900)

assert.deepEqual(wuttyi.eval(
    [
        // parent
        'begin',
        ['var', 'x', 10],
        [
            // child
            'begin',
            ['var', 'x', 20],
            'x'
        ],
        'x'
    ]
), 10)


/*
* ```lisp
* (begin
*   var value = 10;
*   var result = (begin
*                   var x = value + 10;
*                       x
*                 )
* result
* ```
* */
assert.strictEqual(wuttyi.eval(
    [
        'begin',
        ['var', 'value', 10],
        ['var', 'result', [
            'begin',
            ['var', 'x', ['+', 'value', 10]],
            'x'
        ]],
        'result'
    ]
), 20)

assert.strictEqual(wuttyi.eval(
    [
        'begin',
        ['var', 'data', 10],
        [
            'begin',
            ['set', 'data', 1000],
        ],
        'data'
    ]
), 1000)