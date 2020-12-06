"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@kramertest/expected"));

module.exports = exports = suite(__filename, () => {
  {
    test("when file starts with given prefix, wrapper must be returned", () => {
      {
        const w = expected.file(__dirname, "../../../package.json");
        expected(w.toStartWith("{")).toBeSameAs(w);
      }
    });
    test("when file doesn't start with given prefix, assertion error must be raised", () => {
      {
        expected(() => {
          {
            expected.file(__filename).toStartWith("xyz");
          }
        }).toRaise();
      }
    });
  }
});