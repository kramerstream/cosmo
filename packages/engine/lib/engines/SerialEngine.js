"use strict";

var _core = require("@dogmalang/core");

const Engine = _core.dogma.use(require("./Engine"));

const Runner = _core.dogma.use(require("../runners/Runner"));

const Task = _core.dogma.use(require("../tasks/Task"));

const $SerialEngine = class SerialEngine extends Engine {
  constructor(_) {
    super(_);
    /* istanbul ignore next */

    if (_ == null) _ = {};
    (0, _core.expect)('runner', _['runner'], Runner);
    Object.defineProperty(this, 'runner', {
      value: (0, _core.coalesce)(_['runner'], null),
      writable: false,
      enumerable: true
    });
    /* istanbul ignore next */

    if (this._pvt_1c6204c7d4c0198760d03cc7295292ce___init__ instanceof Function) this._pvt_1c6204c7d4c0198760d03cc7295292ce___init__(_);
    /* istanbul ignore next */

    if (this._pvt_1c6204c7d4c0198760d03cc7295292ce___post__ instanceof Function) this._pvt_1c6204c7d4c0198760d03cc7295292ce___post__();
    /* istanbul ignore next */

    if (this._pvt_1c6204c7d4c0198760d03cc7295292ce___validate__ instanceof Function) this._pvt_1c6204c7d4c0198760d03cc7295292ce___validate__();
  }

};
const SerialEngine = new Proxy($SerialEngine, {
  apply(receiver, self, args) {
    return new $SerialEngine(...args);
  }

});
module.exports = exports = SerialEngine;

SerialEngine.prototype.runTask = function (task, args) {
  const self = this;
  const {
    runner
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("task", task, Task);
  /* istanbul ignore next */


  _core.dogma.expect("args", args, _core.list);

  {
    return runner.runTask(task, args, {});
  }
};