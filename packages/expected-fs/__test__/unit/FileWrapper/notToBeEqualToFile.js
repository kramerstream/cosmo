"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@kramertest/cosmo-expected"));

const path = _core.dogma.use(require("@dogmalang/path"));

module.exports = exports = suite(__filename, () => {
  {
    test("when file isn't equal to another, wrapper must be returned", () => {
      {
        const w = expected.file(__filename);
        expected(w.notToBeEqualToFile(path.join(__dirname, "notToBeEqualTo.js"))).toBeSameAs(w);
      }
    });
    test("when file is equal to another, assertion error must be raised", () => {
      {
        expected(() => {
          {
            expected.file(__filename).notToBeEqualToFile(__filename);
          }
        }).toRaise();
      }
    });
  }
});