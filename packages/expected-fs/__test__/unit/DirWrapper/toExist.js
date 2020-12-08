"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@kramertest/cosmo-expected"));

module.exports = exports = suite(__filename, () => {
  {
    test("when dir exists, wrapper must be returned", () => {
      {
        const w = expected.dir(__dirname);
        expected(w.toExist()).toBeSameAs(w);
      }
    });
    test("when dir doesn't exist, assertion error must be raised", () => {
      {
        expected(() => {
          {
            expected.dir("unknown").toExist();
          }
        }).toRaise();
      }
    });
  }
});