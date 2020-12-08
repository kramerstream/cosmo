"use strict";

var _core = require("@dogmalang/core");

class AccessKind {
  constructor(name, val) {
    Object.defineProperty(this, "name", {
      value: name,
      enum: true
    });
    Object.defineProperty(this, "value", {
      value: val,
      enum: true
    });
  }
  /* istanbul ignore next */


  toString() {
    return this.name;
  }

}

module.exports = exports = AccessKind;
Object.defineProperty(AccessKind, "GET", {
  value: new AccessKind("GET", 1),
  enum: true
});
Object.defineProperty(AccessKind, "SET", {
  value: new AccessKind("SET", 2),
  enum: true
});