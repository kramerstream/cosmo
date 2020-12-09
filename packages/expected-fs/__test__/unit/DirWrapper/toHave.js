"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

module.exports = exports = suite(__filename, () => {
  {
    test("when dir has an entry, wrapper must be returned", () => {
      {
        const w = expected.dir(__dirname);
        expected(w.toHave("toHave.js")).toBeSameAs(w);
        expected(w.toHave(["toHave.js", "notToHave.js"])).toBeSameAs(w);
      }
    });
    test("when dir doesn't have an entry, assertion error must be raised", () => {
      {
        expected(() => {
          {
            expected.dir(__dirname).toHave("unknown");
          }
        }).toRaise();
      }
    });
  }
});