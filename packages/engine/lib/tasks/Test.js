"use strict";

var _core = require("@dogmalang/core");

const CompositeTask = _core.dogma.use(require("./CompositeTask"));

const TestAct = _core.dogma.use(require("./TestAct"));

const $Test = class Test extends CompositeTask {
  constructor(_) {
    super(_);
    /* istanbul ignore next */

    if (_ == null) _ = {};
    Object.defineProperty(this, 'act', {
      value: TestAct({
        'engine': _.engine,
        'parent': this,
        'id': "test action",
        'durationSpec': this.durationSpec
      }),
      writable: false,
      enumerable: true
    });
    /* istanbul ignore next */

    if (this._pvt_431773849a42eeb56bd1550d87cb44eb___init__ instanceof Function) this._pvt_431773849a42eeb56bd1550d87cb44eb___init__(_);
    /* istanbul ignore next */

    if (this._pvt_431773849a42eeb56bd1550d87cb44eb___post__ instanceof Function) this._pvt_431773849a42eeb56bd1550d87cb44eb___post__();
    /* istanbul ignore next */

    if (this._pvt_431773849a42eeb56bd1550d87cb44eb___validate__ instanceof Function) this._pvt_431773849a42eeb56bd1550d87cb44eb___validate__();
  }

};
const Test = new Proxy($Test, {
  apply(receiver, self, args) {
    return new $Test(...args);
  }

});
module.exports = exports = Test;