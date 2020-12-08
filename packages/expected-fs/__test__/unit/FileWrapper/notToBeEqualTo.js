"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@kramertest/cosmo-expected"));

const fs = _core.dogma.use(require("@dogmalang/fs.sync"));

module.exports = exports = suite(__filename, () => {
  {
    test("when not equal to another, wrapper must be returned", () => {
      {
        const w = expected.file(__filename);
        expected(w.notToBeEqualTo("content")).toBeSameAs(w);
      }
    });
    test("when equal to another, assertion error must be raised", () => {
      {
        expected(() => {
          {
            expected.file(__filename).notToBeEqualTo(fs.read(__filename));
          }
        }).toRaise();
      }
    });
  }
});