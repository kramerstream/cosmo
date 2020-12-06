"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when value is not instance of its type, wrapper must be returned", () => {
      {
        const w = expected("ciao mondo!");
        assert.strictEqual(w.notToBe(_core.num), w);
      }
    });
    test("when value is instance of its type, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected(123).notToBe(_core.num);
          }
        });
      }
    });
  }
});