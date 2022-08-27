import assert from "assert";
import wuttyiParser from '../src/parser/wuttyiParser.cjs';

function test(wuttyi, code, excepted) {
    const exp = wuttyiParser.parse(`(begin ${code})`);
    assert.strictEqual(wuttyi.evalGlobal(exp), excepted);
}

export {test}