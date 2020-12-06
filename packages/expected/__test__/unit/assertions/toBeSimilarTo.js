"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when similar, wrapper must be returned", () => {
      {
        const w = expected([1, 3, 2]);
        assert.strictEqual(w.toBeSimilarTo([2, 1, 3]), w);
      }
    });
    test("when similar due to both of them are empty, wrapper must be returned", () => {
      {
        const w = expected([]);
        assert.strictEqual(w.toBeSimilarTo([]), w);
      }
    });
    test("when not similar, assertion error must be raised", () => {
      {
        const w = expected([1, 3, 2]);
        assert.throws(() => {
          {
            w.toBeSimilarTo([1, 3, 2, 1]);
          }
        });
        assert.throws(() => {
          {
            w.toBeSimilarTo([1, 3, 3]);
          }
        });
      }
    });
  }
});