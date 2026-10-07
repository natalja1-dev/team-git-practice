const test = require("node:test");
const assert = require("node:assert/strict");
const { isValidMinutes } = require("./natalja.cjs");

test("accepts a normal number of minutes", () => {
  assert.equal(isValidMinutes(60), true);
});

test("rejects an invalid number of minutes", () => {
  assert.equal(isValidMinutes(0), false);
});

test("accepts the upper boundary of 180 minutes", () => {
  assert.equal(isValidMinutes(180), true);
});
