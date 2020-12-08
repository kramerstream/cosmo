"use strict";

var _core = require("@dogmalang/core");

const Entry = _core.dogma.use(require("./Entry"));

const $Call = class Call extends Entry {
  constructor(_) {
    super(_);
    /* istanbul ignore next */

    if (_ == null) _ = {};
    (0, _core.expect)('args', _['args'], _core.list);
    Object.defineProperty(this, 'args', {
      value: (0, _core.coalesce)(_['args'], null),
      writable: false,
      enumerable: true
    });
    /* istanbul ignore next */

    if (this._pvt_87c7bff78982f609dde586d9cbb89392___init__ instanceof Function) this._pvt_87c7bff78982f609dde586d9cbb89392___init__(_);
    /* istanbul ignore next */

    if (this._pvt_87c7bff78982f609dde586d9cbb89392___post__ instanceof Function) this._pvt_87c7bff78982f609dde586d9cbb89392___post__();
    /* istanbul ignore next */

    if (this._pvt_87c7bff78982f609dde586d9cbb89392___validate__ instanceof Function) this._pvt_87c7bff78982f609dde586d9cbb89392___validate__();
  }

};
const Call = new Proxy($Call, {
  apply(receiver, self, args) {
    return new $Call(...args);
  }

});
module.exports = exports = Call;

Call.prototype.calledWith = function (args) {
  const self = this;
  let yep = false;
  /* istanbul ignore next */

  _core.dogma.expect("args", args, _core.list);

  {
    if ((0, _core.len)(this.args) == (0, _core.len)(args)) {
      for (let i = 0; i < (0, _core.len)(this.args); i += 1) {
        if (!(yep = _core.dogma.getItem(this.args, i) == _core.dogma.getItem(args, i))) {
          break;
        }
      }
    }
  }
  return yep;
};