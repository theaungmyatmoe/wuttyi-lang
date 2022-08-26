import Environment from "./Environment.js";
import GlobalEnvironment from "./GlobalEnvironment.js";

class Wuttyi {

    constructor(global = GlobalEnvironment) {
        this.global = global;
    }

    // -------------------- Self evaluation -------------
    // Evaluate an expression in the given environment
    eval(exp, env = this.global) {
        if (this._isNumber(exp)) {

            return exp;
        }

        if (this._isString(exp)) {
            return exp.slice(1, -1)
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
        if (this._isVariableName(exp)) {
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

        // --------------------- Function declaration ---------------------
        // (def square (x) (* x x))
        if (exp[0] === 'def') {
            const [_tag, name, params, body] = exp;

            const fn = {
                params,
                body,
                env, // closure
            }
            return env.define(name, fn);
        }

        // function calls
        if (Array.isArray(exp)) {

            const fn = this.eval(exp[0], env);

            const args = exp
                .slice(1)
                .map(arg => this.eval(arg, env));

            // Native function:
            if (typeof fn === 'function') {
                return fn(...args);
            }

            //  User-defined function

            const activationRecord = {};

            fn.params.forEach((param, index) => {
                activationRecord[param] = args[index];
            })

            const activationEnv = new Environment(
                activationRecord,
                fn.env,
            )

            return this._evalBody(fn.body, activationEnv);

        }


        throw `Unimplemented ${JSON.stringify(exp)}`;
    }

    _evalBody(body, env) {
        if (body[0] === 'begin') {
            return this._evalBlock(body, env);
        }
        return this.eval(body, env);
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


    _isNumber(exp) {
        return typeof exp === 'number';
    }

    _isString(exp) {
        return typeof exp === 'string' && exp.startsWith('"') && exp.endsWith('"');
    }

    _isVariableName(exp) {
        return typeof exp === 'string' && /^[+\-*/<>=a-zA-Z0-9_]+$/.test(exp);
    }
}


export default Wuttyi;