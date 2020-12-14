"use strict";

var _core = require("@dogmalang/core");

const path = _core.dogma.use(require("@dogmalang/path"));

const {
  v4: uuid
} = _core.dogma.use(require("uuid"));

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
  let m;
  /* istanbul ignore next */

  _core.dogma.expect("opts", opts, _core.dogma.intf("inline", {
    functionName: {
      optional: false,
      type: _core.text
    },
    functionDirectory: {
      optional: false,
      type: _core.text
    },
    bindings: {
      optional: true,
      type: _core.map
    },
    req: {
      optional: true,
      type: null
    }
  }));

  let {
    functionName,
    functionDirectory,
    bindings,
    req
  } = opts;
  {
    const invocationId = uuid();

    const bindingDefinitions = _core.dogma.use(require(path.join(functionDirectory, "function.json"))).bindings;

    if (!bindings && req) {
      bindings = {
        ["req"]: {
          ["method"]: req.method,
          ["url"]: req.url,
          ["originalUrl"]: req.originalUrl,
          ["headeres"]: req.headers,
          ["query"]: req.query,
          ["params"]: req.params,
          ["body"]: req.body,
          ["rawBody"]: req.rawBody
        }
      };
    }

    m = mock(Object.assign({}, {
      ["invocationId"]: field.text(invocationId),
      ["executionContext"]: executionContext({
        'invocationId': invocationId,
        'functionName': functionName,
        'functionDirectory': functionDirectory
      }),
      ["traceContext"]: traceContext(),
      ["bindings"]: field.map(bindings),
      ["bindingData"]: field.map(),
      ["bindingDefinitions"]: field.list(bindingDefinitions),
      ["log"]: logger(),
      ["done"]: fun()
    }, req ? {
      ["req"]: req
    } : {}, opts.res ? {
      ["res"]: opts.res
    } : {}));
  }
  return m;
}

module.exports = exports = context;