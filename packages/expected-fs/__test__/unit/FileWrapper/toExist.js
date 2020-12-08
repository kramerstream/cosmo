"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@kramertest/cosmo-expected"));

module.exports = exports = suite(__filename, () => {
  {
    test("when file exists, wrapper must be returned", () => {
      {
        const w = expected.file(__filename);
        expected(w.toExist()).toBeSameAs(w);
      }
    });
    test("when file doesn't exist, assertion error must be raised", () => {
      {
        expected(() => {
          {
            expected.file("unknown").toExist();
          }
        }).toRaise();
      }
    });
  }
});