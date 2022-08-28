import Environment from "./Environment.js";

const GlobalEnvironment = new Environment({
    true: true,
    false: false,
    null: null,
    __VERSION__: '1.0.0',

    // math
    '+'(op1, op2) {
        return op1 + op2;
    },
    '-'(op1, op2 = null) {
        if (op2 === null) return -op1;
        return op1 - op2;
    },
    '*'(op1, op2) {
        return op1 * op2;
    },
    '/'(op1, op2) {
        return op1 / op2;
    },
    '%'(op1, op2) {
        return op1 % op2;
    },
    '>'(op1, op2) {
        return op1 > op2;
    },
    '<'(op1, op2) {
        return op1 < op2;
    },
    '>='(op1, op2) {
        return op1 >= op2;
    },
    '<='(op1, op2) {
        return op1 <= op2;
    },
    '='(op1, op2) {
        return op1 === op2;
    },
    'neq'(op1, op2) {
        return op1 !== op2;
    },
    'or'(op1, op2) {
        return op1 || op2;
    },
    'and'(op1, op2) {
        return op1 && op2;
    },
    'not'(op1) {
        return !op1;
    },
    print(...args) {
        console.log(...args)
    }
})

export default GlobalEnvironment;