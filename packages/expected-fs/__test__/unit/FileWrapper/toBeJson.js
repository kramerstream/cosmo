"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

module.exports = exports = suite(__filename, () => {
  {
    test("when file is JSON, wrapper must be returned", () => {
      {
        const w = expected.file(__dirname, "../../../package.json");
        expected(w.toBeJson()).toBeSameAs(w);
      }
    });
    test("when file isn't JSON, assertion error must be raised", () => {
      {
        expected(() => {
          {
            expected.file(__filename).toBeJson();
          }
        }).toRaise();
      }
    });
  }
});