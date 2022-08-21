import assert from "assert";

/*
* (if <condition>
*       <consequent>
*       <alternate> )
* */
export default function ifTest(wuttyi) {
    assert.strictEqual(wuttyi.eval(
        [
            'begin',
            ['var', 'x', 10],
            ['var', 'y', 0],

            ['if',
                ['>', 'x', 'y'],
                ['set', 'x', 20],
                ['set', 'y', 30]
            ]
        ]
    ), 20)
}