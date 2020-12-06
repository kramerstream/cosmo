"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when greater than, wrapper must be returned", () => {
      {
        const w = expected(1);
        assert.strictEqual(w.toBeGreaterThanOrEqualTo(0), w);
      }
    });
    test("when equal, wrapper must be returned", () => {
      {
        const w = expected(1);
        assert.strictEqual(w.toBeGreaterThanOrEqualTo(1), w);
      }
    });
    test("when less than, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected(1).toBeGreaterThanOrEqualTo(2);
          }
        });
      }
    });
  }
});