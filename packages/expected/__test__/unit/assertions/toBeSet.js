"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when set, wrapper must be returned", () => {
      {
        const w = expected((0, _core.set)());
        assert.strictEqual(w.toBeSet(), w);
      }
    });
    test("when not set, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected("[]").toBeSet();
          }
        });
      }
    });
  }
});