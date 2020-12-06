"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when not had, wrapper must be returned", () => {
      {
        const w = expected({
          ["x"]: 1,
          ["y"]: 2
        });
        assert.strictEqual(w.notToHave("z"), w);
        assert.strictEqual(w.notToHave(["a", "b"]), w);
        assert.strictEqual(w.notToHave({
          'x': 2
        }), w);
      }
    });
    test("when had, assertion error must be raised", () => {
      {
        const w = expected({
          ["x"]: 1,
          ["y"]: 2
        });
        assert.throws(() => {
          {
            w.notToHave("x");
          }
        });
        assert.throws(() => {
          {
            w.notToHave(["x", "y"]);
          }
        });
        assert.throws(() => {
          {
            w.notToHave({
              'x': 1
            });
          }
        });
      }
    });
  }
});