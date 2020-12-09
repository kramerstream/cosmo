"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@kramertest/cosmo-expected"));

const {
  mock
} = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    suite("when mock imported, function must be returned", () => {
      {
        expected(mock).toBeFn().member("fun").toBeFn();
      }
    });
  }
});