"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when not callable, wrapper must be returned", () => {
      {
        const w = expected("");
        assert.strictEqual(w.notToBeCallable(), w);
      }
    });
    test("when callable, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected(_core.dogma.nop()).notToBeCallable();
          }
        });
      }
    });
  }
});