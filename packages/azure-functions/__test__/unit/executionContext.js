"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

const {
  v4: uuid
} = _core.dogma.use(require("uuid"));

const executionContext = _core.dogma.use(require("../../lib/executionContext"));

module.exports = exports = suite(__filename, () => {
  {
    test("when created, mock must work", () => {
      {
        const invocationId = uuid();
        const functionName = "myfn";
        const functionDirectory = "/my/dir";
        const m = executionContext({
          'invocationId': invocationId,
          'functionName': functionName,
          'functionDirectory': functionDirectory
        });
        expected(m).toHave({
          'invocationId': invocationId,
          'functionName': functionName,
          'functionDirectory': functionDirectory
        });
      }
    });
  }
});