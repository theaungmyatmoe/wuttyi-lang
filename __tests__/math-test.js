import assert from "assert";

export default function mathTest(wuttyi) {

    // ----------- Math Tests ----------------------
    // exp ::= number | string | [+ number, number]
    
    assert.strictEqual(wuttyi.eval(['+', 1, 2]), 3);
    assert.strictEqual(wuttyi.eval(['+', ['+', 6, 2], 2]), 10);
    assert.strictEqual(wuttyi.eval(['+', ['*', 6, 2], 2]), 14);
    assert.strictEqual(wuttyi.eval(['*', ['+', 2, 3], 5]), 25);

}