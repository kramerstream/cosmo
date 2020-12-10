"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

const {
  context
} = _core.dogma.use(require("../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when mock created w/o req, mock must not have req", () => {
      {
        const functionName = "myfn";
        const functionDirectory = "/my/dir";
        const m = context({
          'functionName': functionName,
          'functionDirectory': functionDirectory
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
        expected(m).notToHave("req");
      }
    });
    test("when mock created w/ req, mock must have req", () => {
      {
        const functionName = "myfn";
        const functionDirectory = "/my/dir";
        const req = {};
        const res = {};
        const m = context({
          'functionName': functionName,
          'functionDirectory': functionDirectory,
          'req': req,
          'res': res
        });
        expected(m).toHave({
          'req': req,
          'res': res
        }).member("invocationId").toBeUuid();
        expected(m.executionContext).toHave({
          'functionName': functionName,
          'functionDirectory': functionDirectory
        }).member("invocationId").toBeUuid();
        expected(m).member("bindings").toBeMap().member("bindingData").toBeMap();
        expected(m.traceContext).member("attributes").toBeMap();
        expected(m.log).toBeFn();
        expected(m.done).toBeFn();
      }
    });
  }
});