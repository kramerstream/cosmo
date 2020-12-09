"use strict";

var _core = require("@dogmalang/core");

const Operation = _core.dogma.use(require("./Operation"));

const $Response = class Response {
  constructor(_) {
    /* istanbul ignore next */
    if (_ == null) _ = {};
    /* istanbul ignore next */

    if (_['args'] != null) (0, _core.expect)('args', _['args'], _core.list);
    Object.defineProperty(this, 'args', {
      value: (0, _core.coalesce)(_['args'], null),
      writable: false,
      enumerable: true
    });
    Object.defineProperty(this, 'value', {
      value: (0, _core.coalesce)(_['value'], null),
      writable: false,
      enumerable: true
    });
    (0, _core.expect)('operation', _['operation'], Operation);
    Object.defineProperty(this, 'operation', {
      value: (0, _core.coalesce)(_['operation'], null),
      writable: false,
      enumerable: true
    });
    /* istanbul ignore next */

    if (this._pvt_63196b9062e8491fb87845b636b73993___init__ instanceof Function) this._pvt_63196b9062e8491fb87845b636b73993___init__(_);
    /* istanbul ignore next */

    if (this._pvt_63196b9062e8491fb87845b636b73993___post__ instanceof Function) this._pvt_63196b9062e8491fb87845b636b73993___post__();
    /* istanbul ignore next */

    if (this._pvt_63196b9062e8491fb87845b636b73993___validate__ instanceof Function) this._pvt_63196b9062e8491fb87845b636b73993___validate__();
  }

};
const Response = new Proxy($Response, {
  apply(receiver, self, args) {
    return new $Response(...args);
  }

});
module.exports = exports = Response;