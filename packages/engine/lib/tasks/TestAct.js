"use strict";

var _core = require("@dogmalang/core");

const SimpleTask = _core.dogma.use(require("./SimpleTask"));

const $TestAct = class TestAct extends SimpleTask {
  constructor(_) {
    super(_);
    /* istanbul ignore next */

    if (_ == null) _ = {};
    /* istanbul ignore next */

    if (this._pvt_cbe53d7c5414c5d45c1581fd7a0af53c___init__ instanceof Function) this._pvt_cbe53d7c5414c5d45c1581fd7a0af53c___init__(_);
    /* istanbul ignore next */

    if (this._pvt_cbe53d7c5414c5d45c1581fd7a0af53c___post__ instanceof Function) this._pvt_cbe53d7c5414c5d45c1581fd7a0af53c___post__();
    /* istanbul ignore next */

    if (this._pvt_cbe53d7c5414c5d45c1581fd7a0af53c___validate__ instanceof Function) this._pvt_cbe53d7c5414c5d45c1581fd7a0af53c___validate__();
  }

};
const TestAct = new Proxy($TestAct, {
  apply(receiver, self, args) {
    return new $TestAct(...args);
  }

});
module.exports = exports = TestAct;