"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when not empty list, wrapper must be returned", () => {
      {
        const w = expected([1]);
        assert.strictEqual(w.notToBeEmpty(), w);
      }
    });
    test("when not empty text, wrapper must be returned", () => {
      {
        const w = expected("x");
        assert.strictEqual(w.notToBeEmpty(), w);
      }
    });
    test("when not empty map, wrapper must be returned", () => {
      {
        const w = expected({
          ["x"]: 1
        });
        assert.strictEqual(w.notToBeEmpty(), w);
      }
    });
    test("when empty, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected("").notToBeEmpty();
          }
        });
        assert.throws(() => {
          {
            expected([]).notToBeEmpty();
          }
        });
        assert.throws(() => {
          {
            expected({}).notToBeEmpty();
          }
        });
      }
    });
  }
});