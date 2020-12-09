"use strict";

var _core = require("@dogmalang/core");

const Behavior = _core.dogma.use(require("./Behavior"));

const $PositionBasedBehavior = class PositionBasedBehavior extends Behavior {
  constructor(_) {
    super(_);
    /* istanbul ignore next */

    if (_ == null) _ = {};
    Object.defineProperty(this, 'currentIndex', {
      value: -1,
      writable: true,
      enumerable: false
    });
    Object.defineProperty(this, 'validated', {
      value: false,
      writable: true,
      enumerable: false
    });
    /* istanbul ignore next */

    if (this._pvt_ac7c3687a878aa7a58eb98593c3c1755___init__ instanceof Function) this._pvt_ac7c3687a878aa7a58eb98593c3c1755___init__(_);
    /* istanbul ignore next */

    if (this._pvt_ac7c3687a878aa7a58eb98593c3c1755___post__ instanceof Function) this._pvt_ac7c3687a878aa7a58eb98593c3c1755___post__();
    /* istanbul ignore next */

    if (this._pvt_ac7c3687a878aa7a58eb98593c3c1755___validate__ instanceof Function) this._pvt_ac7c3687a878aa7a58eb98593c3c1755___validate__();
  }

};
const PositionBasedBehavior = new Proxy($PositionBasedBehavior, {
  apply(receiver, self, args) {
    return new $PositionBasedBehavior(...args);
  }

});
module.exports = exports = PositionBasedBehavior;

PositionBasedBehavior.prototype.getResponse = function (args) {
  const self = this;
  let resp;
  /* istanbul ignore next */

  _core.dogma.expect("args", args, _core.list);

  {
    {
      const i = this.currentIndex += 1;

      if ((0, _core.len)(this.responses) > i) {
        resp = _core.dogma.getItem(this.responses, i);
      } else {
        resp = this.defaultResponse;
      }
    }
  }
  return resp;
};