"use strict";

var _core = require("@dogmalang/core");

const Finalizer = _core.dogma.use(require("./Finalizer"));

const $Teardown = class Teardown extends Finalizer {
  constructor(_) {
    super(_);
    /* istanbul ignore next */

    if (_ == null) _ = {};
    /* istanbul ignore next */

    if (this._pvt_95be812bf111eab1a6cb516106501d1a___init__ instanceof Function) this._pvt_95be812bf111eab1a6cb516106501d1a___init__(_);
    /* istanbul ignore next */

    if (this._pvt_95be812bf111eab1a6cb516106501d1a___post__ instanceof Function) this._pvt_95be812bf111eab1a6cb516106501d1a___post__();
    /* istanbul ignore next */

    if (this._pvt_95be812bf111eab1a6cb516106501d1a___validate__ instanceof Function) this._pvt_95be812bf111eab1a6cb516106501d1a___validate__();
  }

};
const Teardown = new Proxy($Teardown, {
  apply(receiver, self, args) {
    return new $Teardown(...args);
  }

});
module.exports = exports = Teardown;
Object.defineProperty(Teardown.prototype, "title", {
  enum: true,
  get: function () {
    const self = this;
    {
      return "teardown(" + _core.dogma.super(this, "title") + ")";
    }
  }
});