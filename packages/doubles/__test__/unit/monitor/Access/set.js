"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@kramertest/cosmo-expected"));

const {
  monitor
} = _core.dogma.use(require("../../../.."));

const Result = _core.dogma.use(require("../../../../lib/monitor/Result"));

const AccessKind = _core.dogma.use(require("../../../../lib/monitor/log/AccessKind"));

module.exports = exports = suite(__filename, () => {
  {
    teardown("Clear monitors created");
    test.only("when no error raised, log must be updated and value returned", () => {
      {
        const target = {
          ["x"]: 11,
          ["y"]: 22
        };
        const p = monitor(target);
        expected(p.x = 123).toBeEqualTo(123);
        expected(p.x).toBeEqualTo(123);
        const log = monitor.log(p);
        expected(log).toHaveLen(2);
        expected(log.items).it(0).toHave({
          'member': "x"
        }).it(1).toHave({
          'member': "x"
        });
        expected(log.returnedType(_core.num)).toBeEqualTo(2);
        let access = log.getEntry(0);
        expected(access.isSet()).toBeEqualTo(true);
        expected(access).toBe("Access").toHave({
          'value': 123,
          'result': Result.RETURN,
          'member': "x",
          'kind': AccessKind.SET
        });
        access = log.getEntry(1);
        expected(access.isGet()).toBeEqualTo(true);
        expected(access).toBe("Access").toHave({
          'value': 123,
          'result': Result.RETURN,
          'member': "x",
          'kind': AccessKind.GET
        });
      }
    });
    test("when error raised, log must be updated and the error raised", () => {
      {
        const $Point2D = class Point2D {
          constructor(_) {
            /* istanbul ignore next */
            if (_ == null) _ = {};
            (0, _core.expect)('x', _['x'], null);
            Object.defineProperty(this, 'x', {
              value: (0, _core.coalesce)(_['x'], null),
              writable: false,
              enumerable: true
            });
            (0, _core.expect)('y', _['y'], null);
            Object.defineProperty(this, 'y', {
              value: (0, _core.coalesce)(_['y'], null),
              writable: false,
              enumerable: true
            });
            Object.defineProperty(this, 'value', {
              value: (0, _core.coalesce)(_['value'], 33),
              writable: true,
              enumerable: false
            });
            /* istanbul ignore next */

            if (this._pvt_160e59608f8a80247e5cfb7394d8a755___init__ instanceof Function) this._pvt_160e59608f8a80247e5cfb7394d8a755___init__(_);
            /* istanbul ignore next */

            if (this._pvt_160e59608f8a80247e5cfb7394d8a755___post__ instanceof Function) this._pvt_160e59608f8a80247e5cfb7394d8a755___post__();
            /* istanbul ignore next */

            if (this._pvt_160e59608f8a80247e5cfb7394d8a755___validate__ instanceof Function) this._pvt_160e59608f8a80247e5cfb7394d8a755___validate__();
          }

        };
        const Point2D = new Proxy($Point2D, {
          apply(receiver, self, args) {
            return new $Point2D(...args);
          }

        });
        const target = Point2D({
          'x': 11,
          'y': 22
        });
        Object.defineProperty(target, "z", {
          ["enumerable"]: true,
          ["get"]: () => {
            {
              return target.value;
            }
          },
          ["set"]: () => {
            {
              return _core.dogma.raise("my error");
            }
          }
        });
        const p = monitor(target);
        expected(p).toBe(Point2D);
        expected(p.x).toBeEqualTo(11);
        expected(p.y).toBeEqualTo(22);
        expected(p.z).toBeEqualTo(33);
        expected(() => {
          {
            p.z = 123;
          }
        }).toRaise("my error");
        const log = monitor.log(p);
        expected(log).toHaveLen(4).member("accesses").toBeEqualTo(4);
        expected(log.items).it(0).toHave({
          'member': "x"
        }).it(1).toHave({
          'member': "y"
        }).it(2).toHave({
          'member': "z"
        }).it(3).toHave({
          'member': "z"
        });
        expected(log).member("returns").toBeEqualTo(3).member("raises").toBeEqualTo(1);

        for (const i of [0, 1, 2]) {
          expected(log.getEntry(i).isGet()).toBeEqualTo(true);
        }

        const access = log.getEntry(3);
        expected(access.isSet()).toBeEqualTo(true);
        expected(access.raisedValue("my error")).toBeEqualTo(true);
        expected(access.raisedType(_core.text)).toBeEqualTo(true);
      }
    });
    test("when given fields, only these fields must be monitored", () => {
      {
        const target = {
          ["x"]: 1,
          ["y"]: 2,
          ["z"]: 3
        };
        const p = monitor(target, {
          'members': ["x", "z"]
        });
        expected(p.x = 11).toBeEqualTo(11);
        expected(p.y = 22).toBeEqualTo(22);
        expected(p.z = 33).toBeEqualTo(33);
        const log = monitor.log(p);
        expected(log).toHaveLen(2);
        expected(log.items).it(0).toHave({
          'member': "x"
        }).it(1).toHave({
          'member': "z"
        });
      }
    });
    test("when onlyCalls, nothing must be monitored when set", () => {
      {
        const target = {
          ["x"]: 1,
          ["y"]: 2,
          ["z"]: 3
        };
        const p = monitor(target, {
          'onlyCalls': true
        });
        expected(p.x = 11).toBeEqualTo(11);
        expected(p.y = 22).toBeEqualTo(22);
        expected(p.z = 33).toBeEqualTo(33);
        const log = monitor.log(p);
        expected(log).toHaveLen(0);
      }
    });
  }
});