"use strict";

var _core = require("@dogmalang/core");

const CompositeTask = _core.dogma.use(require("./CompositeTask"));

const $Suite = class Suite extends CompositeTask {
  constructor(_) {
    super(_);
    /* istanbul ignore next */

    if (_ == null) _ = {};
    Object.defineProperty(this, 'setups', {
      value: [],
      writable: false,
      enumerable: false
    });
    Object.defineProperty(this, 'teardowns', {
      value: [],
      writable: false,
      enumerable: false
    });
    /* istanbul ignore next */

    if (this._pvt_12a8620219b20d3d7d72714528aa9c93___init__ instanceof Function) this._pvt_12a8620219b20d3d7d72714528aa9c93___init__(_);
    /* istanbul ignore next */

    if (this._pvt_12a8620219b20d3d7d72714528aa9c93___post__ instanceof Function) this._pvt_12a8620219b20d3d7d72714528aa9c93___post__();
    /* istanbul ignore next */

    if (this._pvt_12a8620219b20d3d7d72714528aa9c93___validate__ instanceof Function) this._pvt_12a8620219b20d3d7d72714528aa9c93___validate__();
  }

};
const Suite = new Proxy($Suite, {
  /* istanbul ignore next */
  apply(receiver, self, args) {
    throw "'Suite' is abstract.";
  }

});
module.exports = exports = Suite;

Suite.prototype.hasSetups = function () {
  const self = this;
  const {
    setups,
    teardowns
  } = self;
  {
    return (0, _core.len)(setups) > 0;
  }
};

Suite.prototype.hasTeardowns = function () {
  const self = this;
  const {
    setups,
    teardowns
  } = self;
  {
    return (0, _core.len)(teardowns) > 0;
  }
};
/* istanbul ignore next */


Suite.prototype.addTask = function () {
  (0, _core.abstract)();
};