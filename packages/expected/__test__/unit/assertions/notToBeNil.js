"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when value is not nil, wrapper must be returned", () => {
      {
        const w = expected(0);
        assert.strictEqual(w.notToBeNil(), w);
      }
    });
    test("when value is nil, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected(null).notToBeNil();
          }
        });
      }
    });
  }
});