"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

const fs = _core.dogma.use(require("@dogmalang/fs.sync"));

module.exports = exports = suite(__filename, () => {
  {
    test("when equal to another, wrapper must be returned", () => {
      {
        const w = expected.file(__filename);
        const content = fs.read(__filename);
        expected(w.toBeEqualTo(content)).toBeSameAs(w);
      }
    });
    test("when not equal to another, assertion error must be raised", () => {
      {
        expected(() => {
          {
            expected.file(__filename).toBeEqualTo("");
          }
        }).toRaise();
      }
    });
  }
});