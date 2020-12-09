"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

const {
  monitor
} = _core.dogma.use(require("../../../.."));

const Result = _core.dogma.use(require("../../../../lib/monitor/Result"));

const $MyStruct = class MyStruct {
  constructor(_) {
    /* istanbul ignore next */
    if (_ == null) _ = {};
    Object.defineProperty(this, 'x', {
      value: (0, _core.coalesce)(_['x'], 1),
      writable: true,
      enumerable: true
    });
    /* istanbul ignore next */

    if (this._pvt_0f8ba178cf0b4d6de3732e19ed93c4c2___init__ instanceof Function) this._pvt_0f8ba178cf0b4d6de3732e19ed93c4c2___init__(_);
    /* istanbul ignore next */

    if (this._pvt_0f8ba178cf0b4d6de3732e19ed93c4c2___post__ instanceof Function) this._pvt_0f8ba178cf0b4d6de3732e19ed93c4c2___post__();
    /* istanbul ignore next */

    if (this._pvt_0f8ba178cf0b4d6de3732e19ed93c4c2___validate__ instanceof Function) this._pvt_0f8ba178cf0b4d6de3732e19ed93c4c2___validate__();
  }

};
const MyStruct = new Proxy($MyStruct, {
  apply(receiver, self, args) {
    return new $MyStruct(...args);
  }

});

MyStruct.prototype.returnNum = function () {
  const self = this;
  {
    return (0, _core.num)((0, _core.timestamp)());
  }
};

MyStruct.prototype.raiseError = function () {
  const self = this;
  {
    _core.dogma.raise("my error");
  }
};

module.exports = exports = suite(__filename, () => {
  {
    teardown("Clear monitors created");
    test("when not onlyCalls and no error raised, log must be updated and value returned", () => {
      {
        const target = MyStruct();
        const p = monitor(target);
        expected(p.returnNum()).toBeNum();
        expected(p.returnNum()).toBeNum();
        const log = monitor.log(p);
        expected(log).toHaveLen(4).member("accesses").toBeEqualTo(2).member("calls").toBeEqualTo(2).member("returns").toBeEqualTo(4);

        for (const i of [0, 1]) {
          expected(log.getCall(i)).toBe("Call").toHave({
            'result': Result.RETURN,
            'args': []
          }).member("value").toBeNum();
        }
      }
    });
    test("when onlyCalls and returning and raising, log must be updated returning and raising", () => {
      {
        const target = MyStruct();
        const p = monitor(target, {
          'onlyCalls': true
        });
        expected(p.returnNum()).toBeNum();
        expected(() => {
          {
            p.raiseError();
          }
        }).toRaise();
        const log = monitor.log(p);
        expected(log).toHaveLen(2).member("calls").toBeEqualTo(2).member("returns").toBeEqualTo(1).member("raises").toBeEqualTo(1);
        expected(log.getCall(0)).toBe("Call").toHave({
          'result': Result.RETURN,
          'args': []
        }).member("value").toBeNum();
        expected(log.getCall(1)).toBe("Call").toHave({
          'result': Result.THROW,
          'args': []
        }).member("value").toBeEqualTo("my error");
      }
    });
    test("when calledWith() used, times called with the arguments must be returned", () => {
      {
        const target = (x, y) => {
          /* istanbul ignore next */
          _core.dogma.expect("x", x);
          /* istanbul ignore next */


          _core.dogma.expect("y", y);

          {
            return x + y;
          }
        };

        const p = monitor(target);
        expected(p(11, 22)).toBeEqualTo(33);
        expected(p(11, 22)).toBeEqualTo(33);
        expected(p(22, 33)).toBeEqualTo(55);
        const log = monitor.log(p);
        expected(log).toHaveLen(3);
        expected(log.calledWith([11, 22])).toBeEqualTo(2);
        expected(log.calledWith([22])).toBeEqualTo(0);
        expected(log.calledWith([22, 33])).toBeEqualTo(1);
        expected(log.returnedValue(33)).toBeEqualTo(2);
        expected(log.returnedValue(55)).toBeEqualTo(1);
        expected(log.returnedValue(66)).toBeEqualTo(0);
      }
    });
  }
});