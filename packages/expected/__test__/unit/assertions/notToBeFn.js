"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when not fn, wrapper must be returned", () => {
      {
        const w = expected("nop");
        assert.strictEqual(w.notToBeFn(), w);
      }
    });
    test("when fn, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected(_core.dogma.nop()).notToBeFn();
          }
        });
      }
    });
  }
});