"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when had, wrapper must be returned", () => {
      {
        const w = expected({
          ["x"]: 1,
          ["y"]: 2
        });
        assert.strictEqual(w.toHave("x"), w);
        assert.strictEqual(w.toHave(["x", "y"]), w);
        assert.strictEqual(w.toHave({
          'x': 1
        }), w);
      }
    });
    test("when not had, assertion error must be raised", () => {
      {
        const w = expected({
          ["x"]: 1,
          ["y"]: 2
        });
        assert.throws(() => {
          {
            w.toHave("z");
          }
        });
        assert.throws(() => {
          {
            w.toHave(["x", "b"]);
          }
        });
        assert.throws(() => {
          {
            w.toHave({
              'x': 2
            });
          }
        });
      }
    });
  }
});