"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SerialEngine = void 0;

var _core = require("@dogmalang/core");

const SerialEngine = _core.dogma.use(require("./engines/SerialEngine"));

exports.SerialEngine = SerialEngine;