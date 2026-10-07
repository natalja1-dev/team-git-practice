const { doubleNumber } = require('./lilian.cjs');
const assert = require('node:assert');

assert.strictEqual(doubleNumber(2), 4);
assert.strictEqual(doubleNumber(5), 10);
assert.strictEqual(doubleNumber(0), 0);

console.log('All tests passed!');