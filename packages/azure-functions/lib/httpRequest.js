"use strict";

var _core = require("@dogmalang/core");

const {
  mock
} = _core.dogma.use(require("@cosmokramer/doubles"));

const {
  fun,
  field
} = mock;

function httpRequest(opts) {
  /* istanbul ignore next */
  _core.dogma.expect("opts", opts, _core.dogma.intf("inline", {
    method: {
      optional: false,
      type: _core.text
    },
    uri: {
      optional: false,
      type: _core.text
    },
    originalUrl: {
      optional: false,
      type: _core.text
    },
    headers: {
      optional: true,
      type: _core.map
    },
    query: {
      optional: true,
      type: _core.map
    },
    params: {
      optional: true,
      type: _core.map
    }
  }));

  let {
    method,
    uri,
    originalUrl,
    headers,
    query,
    params
  } = opts;
  {
    return mock(Object.assign({}, {
      ["method"]: field.text(method),
      ["originalUrl"]: field.text(originalUrl),
      ["uri"]: field.text(uri),
      ["headers"]: field.map(headers),
      ["query"]: field.map(query),
      ["params"]: field.map(params)
    }, opts.body ? {
      ["body"]: field.any(opts.body)
    } : {}, opts.rawBody ? {
      ["rawBody"]: field.any(opts.rawBody)
    } : {}));
  }
}

module.exports = exports = httpRequest;