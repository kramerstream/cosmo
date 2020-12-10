"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

const executionContext = _core.dogma.use(require("../../lib/executionContext"));

module.exports = exports = suite(__filename, () => {
  {
    test("when created, mock must work", () => {
      {
        const functionName = "myfn";
        const functionDirectory = "/my/dir";
        const m = executionContext({
          'functionName': functionName,
          'functionDirectory': functionDirectory
        });
        expected(m).toHave({
          'functionName': functionName,
          'functionDirectory': functionDirectory
        }).member("invocationId").toBeUuid();
      }
    });
  }
});