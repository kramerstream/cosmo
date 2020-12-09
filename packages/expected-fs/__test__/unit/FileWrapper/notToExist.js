"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

module.exports = exports = suite(__filename, () => {
  {
    test("when file doesn't exist, wrapper must be returned", () => {
      {
        const w = expected.file("unknown");
        expected(w.notToExist()).toBeSameAs(w);
      }
    });
    test("when file exists, assertion error must be raised", () => {
      {
        expected(() => {
          {
            expected.file(__filename).notToExist();
          }
        }).toRaise();
      }
    });
  }
});