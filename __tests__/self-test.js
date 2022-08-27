import assert from "assert";

export default async function selfTest(wuttyi) {
    assert.strictEqual(await wuttyi.eval(1), 1);
    assert.strictEqual(await wuttyi.eval('"hello"'), 'hello');
}