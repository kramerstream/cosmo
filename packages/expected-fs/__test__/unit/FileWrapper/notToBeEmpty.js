"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

module.exports = exports = suite(__filename, () => {
  {
    test("when file isnt empty, wrapper must be returned", () => {
      {
        const w = expected.file(__filename);
        expected(w.notToBeEmpty()).toBeSameAs(w);
      }
    });
    test("when file is empty, assertion error must be raised", () => {
      {
        expected(() => {
          {
            expected.file(__dirname, "../../data/empty.txt").notToBeEmpty();
          }
        }).toRaise();
      }
    });
  }
});