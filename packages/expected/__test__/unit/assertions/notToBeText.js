"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when text, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected("ciao mondo!").notToBeText();
          }
        });
      }
    });
    test("when not text, wrapper must be returned", () => {
      {
        const w = expected(123);
        assert.strictEqual(w.notToBeText(), w);
      }
    });
  }
});