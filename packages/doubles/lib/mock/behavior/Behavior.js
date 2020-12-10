"use strict";

var _core = require("@dogmalang/core");

const Response = _core.dogma.use(require("./Response"));

const Operation = _core.dogma.use(require("./Operation"));

const $Behavior = class Behavior {
  constructor(_) {
    /* istanbul ignore next */
    if (_ == null) _ = {};
    /* istanbul ignore next */

    if (_['defaultResponse'] != null) (0, _core.expect)('defaultResponse', _['defaultResponse'], Response);
    Object.defineProperty(this, 'defaultResponse', {
      value: (0, _core.coalesce)(_['defaultResponse'], null),
      writable: true,
      enumerable: false
    });
    Object.defineProperty(this, 'responses', {
      value: [],
      writable: false,
      enumerable: false
    });
    /* istanbul ignore next */

    if (this._pvt_f3dfa0b98366862ce88f0c6721d296d6___init__ instanceof Function) this._pvt_f3dfa0b98366862ce88f0c6721d296d6___init__(_);
    /* istanbul ignore next */

    if (this._pvt_f3dfa0b98366862ce88f0c6721d296d6___post__ instanceof Function) this._pvt_f3dfa0b98366862ce88f0c6721d296d6___post__();
    /* istanbul ignore next */

    if (this._pvt_f3dfa0b98366862ce88f0c6721d296d6___validate__ instanceof Function) this._pvt_f3dfa0b98366862ce88f0c6721d296d6___validate__();
  }

};
const Behavior = new Proxy($Behavior, {
  /* istanbul ignore next */
  apply(receiver, self, args) {
    throw "'Behavior' is abstract.";
  }

});
module.exports = exports = Behavior;

Behavior.prototype.addResponse = function (decl) {
  const self = this;
  /* istanbul ignore next */

  _core.dogma.expect("decl", decl);

  {
    let value;
    let operation;

    if (_core.dogma.includes(decl, "returns")) {
      value = decl.returns;
      operation = Operation.RETURN;
    } else if (_core.dogma.includes(decl, "raises")) {
      value = decl.raises;
      operation = Operation.THROW;
    } else if (_core.dogma.includes(decl, "resolves")) {
      value = decl.resolves;
      operation = Operation.RESOLVE;
    } else if (_core.dogma.includes(decl, "rejects")) {
      value = decl.rejects;
      operation = Operation.REJECT;
    } else if (_core.dogma.includes(decl, "invokes")) {
      value = _core.dogma.expect('decl.invokes', decl.invokes, _core.func);
      operation = Operation.CALL;
    } else {
      _core.dogma.raise(TypeError("returns, raises, resolves or rejects must be set."));
    }

    const resp = Response({
      'args': decl.args,
      'value': value,
      'operation': operation
    });

    if (_core.dogma.includes(decl, "default")) {
      this.defaultResponse = resp;
    } else {
      this.responses.push(resp);
    }
  }
  return this;
};
/* istanbul ignore next */


Behavior.prototype.getResponse = function () {
  (0, _core.abstract)();
};