"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when not num, wrapper must be returned", () => {
      {
        const w = expected("0");
        assert.strictEqual(w.notToBeNum(), w);
      }
    });
    test("when num, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected(0).notToBeNum();
          }
        });
      }
    });
  }
});