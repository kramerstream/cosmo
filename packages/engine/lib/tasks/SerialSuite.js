"use strict";

var _core = require("@dogmalang/core");

const Task = _core.dogma.use(require("./Task"));

const Suite = _core.dogma.use(require("./Suite"));

const $SerialSuite = class SerialSuite extends Suite {
  constructor(_) {
    super(_);
    /* istanbul ignore next */

    if (_ == null) _ = {};
    Object.defineProperty(this, 'tasks', {
      value: [],
      writable: false,
      enumerable: false
    });
    /* istanbul ignore next */

    if (this._pvt_609c498d563072ab6ba768e610e88864___init__ instanceof Function) this._pvt_609c498d563072ab6ba768e610e88864___init__(_);
    /* istanbul ignore next */

    if (this._pvt_609c498d563072ab6ba768e610e88864___post__ instanceof Function) this._pvt_609c498d563072ab6ba768e610e88864___post__();
    /* istanbul ignore next */

    if (this._pvt_609c498d563072ab6ba768e610e88864___validate__ instanceof Function) this._pvt_609c498d563072ab6ba768e610e88864___validate__();
  }

};
const SerialSuite = new Proxy($SerialSuite, {
  apply(receiver, self, args) {
    return new $SerialSuite(...args);
  }

});
module.exports = exports = SerialSuite;

SerialSuite.prototype.addTask = function (task) {
  const self = this;
  const {
    tasks
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("task", task, Task);

  {
    {
      const _ = task;
      /*istanbul ignore else*/

      if (_core.dogma.is(_, Setup)) {
        {
          this.setups.push(task);
        }
      } else if (_core.dogma.is(_, Initializer)) {
        {
          this.initializers.push(task);
        }
      } else if (_core.dogma.is(_, Teardown)) {
        {
          this.teardowns.push(task);
        }
      } else if (_core.dogma.is(_, Finalizer)) {
        {
          this.finalizers.push(task);
        }
      } else if (_core.dogma.is(_, Suite) || _core.dogma.is(_, Test)) {
        {
          this.tasks.push(task);
        }
      } else {
        {
          _core.dogma.raise(TypeError(`Invalid type of task for serial suite: ${_}.`));
        }
      }
    }
  }
  return this;
};