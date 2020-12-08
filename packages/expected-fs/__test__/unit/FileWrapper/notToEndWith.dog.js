"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@kramertest/cosmo-expected"));

module.exports = exports = suite(__filename, () => {
  {
    test("when file doesn't end with given suffix, wrapper must be returned", () => {
      {
        const w = expected.file(__filename);
        expected(w.notToEndWith("xyz")).toBeSameAs(w);
      }
    });
    test("when file ends with given suffix, assertion error must be raised", () => {
      {
        expected(() => {
          {
            expected.file(__dirname, "../../../package.json").notToEndWith("}\n");
          }
        }).toRaise();
      }
    });
  }
});