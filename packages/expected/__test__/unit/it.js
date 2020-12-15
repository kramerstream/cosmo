"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when item found, item wrapper with original value must be returned", () => {
      {
        const value = [11, 22, 33];
        const w = expected(value).it(1);
        assert.strictEqual(w.originalValue, value);
        assert.equal(w.value, 22);
        assert.strictEqual(w.toBeEqualTo(22), w);
      }
    });
    test("when item not found, nil wrapper with original value must be returned", () => {
      {
        const value = [11, 22, 33];
        const w = expected(value).it(10);
        assert.strictEqual(w.originalValue, value);
        assert.equal(w.value, null);
        assert.strictEqual(w.toBeNil(), w);
      }
    });
  }
});