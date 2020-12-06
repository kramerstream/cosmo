"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when not the same, wrapper must be returned", () => {
      {
        const w = expected({});
        assert.strictEqual(w.notToBeSameAs({}), w);
      }
    });
    test("when the same, assertion error must be raised", () => {
      {
        const obj = {};
        assert.throws(() => {
          {
            expected(obj).notToBeSameAs(obj);
          }
        });
      }
    });
  }
});