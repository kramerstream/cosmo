"use strict";

var _core = require("@dogmalang/core");

const DurationSpec = _core.dogma.use(require("../DurationSpec"));

const $Engine = class Engine {
  constructor(_) {
    /* istanbul ignore next */
    if (_ == null) _ = {};
    (0, _core.expect)('name', _['name'], _core.text);
    Object.defineProperty(this, 'name', {
      value: (0, _core.coalesce)(_['name'], null),
      writable: false,
      enumerable: true
    });
    (0, _core.expect)('durationSpec', _['durationSpec'], DurationSpec);
    Object.defineProperty(this, 'durationSpec', {
      value: (0, _core.coalesce)(_['durationSpec'], null),
      writable: false,
      enumerable: true
    });
    /* istanbul ignore next */

    if (this._pvt_312ecd3bdf8fd2dc7de9f66e1ab3333e___init__ instanceof Function) this._pvt_312ecd3bdf8fd2dc7de9f66e1ab3333e___init__(_);
    /* istanbul ignore next */

    if (this._pvt_312ecd3bdf8fd2dc7de9f66e1ab3333e___post__ instanceof Function) this._pvt_312ecd3bdf8fd2dc7de9f66e1ab3333e___post__();
    /* istanbul ignore next */

    if (this._pvt_312ecd3bdf8fd2dc7de9f66e1ab3333e___validate__ instanceof Function) this._pvt_312ecd3bdf8fd2dc7de9f66e1ab3333e___validate__();
  }

};
const Engine = new Proxy($Engine, {
  /* istanbul ignore next */
  apply(receiver, self, args) {
    throw "'Engine' is abstract.";
  }

});
module.exports = exports = Engine;
/* istanbul ignore next */

Engine.prototype.runTask = function () {
  (0, _core.abstract)();
};