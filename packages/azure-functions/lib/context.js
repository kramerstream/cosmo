"use strict";

var _core = require("@dogmalang/core");

const {
  mock
} = _core.dogma.use(require("@cosmokramer/doubles"));

const executionContext = _core.dogma.use(require("./executionContext"));

const traceContext = _core.dogma.use(require("./traceContext"));

const logger = _core.dogma.use(require("./logger"));

const {
  fun,
  field
} = mock;

function context(opts) {
  /* istanbul ignore next */
  _core.dogma.expect("opts", opts, _core.dogma.intf("inline", {
    functionName: {
      optional: false,
      type: _core.text
    },
    functionDirectory: {
      optional: false,
      type: _core.text
    }
  }));

  {
    return mock(Object.assign({}, {
      ["invocationId"]: field.uuid(),
      ["executionContext"]: executionContext(opts),
      ["bindings"]: field.map(),
      ["bindingData"]: field.map(),
      ["traceContext"]: traceContext(),
      ["bidingDefinitions"]: field.list(),
      ["log"]: logger(),
      ["done"]: fun()
    }, opts.req ? {
      ["req"]: opts.req
    } : {}, opts.res ? {
      ["res"]: opts.res
    } : {}));
  }
}

module.exports = exports = context;