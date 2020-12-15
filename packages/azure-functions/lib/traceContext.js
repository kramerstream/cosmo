"use strict";

var _core = require("@dogmalang/core");

const {
  mock
} = _core.dogma.use(require("@cosmokramer/doubles"));

const {
  field
} = mock;

function traceContext() {
  {
    return mock({
      ["traceparent"]: field.text(""),
      ["tracestate"]: field.text(""),
      ["attributes"]: field.map()
    });
  }
}

module.exports = exports = traceContext;