import assert from "assert";
import {test} from "./test-util.js";

export default function blockTest(wuttyi) {

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

    test(wuttyi, `
    (begin 
        (var x 10)
        (var y 20)
        (+ (* x 10) 30) 
    )
    
    `, 130);
}