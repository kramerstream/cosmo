"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

const {
  monitor
} = _core.dogma.use(require("../../../.."));

const Result = _core.dogma.use(require("../../../../lib/monitor/Result"));

const AccessKind = _core.dogma.use(require("../../../../lib/monitor/log/AccessKind"));

module.exports = exports = suite(__filename, () => {
  {
    teardown("Clear monitors created");
    test("when no error raised, log must be updated and value returned", () => {
      {
        const target = {
          ["x"]: 11,
          ["y"]: 22
        };
        const p = monitor(target);
        expected(p.x).toBeEqualTo(11);
        expected(p.y).toBeEqualTo(22);
        expected(p.z).toBeNil();
        const log = monitor.log(p);
        expected(log).toHaveLen(3);
        expected(log.items).it(0).toHave({
          'member': "x"
        }).it(1).toHave({
          'member': "y"
        }).it(2).toHave({
          'member': "z"
        });
        expected(log.returnedType(_core.num)).toBeEqualTo(2);
        expected(log.getEntry(0)).toBe("Access").toHave({
          'value': 11,
          'result': Result.RETURN,
          'member': "x",
          'kind': AccessKind.GET
        });
        expected(log.getAccess(0)).toBe("Access").toHave({
          'value': 11,
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
            /* istanbul ignore next */

            if (this._pvt_6057235c2ddb2253caadf28437e85251___init__ instanceof Function) this._pvt_6057235c2ddb2253caadf28437e85251___init__(_);
            /* istanbul ignore next */

            if (this._pvt_6057235c2ddb2253caadf28437e85251___post__ instanceof Function) this._pvt_6057235c2ddb2253caadf28437e85251___post__();
            /* istanbul ignore next */

            if (this._pvt_6057235c2ddb2253caadf28437e85251___validate__ instanceof Function) this._pvt_6057235c2ddb2253caadf28437e85251___validate__();
          }

        };
        const Point2D = new Proxy($Point2D, {
          apply(receiver, self, args) {
            return new $Point2D(...args);
          }

        });
        Object.defineProperty(Point2D.prototype, "z", {
          enum: true,
          get: function () {
            const self = this;
            {
              return _core.dogma.raise("my error");
            }
          }
        });
        const target = Point2D({
          'x': 11,
          'y': 22
        });
        const p = monitor(target);
        expected(p).toBe(Point2D);
        expected(p.x).toBeEqualTo(11);
        expected(p.y).toBeEqualTo(22);
        expected(() => {
          {
            p.z;
          }
        }).toRaise("my error");
        const log = monitor.log(p);
        expected(log).toHaveLen(3).member("accesses").toBeEqualTo(3);
        expected(log.items).it(0).toHave({
          'member': "x"
        }).it(1).toHave({
          'member': "y"
        }).it(2).toHave({
          'member': "z"
        });
        expected(log.returns).toBeEqualTo(2);
        expected(log.raises).toBeEqualTo(1);
        expected(log.raisedValue("my error")).toBeEqualTo(1);
        expected(log.raisedType(_core.text)).toBeEqualTo(1);
      }
    });
    test("when given fields, only these fields must be monitored", () => {
      {
        const target = {
          ["x"]: 11,
          ["y"]: 22,
          ["z"]: 33
        };
        const p = monitor(target, {
          'members': ["x", "z"]
        });
        expected(p.x).toBeEqualTo(11);
        expected(p.y).toBeEqualTo(22);
        expected(p.z).toBeEqualTo(33);
        const log = monitor.log(p);
        expected(log).toHaveLen(2);
        expected(log.items).it(0).toHave({
          'member': "x"
        }).it(1).toHave({
          'member': "z"
        });
      }
    });
  }
});