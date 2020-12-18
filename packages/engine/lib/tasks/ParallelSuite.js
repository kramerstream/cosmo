"use strict";

var _core = require("@dogmalang/core");

const Suite = _core.dogma.use(require("./Suite"));

const $ParallelSuite = class ParallelSuite extends Suite {
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

    if (this._pvt_7182d58757cbb5d266357278e1c90091___init__ instanceof Function) this._pvt_7182d58757cbb5d266357278e1c90091___init__(_);
    /* istanbul ignore next */

    if (this._pvt_7182d58757cbb5d266357278e1c90091___post__ instanceof Function) this._pvt_7182d58757cbb5d266357278e1c90091___post__();
    /* istanbul ignore next */

    if (this._pvt_7182d58757cbb5d266357278e1c90091___validate__ instanceof Function) this._pvt_7182d58757cbb5d266357278e1c90091___validate__();
  }

};
const ParallelSuite = new Proxy($ParallelSuite, {
  apply(receiver, self, args) {
    return new $ParallelSuite(...args);
  }

});
module.exports = exports = ParallelSuite;

ParallelSuite.prototype.addTask = function (task) {
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
      } else if (_core.dogma.is(_, Test)) {
        {
          this.task.push(task);
        }
      } else {
        {
          _core.dogma.raise(TypeError(`Invalid type of task for parallel suite: ${_}.`));
        }
      }
    }
  }
  return this;
};