"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when not between, wrapper must be returned", () => {
      {
        const w = expected(1);
        assert.strictEqual(w.notToBeBetween(2, 3), w);
      }
    });
    test("when between, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected(1).notToBeBetween(0, 2);
          }
        });
      }
    });
  }
});