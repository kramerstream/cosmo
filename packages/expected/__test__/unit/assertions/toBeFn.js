"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when fn, wrapper must be returned", () => {
      {
        const w = expected(_core.dogma.nop());
        assert.strictEqual(w.toBeFn(), w);
      }
    });
    test("when not fn, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected("() => {}").toBeFn();
          }
        });
      }
    });
  }
});