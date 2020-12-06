"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when date, wrapper must be returned", () => {
      {
        const w = expected((0, _core.timestamp)());
        assert.strictEqual(w.toBeTimestamp(), w);
      }
    });
    test("when not date, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected(123).toBeTimestamp();
          }
        });
      }
    });
  }
});