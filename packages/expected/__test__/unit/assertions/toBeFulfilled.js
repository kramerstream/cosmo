"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when fulfilled, wrapper must be returned", async () => {
      {
        const w = (0, await expected(_core.promise.resolve()));
        assert.strictEqual(w.toBeFulfilled(), w);
      }
    });
    test("when not fulfilled, assertion error must be raised", async () => {
      {
        const w = (0, await expected(_core.promise.reject()));
        assert.throws(() => {
          {
            expected(w).toBeFulfilled();
          }
        });
      }
    });
  }
});