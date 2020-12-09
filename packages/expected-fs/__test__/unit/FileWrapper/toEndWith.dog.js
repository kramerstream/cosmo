"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

module.exports = exports = suite(__filename, () => {
  {
    test("when file ends with given suffix, wrapper must be returned", () => {
      {
        const w = expected.file(__dirname, "../../../package.json");
        expected(w.toEndWith("}\n")).toBeSameAs(w);
      }
    });
    test("when file doesn't end with given suffix, assertion error must be raised", () => {
      {
        expected(() => {
          {
            expected.file(__filename).toEndWith("xyz");
          }
        }).toRaise();
      }
    });
  }
});