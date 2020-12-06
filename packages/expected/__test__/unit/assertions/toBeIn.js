"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when in, wrapper must be returned", () => {
      {
        const w = expected("two");
        assert.strictEqual(w.toBeIn(["one", "two", "three"]), w);
      }
    });
    test("when not in, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected(0).toBeIn([1, 2, 3]);
          }
        });
      }
    });
  }
});