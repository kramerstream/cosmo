"use strict";

var _core = require("@dogmalang/core");

const Monitor = _core.dogma.use(require("./Monitor"));

const Result = _core.dogma.use(require("./Result"));

const Log = _core.dogma.use(require("./log/Log"));

const AccessKind = _core.dogma.use(require("./log/AccessKind"));

const monitors = [];

function monitor(object, opts) {
  /* istanbul ignore next */
  _core.dogma.expect("object", object);
  /* istanbul ignore next */


  if (opts != null) _core.dogma.expect("opts", opts, _core.map);
  {
    return createMonitor(object, _core.dogma.clone(opts, {}, {}, ["log"], []));
  }
}

module.exports = exports = monitor;

function createMonitor(object, opts) {
  let p;
  /* istanbul ignore next */

  _core.dogma.expect("object", object);
  /* istanbul ignore next */


  _core.dogma.expect("opts", opts, _core.map);

  {
    var _opts$log, _opts$members;

    const m = Monitor({
      'target': object,
      'log': (_opts$log = opts.log) !== null && _opts$log !== void 0 ? _opts$log : Log(),
      'members': (_opts$members = opts.members) !== null && _opts$members !== void 0 ? _opts$members : []
    });
    p = (0, _core.proxy)(object, {
      ["apply"]: (target, thisArg, args) => {
        /* istanbul ignore next */
        _core.dogma.expect("target", target);
        /* istanbul ignore next */


        _core.dogma.expect("args", args);

        {
          let result;
          let value;

          try {
            value = target(...args);
            result = Result.RETURN;
          } catch (e) {
            value = e;
            result = Result.THROW;
          }

          m.saveCall({
            'target': target,
            'args': args,
            'result': result,
            'value': value
          });

          if (_core.dogma.enumEq(result, "THROW")) {
            _core.dogma.raise(value);
          }

          return value;
        }
      },
      ["get"]: (target, member, receiver) => {
        /* istanbul ignore next */
        _core.dogma.expect("target", target);
        /* istanbul ignore next */


        _core.dogma.expect("member", member);
        /* istanbul ignore next */


        _core.dogma.expect("receiver", receiver);

        {
          if (!m.hasToBeMonitorized(member)) {
            return _core.dogma.getItem(target, member);
          }

          let result;
          let value;

          try {
            value = _core.dogma.getItem(target, member);
            result = Result.RETURN;
          } catch (e) {
            value = e;
            result = Result.THROW;
          }

          if (!opts.onlyCalls) {
            m.saveAccess({
              'target': target,
              'member': member,
              'kind': AccessKind.GET,
              'result': result,
              'value': value
            });
          }

          if (_core.dogma.enumEq(result, "THROW")) {
            _core.dogma.raise(value);
          } else if (_core.dogma.is(value, _core.func)) {
            return createMonitor(value, {
              'log': m.log
            });
          } else {
            return value;
          }
        }
      },
      ["set"]: (target, member, value, receiver) => {
        /* istanbul ignore next */
        _core.dogma.expect("target", target);
        /* istanbul ignore next */


        _core.dogma.expect("member", member);
        /* istanbul ignore next */


        _core.dogma.expect("value", value);
        /* istanbul ignore next */


        _core.dogma.expect("receiver", receiver);

        {
          if (!m.hasToBeMonitorized(member) || opts.onlyCalls) {
            return _core.dogma.setItem("=", target, member, value);
          }

          let result;

          try {
            _core.dogma.setItem("=", target, member, value);

            result = Result.RETURN;
          } catch (e) {
            value = e;
            result = Result.THROW;
          }

          m.saveAccess({
            'target': target,
            'member': member,
            'kind': AccessKind.SET,
            'result': result,
            'value': value
          });

          if (_core.dogma.enumEq(result, "THROW")) {
            _core.dogma.raise(value);
          } else {
            return value;
          }
        }
      }
    });
    monitors.push({
      'proxy': p,
      'monitor': m
    });
  }
  return p;
}

Object.defineProperty(monitor, "monitors", {
  ["enumerable"]: false,
  ["get"]: () => {
    {
      return monitors;
    }
  }
});

monitor.clearAll = () => {
  {
    monitors.splice(0);
  }
};

monitor.clear = p => {
  let deleted = false;
  /* istanbul ignore next */

  _core.dogma.expect("p", p);

  {
    const i = monitors.findIndex(i => {
      /* istanbul ignore next */
      _core.dogma.expect("i", i);

      {
        return i.proxy === p;
      }
    });

    if (i >= 0) {
      monitors.splice(i, 1);
      deleted = true;
    }
  }
  return deleted;
};

monitor.log = p => {
  let log;
  /* istanbul ignore next */

  _core.dogma.expect("p", p);

  {
    for (const item of monitors) {
      if (item.proxy === p) {
        log = item.monitor.log;
        break;
      }
    }
  }
  return log;
};