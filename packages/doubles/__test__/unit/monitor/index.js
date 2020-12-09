"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

const {
  monitor
} = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    suite("monitor()", () => {
      {
        teardown("Clear monitors created");
        test("when monitor created, monitors must contain monitor info", () => {
          {
            const target = {};
            const p = monitor(target);
            expected(p).notToBeSameAs(target);
            expected(monitor.monitors).toHaveLen(1).it(0, "proxy").toBeSameAs(p);
          }
        });
      }
    });
    suite("monitor.log()", () => {
      {
        fin("Clear monitors created");
        test("when proxy not saved, nil must be returned", () => {
          {
            monitor({});
            expected(monitor.log((0, _core.proxy)({}, {}))).toBeNil();
          }
        });
        test("when proxy saved, log must be returned", () => {
          {
            const p = monitor({});
            expected(monitor.log(p)).toBe("Log");
          }
        });
      }
    });
    suite("monitor.clear()", () => {
      {
        teardown("Clear monitors created");
        test("when proxy saved, clear must be performed", () => {
          {
            const p = monitor({});
            monitor.clear(p);
            expected(monitor.monitors).toBeEmpty(0);
          }
        });
        test("when proxy not saved, no clear performed and mustn't be raised error", () => {
          {
            const p = monitor({});
            monitor.clear((0, _core.proxy)({}, {}));
            expected(monitor.monitors).toHaveLen(1).it(0, "proxy").toBeSameAs(p);
          }
        });
      }
    });
  }
});