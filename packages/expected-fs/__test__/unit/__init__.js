"use strict";

var _core = require("@dogmalang/core");

const plugin = _core.dogma.use(require("../.."));

const expected = _core.dogma.use(require("@cosmokramer/expected"));

expected.plugin(plugin);