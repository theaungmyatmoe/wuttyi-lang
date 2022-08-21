import assert from "assert";

export default function selfTest(wuttyi) {
    assert.strictEqual(wuttyi.eval(1), 1);
    assert.strictEqual(wuttyi.eval('"hello"'), 'hello');
}