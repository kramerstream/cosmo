"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when member found, value wrapper with original value must be returned", () => {
      {
        const value = {
          ["x"]: 11,
          ["y"]: 22,
          ["z"]: 33
        };
        const w = expected(value).member("y");
        assert.strictEqual(w.originalValue, value);
        assert.equal(w.value, 22);
        assert.strictEqual(w.toBeEqualTo(22), w);
      }
    });
    test("when member not found, nil wrapper with original value must be returned", () => {
      {
        const value = {};
        const w = expected(value).member("a");
        assert.strictEqual(w.originalValue, value);
        assert.equal(w.value, null);
        assert.strictEqual(w.toBeNil(), w);
      }
    });
  }
});