"use strict";

var _core = require("@dogmalang/core");

const {
  mock
} = _core.dogma.use(require("@cosmokramer/doubles"));

const {
  fun
} = mock;

function logger() {
  {
    return fun({
      ["returns"]: null
    }, {
      ["error"]: fun(),
      ["warn"]: fun(),
      ["info"]: fun(),
      ["verbose"]: fun()
    });
  }
}

module.exports = exports = logger;