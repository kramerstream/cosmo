"use strict";

var _core = require("@dogmalang/core");

const Double = _core.dogma.use(require("../Double"));

const Behavior = _core.dogma.use(require("./behavior/Behavior"));

const Response = _core.dogma.use(require("./behavior/Response"));

const Operation = _core.dogma.use(require("./behavior/Operation"));

const $Mock = class Mock extends Double {
  constructor(_) {
    super(_);
    /* istanbul ignore next */

    if (_ == null) _ = {};
    Object.defineProperty(this, 'callBehavior', {
      value: (0, _core.coalesce)(_['callBehavior'], null),
      writable: false,
      enumerable: false
    });
    /* istanbul ignore next */

    if (_['members'] != null) (0, _core.expect)('members', _['members'], _core.map);
    Object.defineProperty(this, 'members', {
      value: (0, _core.coalesce)(_['members'], {}),
      writable: false,
      enumerable: false
    });
    /* istanbul ignore next */

    if (this._pvt_7fbcd2f8c6d5174f93a65908647966fe___init__ instanceof Function) this._pvt_7fbcd2f8c6d5174f93a65908647966fe___init__(_);
    /* istanbul ignore next */

    if (this._pvt_7fbcd2f8c6d5174f93a65908647966fe___post__ instanceof Function) this._pvt_7fbcd2f8c6d5174f93a65908647966fe___post__();
    /* istanbul ignore next */

    if (this._pvt_7fbcd2f8c6d5174f93a65908647966fe___validate__ instanceof Function) this._pvt_7fbcd2f8c6d5174f93a65908647966fe___validate__();
  }

};
const Mock = new Proxy($Mock, {
  apply(receiver, self, args) {
    return new $Mock(...args);
  }

});
module.exports = exports = Mock;

Mock.prototype.processCall = function (args) {
  const self = this;
  const {
    callBehavior,
    members
  } = self;
  let result;
  /* istanbul ignore next */

  _core.dogma.expect("args", args, _core.list);

  {
    {
      const resp = callBehavior.getResponse(args);

      if (resp) {
        result = this.handleResponse(resp);
      } else {
        _core.dogma.raise(Error("No response available for mock."));
      }
    }
  }
  return result;
};

Mock.prototype.processGet = function (member) {
  const self = this;
  const {
    callBehavior,
    members
  } = self;
  let result;
  /* istanbul ignore next */

  _core.dogma.expect("member", member);

  {
    if (_core.dogma.is(result = _core.dogma.getItem(members, member), Behavior)) {
      result = this.handleResponse(result.getResponse([]));
    }
  }
  return result;
};

Mock.prototype.handleResponse = function (resp) {
  const self = this;
  const {
    callBehavior,
    members
  } = self;
  let result;
  /* istanbul ignore next */

  _core.dogma.expect("resp", resp, Response);

  {
    {
      const _ = resp.operation;

      switch (_) {
        case Operation.RETURN:
          {
            result = resp.value;
          }
          ;
          /*istanbul ignore next*/

          break;

        case Operation.THROW:
          {
            _core.dogma.raise(resp.value);
          }
          ;
          /*istanbul ignore next*/

          break;

        case Operation.RESOLVE:
          {
            result = _core.promise.resolve(resp.value);
          }
          ;
          /*istanbul ignore next*/

          break;

        case Operation.REJECT:
          {
            result = _core.promise.reject(resp.value);
          }
          ;
          /*istanbul ignore next*/

          break;

        case Operation.CALL:
          {
            result = resp.value();
          }
          ;
          /*istanbul ignore next*/

          break;
      }
    }
  }
  return result;
};