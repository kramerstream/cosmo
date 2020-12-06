"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when not set, wrapper must be returned", () => {
      {
        const w = expected("set()");
        assert.strictEqual(w.notToBeSet(), w);
      }
    });
    test("when set, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected((0, _core.set)()).notToBeSet();
          }
        });
      }
    });
  }
});