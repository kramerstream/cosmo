"use strict";

var _core = require("@dogmalang/core");

const SimpleTask = _core.dogma.use(require("./SimpleTask"));

const $Finalizer = class Finalizer extends SimpleTask {
  constructor(_) {
    super(_);
    /* istanbul ignore next */

    if (_ == null) _ = {};
    /* istanbul ignore next */

    if (this._pvt_2c1da8efa56454f22e5329b8aedaaae6___init__ instanceof Function) this._pvt_2c1da8efa56454f22e5329b8aedaaae6___init__(_);
    /* istanbul ignore next */

    if (this._pvt_2c1da8efa56454f22e5329b8aedaaae6___post__ instanceof Function) this._pvt_2c1da8efa56454f22e5329b8aedaaae6___post__();
    /* istanbul ignore next */

    if (this._pvt_2c1da8efa56454f22e5329b8aedaaae6___validate__ instanceof Function) this._pvt_2c1da8efa56454f22e5329b8aedaaae6___validate__();
  }

};
const Finalizer = new Proxy($Finalizer, {
  apply(receiver, self, args) {
    return new $Finalizer(...args);
  }

});
module.exports = exports = Finalizer;
Object.defineProperty(Finalizer.prototype, "title", {
  enum: true,
  get: function () {
    const self = this;
    {
      return "fin(" + _core.dogma.super(this, "title") + ")";
    }
  }
});