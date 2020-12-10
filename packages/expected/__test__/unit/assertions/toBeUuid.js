"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const uuid = _core.dogma.use(require("uuid"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when valid UUID, wrapper must be returned", () => {
      {
        for (const value of [uuid.v1(), uuid.v4()]) {
          const w = expected(value);
          assert.strictEqual(w.toBeUuid(), w);
        }
      }
    });
    test("when invalid UUID, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected("123").toBeUuid();
          }
        });
      }
    });
  }
});