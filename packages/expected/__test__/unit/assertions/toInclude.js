"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when included, wrapper must be returned", () => {
      {
        const w = expected(["one", "two", "three"]);
        assert.strictEqual(w.toInclude("two"), w);
      }
    });
    test("when not included, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected([0, 1, 2]).toInclude(3);
          }
        });
      }
    });
  }
});