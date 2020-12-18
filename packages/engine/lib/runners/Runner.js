"use strict";

var _core = require("@dogmalang/core");

const $Runner = class Runner {
  constructor(_) {
    /* istanbul ignore next */
    if (_ == null) _ = {};
    (0, _core.expect)('id', _['id'], _core.text);
    Object.defineProperty(this, 'id', {
      value: (0, _core.coalesce)(_['id'], null),
      writable: false,
      enumerable: true
    });
    /* istanbul ignore next */

    if (this._pvt_45a86642028f7549580c3ec945f21ebb___init__ instanceof Function) this._pvt_45a86642028f7549580c3ec945f21ebb___init__(_);
    /* istanbul ignore next */

    if (this._pvt_45a86642028f7549580c3ec945f21ebb___post__ instanceof Function) this._pvt_45a86642028f7549580c3ec945f21ebb___post__();
    /* istanbul ignore next */

    if (this._pvt_45a86642028f7549580c3ec945f21ebb___validate__ instanceof Function) this._pvt_45a86642028f7549580c3ec945f21ebb___validate__();
  }

};
const Runner = new Proxy($Runner, {
  /* istanbul ignore next */
  apply(receiver, self, args) {
    throw "'Runner' is abstract.";
  }

});
module.exports = exports = Runner;
/* istanbul ignore next */

Runner.prototype.runTask = function () {
  (0, _core.abstract)();
};