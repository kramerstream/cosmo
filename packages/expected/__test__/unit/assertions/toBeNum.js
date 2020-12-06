"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when num, wrapper must be returned", () => {
      {
        const w = expected(0);
        assert.strictEqual(w.toBeNum(), w);
      }
    });
    test("when not num, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected("0").toBeNum();
          }
        });
      }
    });
  }
});