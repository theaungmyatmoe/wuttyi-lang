import assert from "assert";
import wuttyiParser from '../parser/wuttyiParser.cjs';

function test(wuttyi, code, excepted) {
    const exp = wuttyiParser.parse(code);
    assert.strictEqual(wuttyi.eval(exp), excepted);
}

export {test}