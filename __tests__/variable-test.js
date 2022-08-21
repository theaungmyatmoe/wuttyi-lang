import assert from "assert";

export default function variableTest(wuttyi) {

// ------------- Variable -----------------------
// | [var name, exp] | name

    assert.strictEqual(wuttyi.eval(['var', 'x', 10]), 10);
    assert.strictEqual(wuttyi.eval('x'), 10);


// var isUser = true;
// [var name, exp]
    assert.strictEqual(wuttyi.eval(['var', 'isUser', 'true']), true);
// | name
    assert.strictEqual(wuttyi.eval('isUser'), true);

    assert.strictEqual(wuttyi.eval(['var', 'y', 100]), 100);
    assert.strictEqual(wuttyi.eval('y'), 100);

    assert.deepEqual(wuttyi.eval(['var', 'name', '"Mg Mg"']), 'Mg Mg');
    assert.strictEqual(wuttyi.eval('name'), 'Mg Mg')
}