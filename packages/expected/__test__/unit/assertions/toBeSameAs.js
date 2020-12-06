"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when the same, wrapper must be returned", () => {
      {
        const obj = {};
        const w = expected(obj);
        assert.strictEqual(w.toBeSameAs(obj), w);
      }
    });
    test("when not the same, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected({}).toBeSameAs({});
          }
        });
      }
    });
  }
});