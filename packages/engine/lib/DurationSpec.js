"use strict";

var _core = require("@dogmalang/core");

const DurationKind = _core.dogma.use(require("./DurationKind"));

const $DurationSpec = class DurationSpec {
  constructor(_) {
    /* istanbul ignore next */
    if (_ == null) _ = {};
    (0, _core.expect)('fast', _['fast'], _core.num);
    Object.defineProperty(this, 'fast', {
      value: (0, _core.coalesce)(_['fast'], null),
      writable: false,
      enumerable: true
    });
    (0, _core.expect)('normal', _['normal'], _core.num);
    Object.defineProperty(this, 'normal', {
      value: (0, _core.coalesce)(_['normal'], null),
      writable: false,
      enumerable: true
    });
    (0, _core.expect)('slow', _['slow'], _core.num);
    Object.defineProperty(this, 'slow', {
      value: (0, _core.coalesce)(_['slow'], null),
      writable: false,
      enumerable: true
    });
    /* istanbul ignore next */

    if (this._pvt_7dffe61aec8230d2ba3535968221a049___init__ instanceof Function) this._pvt_7dffe61aec8230d2ba3535968221a049___init__(_);
    /* istanbul ignore next */

    if (this._pvt_7dffe61aec8230d2ba3535968221a049___post__ instanceof Function) this._pvt_7dffe61aec8230d2ba3535968221a049___post__();
    /* istanbul ignore next */

    if (this._pvt_7dffe61aec8230d2ba3535968221a049___validate__ instanceof Function) this._pvt_7dffe61aec8230d2ba3535968221a049___validate__();
  }

};
const DurationSpec = new Proxy($DurationSpec, {
  apply(receiver, self, args) {
    return new $DurationSpec(...args);
  }

});
module.exports = exports = DurationSpec;

DurationSpec.prototype.getKind = function (ms) {
  const self = this;
  const {
    fast,
    normal,
    slow
  } = self;
  let kind;
  /* istanbul ignore next */

  _core.dogma.expect("ms", ms, _core.num);

  {
    if (ms <= fast) {
      kind = DurationKind.FAST;
    } else if (ms <= normal) {
      kind = DurationKind.NORMAL;
    } else {
      kind = DurationKind.SLOW;
    }
  }
  return kind;
};