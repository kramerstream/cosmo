"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@kramertest/cosmo-expected"));

module.exports = exports = suite(__filename, () => {
  {
    test("when file is empty, wrapper must be returned", () => {
      {
        const w = expected.file(__dirname, "../../data/empty.txt");
        expected(w.toBeEmpty()).toBeSameAs(w);
      }
    });
    test("when file isn't empty, assertion error must be raised", () => {
      {
        expected(() => {
          {
            expected.file(__filename).toBeEmpty();
          }
        }).toRaise();
      }
    });
  }
});