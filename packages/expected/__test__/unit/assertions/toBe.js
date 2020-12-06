"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when value is instance of a given type, wrapper must be returned", () => {
      {
        const w = expected("ciao mondo!");
        assert.strictEqual(w.toBe(_core.text), w);
      }
    });
    test("when value is not instance of the given type, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected(123).toBe(_core.text);
          }
        });
        assert.throws(() => {
          {
            expected(null).toBe(_core.text);
          }
        });
      }
    });
  }
});