"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when not included, wrapper must be returned", () => {
      {
        const w = expected(["one", "two", "three"]);
        assert.strictEqual(w.notToInclude(1), w);
      }
    });
    test("when included, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected([0, 1, 2]).notToInclude(1);
          }
        });
      }
    });
  }
});