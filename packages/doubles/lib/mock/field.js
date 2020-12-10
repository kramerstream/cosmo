"use strict";

var _core = require("@dogmalang/core");

const uuid = _core.dogma.use(require("uuid"));

const PositionBasedBehavior = _core.dogma.use(require("./behavior/PositionBasedBehavior"));

function field(def) {
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

module.exports = exports = field;

field.uuid = () => {
  let behavior;
  {
    behavior = PositionBasedBehavior();
    behavior.addResponse({
      'default': true,
      'invokes': uuid.v4
    });
  }
  return behavior;
};

field.text = returns => {
  let behavior;
  /* istanbul ignore next */

  _core.dogma.expect("returns", returns, _core.text);

  {
    behavior = PositionBasedBehavior();
    behavior.addResponse({
      'default': true,
      'returns': returns
    });
  }
  return behavior;
};

field.list = returns => {
  let behavior;
  /* istanbul ignore next */

  if (returns != null) _core.dogma.expect("returns", returns, _core.list);
  {
    var _dogma$copy;

    behavior = PositionBasedBehavior();
    behavior.addResponse({
      'default': true,
      'returns': (_dogma$copy = _core.dogma.copy(returns)) !== null && _dogma$copy !== void 0 ? _dogma$copy : []
    });
  }
  return behavior;
};

field.map = returns => {
  let behavior;
  /* istanbul ignore next */

  if (returns != null) _core.dogma.expect("returns", returns, _core.map);
  {
    var _dogma$copy2;

    behavior = PositionBasedBehavior();
    behavior.addResponse({
      'default': true,
      'returns': (_dogma$copy2 = _core.dogma.copy(returns)) !== null && _dogma$copy2 !== void 0 ? _dogma$copy2 : {}
    });
  }
  return behavior;
};

field.any = returns => {
  let behavior;
  /* istanbul ignore next */

  _core.dogma.expect("returns", returns, _core.any);

  {
    behavior = PositionBasedBehavior();
    behavior.addResponse({
      'default': true,
      'returns': _core.dogma.copy(returns)
    });
  }
  return behavior;
};