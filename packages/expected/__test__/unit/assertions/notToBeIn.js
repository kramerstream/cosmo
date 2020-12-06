"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when not in, wrapper must be returned", () => {
      {
        const w = expected("two");
        assert.strictEqual(w.notToBeIn(["one", "three"]), w);
      }
    });
    test("when in, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected(2).notToBeIn([1, 2, 3]);
          }
        });
      }
    });
  }
});