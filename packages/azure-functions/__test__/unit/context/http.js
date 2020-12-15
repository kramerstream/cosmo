"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

const path = _core.dogma.use(require("@dogmalang/path"));

const {
  context
} = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    const functionName = "http";
    const functionDirectory = path.join(__dirname, `../../data/${functionName}`);
    test("when mock created w/o req, mock must create req", () => {
      {
        const m = context({
          'url': "http://localhost:8080/api/my/endpoint",
          'functionDirectory': functionDirectory,
          'functionName': functionName
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
        expected(m.bindings.req).toHave({
          'method': "GET"
        });
        expected(m.bindingDefinitions).toBeList().it(0).toHave({
          'type': "httpTrigger"
        });
      }
    });
    test("when mock created w/o req but with req data, mock must create req with this data", () => {
      {
        const m = context({
          'url': "http://localhost:8080/api/my/endpoint",
          'originalUrl': "http://127.0.0.1:8080/api/my/endpoint",
          'headers': {},
          'query': {},
          'params': {},
          'functionDirectory': functionDirectory,
          'functionName': functionName
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
        expected(m.bindings.req).toHave({
          'method': "GET"
        });
        expected(m.bindingDefinitions).toBeList().it(0).toHave({
          'type': "httpTrigger"
        });
      }
    });
    test("when mock created w/ req, mock must use passed req", () => {
      {
        const req = {};
        const res = {};
        const m = context({
          'functionDirectory': functionDirectory,
          'bindings': {},
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