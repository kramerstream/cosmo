"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

const path = _core.dogma.use(require("@dogmalang/path"));

const {
  context
} = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    const functionName = "timer";
    const functionDirectory = path.join(__dirname, `../../data/${functionName}`);
    test("when mock created w/o timer, timer must be create", () => {
      {
        const m = context({
          'functionDirectory': functionDirectory
        });
        expected(m).member("invocationId").toBeUuid();
        expected(m.executionContext).toHave({
          'functionName': functionName,
          'functionDirectory': functionDirectory
        }).member("invocationId").toBeUuid();
        expected(m.bindings.timer.scheduleStatus).toHave("last", "next", "lastUpdated").member("next").toBeText();
        expected(m.bindings.timer).toBeMap().member("scheduleStatus").toBeMap();
        expected(m.traceContext).member("attributes").toBeMap();
        expected(m.log).toBeFn();
        expected(m.done).toBeFn();
        expected(m.bindingDefinitions).toBeList().it(0).toHave({
          'type': "timerTrigger"
        });
      }
    });
    test("when bindings passed, timer must be added to it", () => {
      {
        const m = context({
          'functionDirectory': functionDirectory,
          'bindings': {},
          'timer': {}
        });
        expected(m).member("invocationId").toBeUuid();
        expected(m.executionContext).toHave({
          'functionName': functionName,
          'functionDirectory': functionDirectory
        }).member("invocationId").toBeUuid();
        expected(m.bindings.timer).toBeEqualTo({});
        expected(m.traceContext).member("attributes").toBeMap();
        expected(m.log).toBeFn();
        expected(m.done).toBeFn();
        expected(m.bindingDefinitions).toBeList().it(0).toHave({
          'type': "timerTrigger"
        });
      }
    });
  }
});