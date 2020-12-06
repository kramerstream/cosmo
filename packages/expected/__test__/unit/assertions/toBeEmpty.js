"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when empty list, wrapper must be returned", () => {
      {
        const w = expected([]);
        assert.strictEqual(w.toBeEmpty(), w);
      }
    });
    test("when empty text, wrapper must be returned", () => {
      {
        const w = expected("");
        assert.strictEqual(w.toBeEmpty(), w);
      }
    });
    test("when empty map, wrapper must be returned", () => {
      {
        const w = expected({});
        assert.strictEqual(w.toBeEmpty(), w);
      }
    });
    test("when not empty, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected("[]").toBeEmpty();
          }
        });
        assert.throws(() => {
          {
            expected([1]).toBeEmpty();
          }
        });
        assert.throws(() => {
          {
            expected({
              ["x"]: 1
            }).toBeEmpty();
          }
        });
      }
    });
  }
});