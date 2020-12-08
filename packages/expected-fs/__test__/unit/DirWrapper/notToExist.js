"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@kramertest/cosmo-expected"));

module.exports = exports = suite(__filename, () => {
  {
    test("when dir doesn't exist, wrapper must be returned", () => {
      {
        const w = expected.dir("unknown");
        expected(w.notToExist()).toBeSameAs(w);
      }
    });
    test("when dir exists, assertion error must be raised", () => {
      {
        expected(() => {
          {
            expected.dir(__dirname).notToExist();
          }
        }).toRaise();
      }
    });
  }
});