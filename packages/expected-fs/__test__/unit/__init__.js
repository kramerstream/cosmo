"use strict";

var _core = require("@dogmalang/core");

const plugin = _core.dogma.use(require("../.."));

const expected = _core.dogma.use(require("@kramertest/cosmo-expected"));

expected.plugin(plugin);