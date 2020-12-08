"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@kramertest/cosmo-expected"));

module.exports = exports = suite(__filename, () => {
  {
    test("when file doesn't start with given prefix, wrapper must be returned", () => {
      {
        const w = expected.file(__filename);
        expected(w.notToStartWith("xyz")).toBeSameAs(w);
      }
    });
    test("when file starts with given prefix, assertion error must be raised", () => {
      {
        expected(() => {
          {
            expected.file(__dirname, "../../../package.json").notToStartWith("{");
          }
        }).toRaise();
      }
    });
  }
});