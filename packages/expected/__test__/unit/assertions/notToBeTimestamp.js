"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when not date, wrapper must be returned", () => {
      {
        const w = expected("timestamp()");
        assert.strictEqual(w.notToBeTimestamp(), w);
      }
    });
    test("when date, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected((0, _core.timestamp)()).notToBeTimestamp();
          }
        });
      }
    });
  }
});