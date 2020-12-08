"use strict";

var _core = require("@dogmalang/core");

const $Double = class Double {
  constructor(_) {
    /* istanbul ignore next */
    if (_ == null) _ = {};
    /* istanbul ignore next */

    if (this._pvt_cb9cf777cf7912870cb7631893f35053___init__ instanceof Function) this._pvt_cb9cf777cf7912870cb7631893f35053___init__(_);
    /* istanbul ignore next */

    if (this._pvt_cb9cf777cf7912870cb7631893f35053___post__ instanceof Function) this._pvt_cb9cf777cf7912870cb7631893f35053___post__();
    /* istanbul ignore next */

    if (this._pvt_cb9cf777cf7912870cb7631893f35053___validate__ instanceof Function) this._pvt_cb9cf777cf7912870cb7631893f35053___validate__();
  }

};
const Double = new Proxy($Double, {
  /* istanbul ignore next */
  apply(receiver, self, args) {
    throw "'Double' is abstract.";
  }

});
module.exports = exports = Double;