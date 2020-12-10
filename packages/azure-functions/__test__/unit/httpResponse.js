"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

const {
  httpResponse
} = _core.dogma.use(require("../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when mock created, mock must work", () => {
      {
        const m = httpResponse();
        expected(m).toHave({
          'headers': {},
          'cookies': {}
        });
      }
    });
  }
});