import assert from "assert";

/*
* (while <condition>
*         <sequent> )
* */
export default function whileTest(wuttyi) {
    assert.strictEqual(wuttyi.eval(
            [
                'begin',
                ['var', 'counter', 0],
                ['var', 'result', 0],

                ['while', ['<', 'counter', 10],
                    ['begin',
                        ['set', 'counter', ['+', 'counter', 1]],
                        ['set', 'result', ['+', 'result', 1]]
                    ]
                ],
                'result'
            ]
        ), 10
    )
}