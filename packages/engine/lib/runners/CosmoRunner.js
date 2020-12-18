"use strict";

var _core = require("@dogmalang/core");

const Task = _core.dogma.use(require("../tasks/Task"));

const SimpleTask = _core.dogma.use(require("../tasks/SimpleTask"));

const Initializer = _core.dogma.use(require("../tasks/Initializer"));

const Setup = _core.dogma.use(require("../tasks/Setup"));

const Finalizer = _core.dogma.use(require("../tasks/Finalizer"));

const Teardown = _core.dogma.use(require("../tasks/Teardown"));

const TestAct = _core.dogma.use(require("../tasks/TestAct"));

const Suite = _core.dogma.use(require("../tasks/Suite"));

const Test = _core.dogma.use(require("../tasks/Test"));

const Runner = _core.dogma.use(require("./Runner"));

const $CosmoRunner = class CosmoRunner extends Runner {
  constructor(_) {
    super(_);
    /* istanbul ignore next */

    if (_ == null) _ = {};
    /* istanbul ignore next */

    if (this._pvt_bd88cc1b5a9b99bb3bda3d076c077a64___init__ instanceof Function) this._pvt_bd88cc1b5a9b99bb3bda3d076c077a64___init__(_);
    /* istanbul ignore next */

    if (this._pvt_bd88cc1b5a9b99bb3bda3d076c077a64___post__ instanceof Function) this._pvt_bd88cc1b5a9b99bb3bda3d076c077a64___post__();
    /* istanbul ignore next */

    if (this._pvt_bd88cc1b5a9b99bb3bda3d076c077a64___validate__ instanceof Function) this._pvt_bd88cc1b5a9b99bb3bda3d076c077a64___validate__();
  }

};
const CosmoRunner = new Proxy($CosmoRunner, {
  apply(receiver, self, args) {
    return new $CosmoRunner(...args);
  }

});
module.exports = exports = CosmoRunner;

CosmoRunner.prototype.runTask = async function (task, args, opts) {
  const self = this;
  let result;
  /* istanbul ignore next */

  _core.dogma.expect("task", task, Task);
  /* istanbul ignore next */


  _core.dogma.expect("args", args, _core.list);
  /* istanbul ignore next */


  _core.dogma.expect("opts", opts, _core.map);

  {
    {
      const _ = task;
      /*istanbul ignore else*/

      if (_core.dogma.is(_, Initializer) || _core.dogma.is(_, Finalizer)) {
        {
          result = (0, await this.runSimpleTask(task, args, opts));
        }
      } else if (_core.dogma.is(_, Suite)) {
        {
          result = (0, await this.runSuite(task, args, opts));
        }
      } else if (_core.dogma.is(_, Test)) {
        {
          result = (0, await this.runTest(task, args, opts));
        }
      } else {
        {
          _core.dogma.raise(TypeError(`Unknown task for Cosmo runner: ${_}.`));
        }
      }
    }
  }
  return result;
};

CosmoRunner.prototype.runSimpleTask = async function (task, args, opts) {
  const self = this;
  let result;
  /* istanbul ignore next */

  _core.dogma.expect("task", task, SimpleTask);
  /* istanbul ignore next */


  _core.dogma.expect("args", args, _core.list);
  /* istanbul ignore next */


  _core.dogma.expect("opts", opts, _core.map);

  try {
    const {
      action
    } = task;
    result = (0, await action(args));
  } catch (e) {
    result = Result({
      'value': e,
      'kind': ResultKind.FAILED
    });
  }

  return result;
};