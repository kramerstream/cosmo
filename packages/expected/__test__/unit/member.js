"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when non-nested member, value wrapper with original value must be returned", () => {
      {
        const value = {
          ["x"]: 11,
          ["y"]: 22
        };
        const w = expected(value).member("x");
        assert.strictEqual(w.originalValue, value);
        assert.equal(w.value, 11);
        assert.strictEqual(w.toBeEqualTo(11), w);
      }
    });
    suite("when nested member", () => {
      {
        test("when nested member, value wrapper with original value must be returned", () => {
          {
            const value = {
              ["a"]: {
                ["x"]: 11,
                ["y"]: 22
              }
            };
            const w = expected(value).member("a", "x");
            assert.strictEqual(w.originalValue, value);
            assert.equal(w.value, 11);
            assert.strictEqual(w.toBeEqualTo(11), w);
          }
        });
        test("when nested member and member() twice, value wrapper with original value must be returned", () => {
          {
            const value = {
              ["a"]: {
                ["x"]: 11,
                ["y"]: 22
              },
              ["b"]: 12
            };
            const w = expected(value).member("a", "x").member("b");
            assert.strictEqual(w.originalValue, value);
            assert.equal(w.value, 12);
            assert.strictEqual(w.toBeEqualTo(12), w);
          }
        });
      }
    });
  }
});