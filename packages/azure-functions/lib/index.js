"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.httpResponse = exports.httpRequest = exports.context = void 0;

var _core = require("@dogmalang/core");

const context = _core.dogma.use(require("./context"));

exports.context = context;

const httpRequest = _core.dogma.use(require("./httpRequest"));

exports.httpRequest = httpRequest;

const httpResponse = _core.dogma.use(require("./httpResponse"));

exports.httpResponse = httpResponse;