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

const httpRequest = _core.dogma.use(require("./httpRequest"));

const httpResponse = _core.dogma.use(require("./httpResponse"));

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
    }
  }));

  let {
    functionDirectory
  } = opts;
  {
    const bindingDefinitions = _core.dogma.use(require(path.join(functionDirectory, "function.json"))).bindings;

    const trigger = _core.dogma.getItem(bindingDefinitions, 0);

    {
      const _ = trigger.type;

      switch (_) {
        case "httpTrigger":
          {
            m = createHttpTriggerContext(_core.dogma.clone(opts, {
              "trigger": trigger,
              "bindingDefinitions": bindingDefinitions
            }, {}, [], []));
          }
          ;
          /*istanbul ignore next*/

          break;

        case "timerTrigger":
          {
            m = createTimerTriggerContext(_core.dogma.clone(opts, {
              "trigger": trigger,
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
    trigger: {
      optional: false,
      type: _core.map
    },
    functionDirectory: {
      optional: false,
      type: _core.text
    },
    functionName: {
      optional: true,
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
    req: {
      optional: true,
      type: null
    },
    res: {
      optional: true,
      type: null
    }
  }));

  let {
    trigger,
    functionDirectory,
    functionName,
    bindingDefinitions,
    bindings,
    req,
    res
  } = opts;
  {
    var _functionName, _bindings, _req, _opts$originalUrl, _opts$headers, _opts$query, _opts$params, _res;

    functionName = (_functionName = functionName) !== null && _functionName !== void 0 ? _functionName : path.name(functionDirectory);
    bindings = (_bindings = bindings) !== null && _bindings !== void 0 ? _bindings : {};
    req = (_req = req) !== null && _req !== void 0 ? _req : httpRequest({
      'method': _core.dogma.getItem(trigger.methods, 0).toUpperCase(),
      'url': _core.dogma.expect('opts.url', opts.url, _core.text),
      'originalUrl': (_opts$originalUrl = opts.originalUrl) !== null && _opts$originalUrl !== void 0 ? _opts$originalUrl : opts.url,
      'headers': (_opts$headers = opts.headers) !== null && _opts$headers !== void 0 ? _opts$headers : {},
      'query': (_opts$query = opts.query) !== null && _opts$query !== void 0 ? _opts$query : {},
      'params': (_opts$params = opts.params) !== null && _opts$params !== void 0 ? _opts$params : {},
      'body': opts.body,
      'rawBody': opts.rawBody
    });
    res = (_res = res) !== null && _res !== void 0 ? _res : httpResponse();

    _core.dogma.setItem("=", bindings, trigger.name, req);

    const invocationId = uuid();
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
      ["done"]: fun(),
      ["req"]: req,
      ["res"]: res
    });
  }
}

function createTimerTriggerContext(opts) {
  /* istanbul ignore next */
  _core.dogma.expect("opts", opts, _core.dogma.intf("inline", {
    trigger: {
      optional: false,
      type: _core.map
    },
    functionDirectory: {
      optional: false,
      type: _core.text
    },
    functionName: {
      optional: true,
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
    trigger,
    functionDirectory,
    functionName,
    bindingDefinitions,
    bindings,
    timer
  } = opts;
  {
    var _functionName2, _bindings2, _timer;

    functionName = (_functionName2 = functionName) !== null && _functionName2 !== void 0 ? _functionName2 : path.name(functionDirectory);
    bindings = (_bindings2 = bindings) !== null && _bindings2 !== void 0 ? _bindings2 : {};
    timer = (_timer = timer) !== null && _timer !== void 0 ? _timer : timerMock({
      'schedule': trigger.schedule
    });

    _core.dogma.setItem("=", bindings, trigger.name, timer);

    const invocationId = uuid();
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