"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mock = exports.monitor = void 0;

var _core = require("@dogmalang/core");

const monitor = _core.dogma.use(require("./monitor"));

exports.monitor = monitor;

const mock = _core.dogma.use(require("./mock"));

exports.mock = mock;