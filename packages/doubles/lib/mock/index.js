"use strict";

var _core = require("@dogmalang/core");

const Mock = _core.dogma.use(require("./Mock"));

const Behavior = _core.dogma.use(require("./behavior/Behavior"));

const PositionBasedBehavior = _core.dogma.use(require("./behavior/PositionBasedBehavior"));

const ArgsBasedBehavior = _core.dogma.use(require("./behavior/ArgsBasedBehavior"));

function mock(members) {
  /* istanbul ignore next */
  _core.dogma.expect("members", members, _core.map);

  {
    return createObjectMock(members);
  }
}

module.exports = exports = mock;

mock.fun = (behavior, members) => {
  /* istanbul ignore next */
  _core.dogma.expect("behavior", behavior, [_core.list, _core.map]);
  /* istanbul ignore next */


  if (members != null) _core.dogma.expect("members", members, _core.map);
  {
    return createFunctionMock(behavior, members);
  }
};

mock.field = behavior => {
  /* istanbul ignore next */
  _core.dogma.expect("behavior", behavior);

  {
    return createFieldBehavior(behavior);
  }
};

function createMembers(def) {
  let members = {};
  /* istanbul ignore next */

  _core.dogma.expect("def", def, _core.map);

  {
    for (const [name, value] of Object.entries(def)) {
      {
        if (_core.dogma.isNot(value, [Behavior, _core.func])) {
          _core.dogma.raise(TypeError(`Member ${name} must be field mock or function mock.`));
        }

        _core.dogma.setItem("=", members, name, value);
      }
    }
  }
  return members;
}

function createObjectMock(def) {
  /* istanbul ignore next */
  _core.dogma.expect("def", def, _core.map);

  {
    const m = Mock({
      'members': createMembers(def)
    });
    return (0, _core.proxy)({}, {
      ["get"]: (target, member, receiver) => {
        /* istanbul ignore next */
        _core.dogma.expect("target", target);
        /* istanbul ignore next */


        _core.dogma.expect("member", member);
        /* istanbul ignore next */


        _core.dogma.expect("receiver", receiver);

        {
          return m.processGet(member);
        }
      }
    });
  }
}

function createFunctionMock(def, members) {
  /* istanbul ignore next */
  _core.dogma.expect("def", def, [_core.list, _core.map]);
  /* istanbul ignore next */


  if (members != null) _core.dogma.expect("members", members, _core.map);
  {
    if (members) {
      members = createMembers(members);
    }

    let behavior;

    if (_core.dogma.isNot(def, _core.list)) {
      behavior = PositionBasedBehavior();
      behavior.addResponse(_core.dogma.clone(def, {
        "default": true
      }, {}, [], []));
    } else {
      let Behavior = PositionBasedBehavior;
      {
        const _ = (0, _core.len)(def);

        switch (_) {
          case 0:
            {
              _core.dogma.nop();
            }
            ;
            /*istanbul ignore next*/

            break;

          case 1:
            {
              if (_core.dogma.includes(_core.dogma.getItem(def, 0), "args") && !_core.dogma.includes(_core.dogma.getItem(def, 0), "i")) {
                Behavior = ArgsBasedBehavior;
              }
            }
            ;
            /*istanbul ignore next*/

            break;

          default:
            {
              if (!_core.dogma.includes(!_core.dogma.includes(_core.dogma.getItem(def, 0), "default") ? _core.dogma.getItem(def, 0) : _core.dogma.getItem(def, 1), "i")) {
                Behavior = ArgsBasedBehavior;
              }
            }
        }
      }
      behavior = Behavior();

      for (const resp of def) {
        behavior.addResponse(resp);
      }
    }

    const mock = Mock({
      'callBehavior': behavior,
      'members': members
    });
    return (0, _core.proxy)(_core.dogma.nop(), {
      ["apply"]: (target, thisArg, args) => {
        /* istanbul ignore next */
        _core.dogma.expect("target", target);
        /* istanbul ignore next */


        _core.dogma.expect("args", args);

        {
          return mock.processCall(args);
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
          return mock.processGet(member);
        }
      }
    });
  }
}

function createFieldBehavior(def) {
  let behavior;
  /* istanbul ignore next */

  _core.dogma.expect("def", def, [_core.list, _core.map]);

  {
    behavior = PositionBasedBehavior();

    if (_core.dogma.isNot(def, _core.list)) {
      behavior.addResponse(_core.dogma.clone(def, {
        "default": true
      }, {}, [], []));
    } else {
      for (const resp of def) {
        behavior.addResponse(resp);
      }
    }
  }
  return behavior;
}