"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@kramertest/expected"));

module.exports = exports = suite(__filename, () => {
  {
    test("when file doesn't include content, wrapper must be returned", () => {
      {
        const w = expected.file(__dirname, "toInclude.js");
        expected(w.notToInclude("zyx")).toBeSameAs(w);
        expected(w.notToInclude(["xyz", "zyx"])).toBeSameAs(w);
      }
    });
    test("when file includes content, assertion error must be raised", () => {
      {
        expected(() => {
          {
            expected.file(__filename).notToInclude("zyx");
          }
        }).toRaise();
      }
    });
  }
});