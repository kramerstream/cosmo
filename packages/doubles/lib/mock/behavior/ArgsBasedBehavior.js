"use strict";

var _core = require("@dogmalang/core");

const isEqual = _core.dogma.use(require("lodash.isequal"));

const Behavior = _core.dogma.use(require("./Behavior"));

const $ArgsBasedBehavior = class ArgsBasedBehavior extends Behavior {
  constructor(_) {
    super(_);
    /* istanbul ignore next */

    if (_ == null) _ = {};
    /* istanbul ignore next */

    if (this._pvt_6dcc5ecdb0ef0298c85cf85fa83e05de___init__ instanceof Function) this._pvt_6dcc5ecdb0ef0298c85cf85fa83e05de___init__(_);
    /* istanbul ignore next */

    if (this._pvt_6dcc5ecdb0ef0298c85cf85fa83e05de___post__ instanceof Function) this._pvt_6dcc5ecdb0ef0298c85cf85fa83e05de___post__();
    /* istanbul ignore next */

    if (this._pvt_6dcc5ecdb0ef0298c85cf85fa83e05de___validate__ instanceof Function) this._pvt_6dcc5ecdb0ef0298c85cf85fa83e05de___validate__();
  }

};
const ArgsBasedBehavior = new Proxy($ArgsBasedBehavior, {
  apply(receiver, self, args) {
    return new $ArgsBasedBehavior(...args);
  }

});
module.exports = exports = ArgsBasedBehavior;

ArgsBasedBehavior.prototype.getResponse = function (args) {
  const self = this;
  let resp;
  /* istanbul ignore next */

  _core.dogma.expect("args", args, _core.list);

  {
    var _resp;

    for (const r of this.responses) {
      if (isEqual(args, r.args)) {
        resp = r;
        break;
      }
    }

    resp = (_resp = resp) !== null && _resp !== void 0 ? _resp : this.defaultResponse;
  }
  return resp;
};