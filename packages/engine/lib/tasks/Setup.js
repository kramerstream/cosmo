"use strict";

var _core = require("@dogmalang/core");

const Initializer = _core.dogma.use(require("./Initializer"));

const $Setup = class Setup extends Initializer {
  constructor(_) {
    super(_);
    /* istanbul ignore next */

    if (_ == null) _ = {};
    /* istanbul ignore next */

    if (this._pvt_4988c7e2270c35cc34345d96a806f3d6___init__ instanceof Function) this._pvt_4988c7e2270c35cc34345d96a806f3d6___init__(_);
    /* istanbul ignore next */

    if (this._pvt_4988c7e2270c35cc34345d96a806f3d6___post__ instanceof Function) this._pvt_4988c7e2270c35cc34345d96a806f3d6___post__();
    /* istanbul ignore next */

    if (this._pvt_4988c7e2270c35cc34345d96a806f3d6___validate__ instanceof Function) this._pvt_4988c7e2270c35cc34345d96a806f3d6___validate__();
  }

};
const Setup = new Proxy($Setup, {
  apply(receiver, self, args) {
    return new $Setup(...args);
  }

});
module.exports = exports = Setup;
Object.defineProperty(Setup.prototype, "title", {
  enum: true,
  get: function () {
    const self = this;
    {
      return "setup(" + _core.dogma.super(this, "title") + ")";
    }
  }
});