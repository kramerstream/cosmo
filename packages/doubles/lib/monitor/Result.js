"use strict";

var _core = require("@dogmalang/core");

class Result {
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

module.exports = exports = Result;
Object.defineProperty(Result, "RETURN", {
  value: new Result("RETURN", 1),
  enum: true
});
Object.defineProperty(Result, "THROW", {
  value: new Result("THROW", 2),
  enum: true
});