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
        assert.strictEqual(w.toBeGreaterThan(0), w);
      }
    });
    test("when not greater than, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected(1).toBeGreaterThan(1);
          }
        });
        assert.throws(() => {
          {
            expected(1).toBeGreaterThan(2);
          }
        });
      }
    });
  }
});