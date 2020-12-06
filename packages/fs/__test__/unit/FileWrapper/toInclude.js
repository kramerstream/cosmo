"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@kramertest/expected"));

module.exports = exports = suite(__filename, () => {
  {
    test("when file includes content, wrapper must be returned", () => {
      {
        const w = expected.file(__filename);
        expected(w.toInclude("toInclude")).toBeSameAs(w);
        expected(w.toInclude(["test", "toInclude"])).toBeSameAs(w);
      }
    });
    test("when file doesn't include, assertion error must be raised", () => {
      {
        expected(() => {
          {
            expected.file(__dirname, "toExist.js").toInclude("xyz");
          }
        }).toRaise();
      }
    });
  }
});