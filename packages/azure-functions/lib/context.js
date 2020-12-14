"use strict";

var _core = require("@dogmalang/core");

const path = _core.dogma.use(require("@dogmalang/path"));

const moment = _core.dogma.use(require("moment"));

const {
  v4: uuid
} = _core.dogma.use(require("uuid"));

const {
  mock
} = _core.dogma.use(require("@cosmokramer/doubles"));

const timerMock = _core.dogma.use(require("./timer"));

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
    functionDirectory: {
      optional: false,
      type: _core.text
    },
    functionName: {
      optional: true,
      type: _core.text
    }
  }));

  let {
    functionDirectory,
    functionName
  } = opts;
  {
    const invocationId = uuid();

    const bindingDefinitions = _core.dogma.use(require(path.join(functionDirectory, "function.json"))).bindings;

    const trigger = _core.dogma.getItem(bindingDefinitions, 0);

    functionName = (0, _core.coalesce)(functionName, path.name(functionDirectory));
    {
      const _ = trigger.type;

      switch (_) {
        case "httpTrigger":
          {
            m = createHttpTriggerContext(_core.dogma.clone(opts, {
              "functionName": functionName,
              "invocationId": invocationId,
              "bindingDefinitions": bindingDefinitions
            }, {}, [], []));
          }
          ;
          /*istanbul ignore next*/

          break;

        case "timerTrigger":
          {
            m = createTimerTriggerContext(_core.dogma.clone(opts, {
              "functionName": functionName,
              "invocationId": invocationId,
              "bindingDefinitions": bindingDefinitions
            }, {}, [], []));
          }
          ;
          /*istanbul ignore next*/

          break;
      }
    }
  }
  return m;
}

module.exports = exports = context;

function createHttpTriggerContext(opts) {
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
    },
    bindings: {
      optional: true,
      type: _core.map
    },
    bindingDefinitions: {
      optional: false,
      type: _core.dogma.TypeDef({
        name: 'inline',
        types: [_core.map],
        min: 0,
        max: null
      })
    },
    req: {
      optional: true,
      type: null
    }
  }));

  let {
    invocationId,
    functionName,
    functionDirectory,
    bindings,
    bindingDefinitions,
    req
  } = opts;
  {
    const trigger = _core.dogma.getItem(bindingDefinitions, 0);

    if (!bindings && req) {
      bindings = (0, _core.coalesce)(bindings, {
        [trigger.name]: {
          ["method"]: req.method,
          ["url"]: req.url,
          ["originalUrl"]: req.originalUrl,
          ["headeres"]: req.headers,
          ["query"]: req.query,
          ["params"]: req.params,
          ["body"]: req.body,
          ["rawBody"]: req.rawBody
        }
      });
    }

    return mock(Object.assign({}, {
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
}

function createTimerTriggerContext(opts) {
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
    },
    bindingDefinitions: {
      optional: false,
      type: _core.dogma.TypeDef({
        name: 'inline',
        types: [_core.map],
        min: 0,
        max: null
      })
    },
    bindings: {
      optional: true,
      type: _core.map
    },
    timer: {
      optional: true,
      type: null
    }
  }));

  let {
    invocationId,
    functionName,
    functionDirectory,
    bindingDefinitions,
    bindings,
    timer
  } = opts;
  {
    const trigger = _core.dogma.getItem(bindingDefinitions, 0);

    bindings = (0, _core.coalesce)(bindings, {});

    _core.dogma.setItem("=", bindings, trigger.name, _core.dogma.is(timer, _core.map) ? timer : timerMock({
      'schedule': trigger.schedule
    }));

    return mock({
      ["invocationId"]: field.text(invocationId),
      ["executionContext"]: executionContext({
        'invocationId': invocationId,
        'functionName': functionName,
        'functionDirectory': functionDirectory
      }),
      ["traceContext"]: traceContext(),
      ["bindings"]: bindings,
      ["bindingData"]: field.map(),
      ["bindingDefinitions"]: field.list(bindingDefinitions),
      ["log"]: logger(),
      ["done"]: fun()
    });
  }
}