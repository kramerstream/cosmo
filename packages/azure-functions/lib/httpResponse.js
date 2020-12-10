"use strict";

var _core = require("@dogmalang/core");

const {
  mock
} = _core.dogma.use(require("@cosmokramer/doubles"));

const {
  fun,
  field
} = mock;

function httpResponse() {
  {
    return mock({
      ["headers"]: field.map(),
      ["cookies"]: field.map()
    });
  }
}

module.exports = exports = httpResponse;