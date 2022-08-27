import Environment from "./Environment.js";
import GlobalEnvironment from "./GlobalEnvironment.js";
import Jit from "./jit/Jit.js";

/* > The `eval` function evaluates an expression in a given environment

The `eval` function is the heart of the interpreter. It takes an expression and an environment and returns the result of
evaluating the expression in the given environment */
class Wuttyi {
    global = GlobalEnvironment; // global scope
    #jit = new Jit(); // runtime transformer


    /**
     * > The `eval` function evaluates an expression in a given environment
     * @param exp - The expression to evaluate.
     * @param [env] - The environment in which the expression is evaluated.
     * @returns The result of the last expression in the block.
     */
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
            const [_, ref, value] = exp;

            if (ref[0] === 'prop') {
                const [_tag, instance, propName] = ref;
                const instanceEnv = this.eval(instance, env);

                return instanceEnv.define(propName, this.eval(value, env))
            }
            return env.assign(ref, this.eval(value, env));
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
        // Syntactic sugar - (var square (lambda (x) (* x x) ))
        if (exp[0] === 'def' || exp[0] === 'func') {

            const varExp = this.#jit.transformDefToLambda(exp);

            return this.eval(varExp, env);
        }

        // ----------------- Switch (or) Match --------------------
        if (exp[0] === 'switch' || exp[0] === 'match') {
            var ifExp = this.#jit.transformSwitchToIf(exp);

            return this.eval(ifExp, env);
        }

        // ----------------- For Loop --------------------
        if (exp[0] === 'for') {
            var forExp = this.#jit.transformForToWhile(exp);

            return this.eval(forExp, env);
        }

        // ----------------- Increment Operator --------------------
        if (exp[0] === '++') {
            var setExp = this.#jit.transformIncToSet(exp);

            return this.eval(setExp, env);
        }

        // ----------------- Decrement Operator --------------------

        // (++ foo)
        //   (set foo (+ foo 1))
        if (exp[0] === '--') {
            var setExp = this.#jit.transformDecToSet(exp);

            return this.eval(setExp, env);
        }

        // ----------------- Increment Value Operator --------------------
        // (+= foo)
        //   (set foo (+ foo inc_value))

        if (exp[0] === '+=') {
            var setExp = this.#jit.transformIncValToSet(exp);

            return this.eval(setExp, env);
        }


        // ----------------- Decrement Value Operator --------------------
        // (-= foo)
        //   (set foo (- foo inc_value))

        if (exp[0] === '-=') {
            var setExp = this.#jit.transformDecValToSet(exp);

            return this.eval(setExp, env);
        }

        // ----------------- Lambda expression - λ --------------------
        // (lambda (x) (* x x))
        if (exp[0] === 'lambda') {
            const [_tag, params, body] = exp;

            return {
                params, body, env, // closure
            }
        }

        // -------------------------- Class -------------------------
        // class declaration
        // (class <Name> <Parent> <body>)

        if (exp[0] === 'class') {
            const [_tag, name, parent, body] = exp;

            // class scope
            const parentEnv = this.eval(parent) || env; // parent scope on super() call

            const classEnv = new Environment({}, parentEnv);

            // eval class body in its env
            this._evalBody(body, classEnv);

            // class is accessible by name
            return env.define(name, classEnv);
        }


        // ------------------ class initialization -----------------
        // (new <Class> <Arguments>)
        if (exp[0] === 'new') {
            const classEnv = this.eval(exp[1], env);

            const instanceEnv = new Environment({}, classEnv);

            const args = exp.slice(2).map(arg => this.eval(arg, env))
            this._callUserDefinedFunction(classEnv.lookup('constructor'), [instanceEnv, ...args],)
            return instanceEnv;
        }

        // -------------- Prop access --------------
        // (prop <instance> <name>)
        if (exp[0] === 'prop') {
            const [_tag, instance, name] = exp;

            const instanceEnv = this.eval(instance, env);

            return instanceEnv.lookup(name);
        }

        // ------------------------ function calls --------------------
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
            return this._callUserDefinedFunction(fn, args);
        }


        throw `Unimplemented ${JSON.stringify(exp)}`;
    }

    _callUserDefinedFunction(fn, args) {
        const activationRecord = {};

        fn.params.forEach((param, index) => {
            activationRecord[param] = args[index];
        })

        const activationEnv = new Environment(activationRecord, fn.env,)

        return this._evalBody(fn.body, activationEnv);
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