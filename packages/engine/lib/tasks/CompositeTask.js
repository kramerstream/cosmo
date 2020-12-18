"use strict";

var _core = require("@dogmalang/core");

const Task = _core.dogma.use(require("./Task"));

const $CompositeTask = class CompositeTask extends Task {
  constructor(_) {
    super(_);
    /* istanbul ignore next */

    if (_ == null) _ = {};
    Object.defineProperty(this, 'initializers', {
      value: [],
      writable: false,
      enumerable: false
    });
    Object.defineProperty(this, 'finalizers', {
      value: [],
      writable: false,
      enumerable: false
    });
    /* istanbul ignore next */

    if (this._pvt_5efc5fec6b62e67e8349bebd09eb5567___init__ instanceof Function) this._pvt_5efc5fec6b62e67e8349bebd09eb5567___init__(_);
    /* istanbul ignore next */

    if (this._pvt_5efc5fec6b62e67e8349bebd09eb5567___post__ instanceof Function) this._pvt_5efc5fec6b62e67e8349bebd09eb5567___post__();
    /* istanbul ignore next */

    if (this._pvt_5efc5fec6b62e67e8349bebd09eb5567___validate__ instanceof Function) this._pvt_5efc5fec6b62e67e8349bebd09eb5567___validate__();
  }

};
const CompositeTask = new Proxy($CompositeTask, {
  /* istanbul ignore next */
  apply(receiver, self, args) {
    throw "'CompositeTask' is abstract.";
  }

});
module.exports = exports = CompositeTask;

CompositeTask.prototype.hasInitializers = function () {
  const self = this;
  const {
    initializers,
    finalizers
  } = self;
  {
    return (0, _core.len)(initializers) > 0;
  }
};

CompositeTask.prototype.hasFinalizers = function () {
  const self = this;
  const {
    initializers,
    finalizers
  } = self;
  {
    return (0, _core.len)(finalizers) > 0;
  }
};