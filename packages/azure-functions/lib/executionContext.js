"use strict";

var _core = require("@dogmalang/core");

const {
  mock
} = _core.dogma.use(require("@cosmokramer/doubles"));

const {
  field
} = mock;

function executionContext(opts) {
  /* istanbul ignore next */
  _core.dogma.expect("opts", opts, _core.dogma.intf("inline", {
    invocationId: {
      optional: false,
      type: _core.text
    },
    functionName: {
      optional: false,
      type: _core.text
    },
    functionDirectory: {
      optional: false,
      type: _core.text
    }
  }));

  let {
    invocationId,
    functionName,
    functionDirectory
  } = opts;
  {
    return mock({
      ["invocationId"]: field.text(invocationId),
      ["functionName"]: field.text(functionName),
      ["functionDirectory"]: field.text(functionDirectory)
    });
  }
}

module.exports = exports = executionContext;