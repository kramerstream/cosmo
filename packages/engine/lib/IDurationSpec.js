"use strict";

var _core = require("@dogmalang/core");

const IDurationSpec = _core.dogma.intf('IDurationSpec', {
  fast: {
    optional: false,
    type: _core.num
  },
  normal: {
    optional: false,
    type: _core.num
  },
  slow: {
    optional: false,
    type: _core.num
  }
});

module.exports = exports = IDurationSpec;