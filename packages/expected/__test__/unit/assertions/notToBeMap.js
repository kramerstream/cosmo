"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when not map, wrapper must be returned", () => {
      {
        const w = expected("{}");
        assert.strictEqual(w.notToBeMap(), w);
      }
    });
    test("when map, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected({}).notToBeMap();
          }
        });
      }
    });
  }
});