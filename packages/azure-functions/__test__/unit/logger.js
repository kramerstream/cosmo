"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

const logger = _core.dogma.use(require("../../lib/logger"));

module.exports = exports = suite(__filename, () => {
  {
    test("when mock created, mock must work", () => {
      {
        const m = logger();
        expected(m).toBeCallable();
        expected(m()).toBeNil();
        expected(m()).toBeNil();
        expected(m.error()).toBeNil();
        expected(m.warn()).toBeNil();
        expected(m.info()).toBeNil();
        expected(m.verbose()).toBeNil();
      }
    });
  }
});