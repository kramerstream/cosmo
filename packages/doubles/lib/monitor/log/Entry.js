"use strict";

var _core = require("@dogmalang/core");

const Result = _core.dogma.use(require("../Result"));

const $Entry = class Entry {
  constructor(_) {
    /* istanbul ignore next */
    if (_ == null) _ = {};
    Object.defineProperty(this, 'value', {
      value: (0, _core.coalesce)(_['value'], null),
      writable: false,
      enumerable: true
    });
    (0, _core.expect)('result', _['result'], Result);
    Object.defineProperty(this, 'result', {
      value: (0, _core.coalesce)(_['result'], null),
      writable: false,
      enumerable: true
    });
    /* istanbul ignore next */

    if (this._pvt_08c8bd51d95a37d7d68928207c15d8da___init__ instanceof Function) this._pvt_08c8bd51d95a37d7d68928207c15d8da___init__(_);
    /* istanbul ignore next */

    if (this._pvt_08c8bd51d95a37d7d68928207c15d8da___post__ instanceof Function) this._pvt_08c8bd51d95a37d7d68928207c15d8da___post__();
    /* istanbul ignore next */

    if (this._pvt_08c8bd51d95a37d7d68928207c15d8da___validate__ instanceof Function) this._pvt_08c8bd51d95a37d7d68928207c15d8da___validate__();
  }

};
const Entry = new Proxy($Entry, {
  /* istanbul ignore next */
  apply(receiver, self, args) {
    throw "'Entry' is abstract.";
  }

});
module.exports = exports = Entry;
Object.defineProperty(Entry.prototype, "returned", {
  enum: true,
  get: function () {
    const self = this;
    {
      return _core.dogma.enumEq(this.result, "RETURN");
    }
  }
});
Object.defineProperty(Entry.prototype, "raised", {
  enum: true,
  get: function () {
    const self = this;
    {
      return _core.dogma.enumEq(this.result, "THROW");
    }
  }
});

Entry.prototype.returnedValue = function (value) {
  const self = this;
  {
    return this.returned && this.value == value;
  }
};

Entry.prototype.returnedType = function (Type) {
  const self = this;
  /* istanbul ignore next */

  _core.dogma.expect("Type", Type);

  {
    return this.returned && _core.dogma.is(this.value, Type);
  }
};

Entry.prototype.raisedValue = function (value) {
  const self = this;
  {
    return this.raised && this.value == value;
  }
};

Entry.prototype.raisedType = function (Type) {
  const self = this;
  /* istanbul ignore next */

  _core.dogma.expect("Type", Type);

  {
    return this.raised && _core.dogma.is(this.value, Type);
  }
};