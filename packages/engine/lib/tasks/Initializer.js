"use strict";

var _core = require("@dogmalang/core");

const SimpleTask = _core.dogma.use(require("./SimpleTask"));

const $Initializer = class Initializer extends SimpleTask {
  constructor(_) {
    super(_);
    /* istanbul ignore next */

    if (_ == null) _ = {};
    /* istanbul ignore next */

    if (this._pvt_b039b324d068bb70eb653a6f0d3a986a___init__ instanceof Function) this._pvt_b039b324d068bb70eb653a6f0d3a986a___init__(_);
    /* istanbul ignore next */

    if (this._pvt_b039b324d068bb70eb653a6f0d3a986a___post__ instanceof Function) this._pvt_b039b324d068bb70eb653a6f0d3a986a___post__();
    /* istanbul ignore next */

    if (this._pvt_b039b324d068bb70eb653a6f0d3a986a___validate__ instanceof Function) this._pvt_b039b324d068bb70eb653a6f0d3a986a___validate__();
  }

};
const Initializer = new Proxy($Initializer, {
  apply(receiver, self, args) {
    return new $Initializer(...args);
  }

});
module.exports = exports = Initializer;
Object.defineProperty(Initializer.prototype, "title", {
  enum: true,
  get: function () {
    const self = this;
    {
      return "init(" + _core.dogma.super(this, "title") + ")";
    }
  }
});