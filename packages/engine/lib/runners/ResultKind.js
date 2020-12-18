"use strict";

var _core = require("@dogmalang/core");

class ResultKind {
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

module.exports = exports = ResultKind;
Object.defineProperty(ResultKind, "OK", {
  value: new ResultKind("OK", 1),
  enum: true
});
Object.defineProperty(ResultKind, "FAILED", {
  value: new ResultKind("FAILED", 2),
  enum: true
});
Object.defineProperty(ResultKind, "SKIPPED", {
  value: new ResultKind("SKIPPED", 3),
  enum: true
});