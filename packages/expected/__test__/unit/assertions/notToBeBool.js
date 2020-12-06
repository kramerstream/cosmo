"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when not bool, wrapper must be returned", () => {
      {
        const w = expected("true");
        assert.strictEqual(w.notToBeBool(), w);
      }
    });
    test("when bool, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected(true).notToBeBool();
          }
        });
      }
    });
  }
});