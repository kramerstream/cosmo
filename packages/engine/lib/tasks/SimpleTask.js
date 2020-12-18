"use strict";

var _core = require("@dogmalang/core");

const Task = _core.dogma.use(require("./Task"));

const $SimpleTask = class SimpleTask extends Task {
  constructor(_) {
    super(_);
    /* istanbul ignore next */

    if (_ == null) _ = {};
    (0, _core.expect)('action', _['action'], _core.func);
    Object.defineProperty(this, 'action', {
      value: (0, _core.coalesce)(_['action'], null),
      writable: false,
      enumerable: true
    });
    /* istanbul ignore next */

    if (this._pvt_edaaabfe985b747dc17af5ed703efdf7___init__ instanceof Function) this._pvt_edaaabfe985b747dc17af5ed703efdf7___init__(_);
    /* istanbul ignore next */

    if (this._pvt_edaaabfe985b747dc17af5ed703efdf7___post__ instanceof Function) this._pvt_edaaabfe985b747dc17af5ed703efdf7___post__();
    /* istanbul ignore next */

    if (this._pvt_edaaabfe985b747dc17af5ed703efdf7___validate__ instanceof Function) this._pvt_edaaabfe985b747dc17af5ed703efdf7___validate__();
  }

};
const SimpleTask = new Proxy($SimpleTask, {
  /* istanbul ignore next */
  apply(receiver, self, args) {
    throw "'SimpleTask' is abstract.";
  }

});
module.exports = exports = SimpleTask;