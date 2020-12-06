"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when length equal to passed size, wrapper must be returned", () => {
      {
        const w = expected({
          ["x"]: 1,
          ["y"]: 2
        });
        assert.strictEqual(w.toHaveLength(2), w);
      }
    });
    test("when not length, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected({
              ["x"]: 1,
              ["y"]: 2
            }).toHaveLength(1);
          }
        });
      }
    });
  }
});