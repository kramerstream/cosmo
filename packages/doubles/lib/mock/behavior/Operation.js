"use strict";

var _core = require("@dogmalang/core");

class Operation {
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

module.exports = exports = Operation;
Object.defineProperty(Operation, "RETURN", {
  value: new Operation("RETURN", 1),
  enum: true
});
Object.defineProperty(Operation, "THROW", {
  value: new Operation("THROW", 2),
  enum: true
});
Object.defineProperty(Operation, "RESOLVE", {
  value: new Operation("RESOLVE", 3),
  enum: true
});
Object.defineProperty(Operation, "REJECT", {
  value: new Operation("REJECT", 4),
  enum: true
});
Object.defineProperty(Operation, "CALL", {
  value: new Operation("CALL", 5),
  enum: true
});