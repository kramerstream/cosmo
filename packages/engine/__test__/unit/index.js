"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

const api = _core.dogma.use(require("../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("api must export types", () => {
      {
        expected(api).member("SerialEngine").toBeCallable();
      }
    });
  }
});