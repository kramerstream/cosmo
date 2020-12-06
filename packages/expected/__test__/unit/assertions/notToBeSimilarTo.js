"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when not similar, wrapper must be returned", () => {
      {
        const w = expected([1, 3, 2]);
        assert.strictEqual(w.notToBeSimilarTo([2, 1, 3, 2]), w);
      }
    });
    test("when similar, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected([1, 2]).notToBeSimilarTo([2, 1]);
          }
        });
      }
    });
  }
});