"use strict";

var _core = require("@dogmalang/core");

const DurationKind = _core.dogma.use(require("../DurationKind"));

const ResultKind = _core.dogma.use(require("./ResultKind"));

const $Result = class Result {
  constructor(_) {
    /* istanbul ignore next */
    if (_ == null) _ = {};
    (0, _core.expect)('kind', _['kind'], ResultKind);
    Object.defineProperty(this, 'kind', {
      value: (0, _core.coalesce)(_['kind'], null),
      writable: false,
      enumerable: true
    });
    Object.defineProperty(this, 'value', {
      value: (0, _core.coalesce)(_['value'], null),
      writable: false,
      enumerable: true
    });
    (0, _core.expect)('duration', _['duration'], _core.num);
    Object.defineProperty(this, 'duration', {
      value: (0, _core.coalesce)(_['duration'], null),
      writable: false,
      enumerable: true
    });
    (0, _core.expect)('durationKind', _['durationKind'], DurationKind);
    Object.defineProperty(this, 'durationKind', {
      value: (0, _core.coalesce)(_['durationKind'], null),
      writable: false,
      enumerable: true
    });
    /* istanbul ignore next */

    if (this._pvt_ef230b5cfc8a9d67c67f2d978b0de3e6___init__ instanceof Function) this._pvt_ef230b5cfc8a9d67c67f2d978b0de3e6___init__(_);
    /* istanbul ignore next */

    if (this._pvt_ef230b5cfc8a9d67c67f2d978b0de3e6___post__ instanceof Function) this._pvt_ef230b5cfc8a9d67c67f2d978b0de3e6___post__();
    /* istanbul ignore next */

    if (this._pvt_ef230b5cfc8a9d67c67f2d978b0de3e6___validate__ instanceof Function) this._pvt_ef230b5cfc8a9d67c67f2d978b0de3e6___validate__();
  }

};
const Result = new Proxy($Result, {
  apply(receiver, self, args) {
    return new $Result(...args);
  }

});
module.exports = exports = Result;