"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

const path = _core.dogma.use(require("@dogmalang/path"));

const {
  context
} = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    const functionName = "queue";
    const functionDirectory = path.join(__dirname, `../../data/${functionName}`);
    const item = {
      ["x"]: 123,
      ["y"]: 321
    };
    test("when mock created, mock must be created", () => {
      {
        const m = context({
          'functionDirectory': functionDirectory,
          'item': item
        });
        expected(m).member("invocationId").toBeUuid();
        expected(m.executionContext).toHave({
          'functionName': functionName,
          'functionDirectory': functionDirectory
        }).member("invocationId").toBeUuid();
        expected(m).member("bindings").toBeMap().member("bindingData").toBeMap();
        expected(m.traceContext).member("attributes").toBeMap();
        expected(m.log).toBeFn();
        expected(m.done).toBeFn();
        expected(m.bindingDefinitions).toBeList().it(0).toHave({
          'type': "queueTrigger"
        });
      }
    });
  }
});