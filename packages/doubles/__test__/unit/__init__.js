"use strict";

var _core = require("@dogmalang/core");

const {
  monitor
} = _core.dogma.use(require("../.."));

repo("Clear monitors created", () => {
  {
    monitor.clearAll();
  }
});