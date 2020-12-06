"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when less than, wrapper must be returned", () => {
      {
        const w = expected(1);
        assert.strictEqual(w.toBeLessThanOrEqualTo(2), w);
      }
    });
    test("when equal, wrapper must be returned", () => {
      {
        const w = expected(1);
        assert.strictEqual(w.toBeLessThanOrEqualTo(1), w);
      }
    });
    test("when greater than, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected(1).toBeLessThanOrEqualTo(0);
          }
        });
      }
    });
  }
});