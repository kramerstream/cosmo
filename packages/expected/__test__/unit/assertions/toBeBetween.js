"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when between, wrapper must be returned", () => {
      {
        const w = expected(1);
        assert.strictEqual(w.toBeBetween(0, 2), w);
      }
    });
    test("when not between, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected(1).toBeBetween(2, 3);
          }
        });
      }
    });
  }
});