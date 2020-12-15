"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

const traceContext = _core.dogma.use(require("../../lib/traceContext"));

module.exports = exports = suite(__filename, () => {
  {
    test("when mock created, mock must work", () => {
      {
        const m = traceContext();
        expected(m.attributes).toBeMap().toBeEmpty();
      }
    });
  }
});