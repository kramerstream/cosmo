"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when text, wrapper must be returned", () => {
      {
        const w = expected("ciao mondo1");
        assert.strictEqual(w.toBeText(), w);
      }
    });
    test("when not text, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected(123).toBeText();
          }
        });
      }
    });
  }
});