"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@kramertest/cosmo-expected"));

module.exports = exports = suite(__filename, () => {
  {
    test("when dir doesn't have entry, wrapper must be returned", () => {
      {
        const w = expected.dir(__dirname);
        expected(w.notToHave("unknown")).toBeSameAs(w);
        expected(w.notToHave(["unknown1", "unknown2"])).toBeSameAs(w);
      }
    });
    test("when dir has entry, assertion error must be raised", () => {
      {
        expected(() => {
          {
            expected.dir(__dirname).notToHave("notToHave.js");
          }
        }).toRaise();
      }
    });
  }
});