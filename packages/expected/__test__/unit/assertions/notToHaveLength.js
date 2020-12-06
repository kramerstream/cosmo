"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when not length, wrapper must be returned", () => {
      {
        const w = expected({
          ["x"]: 1,
          ["y"]: 2
        });
        assert.strictEqual(w.notToHaveLength(1), w);
      }
    });
    test("when length, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected({
              ["x"]: 1,
              ["y"]: 2
            }).notToHaveLength(2);
          }
        });
      }
    });
  }
});