"use strict";

var _core = require("@dogmalang/core");

const pkg = _core.dogma.use(require("../.."));

const expected = _core.dogma.use(require("@kramertest/cosmo-expected"));

module.exports = exports = suite(__filename, () => {
  {
    test("when imported, name and members returned", () => {
      {
        expected(pkg).member("name").toInclude("fs").member("members").toHave("file").toHave("dir");
      }
    });
  }
});