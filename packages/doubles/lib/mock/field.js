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

field.list = () => {
  let behavior;
  {
    behavior = PositionBasedBehavior();
    behavior.addResponse({
      'default': true,
      'invokes': () => {
        {
          return [];
        }
      }
    });
  }
  return behavior;
};

field.map = () => {
  let behavior;
  {
    behavior = PositionBasedBehavior();
    behavior.addResponse({
      'default': true,
      'invokes': () => {
        {
          return {};
        }
      }
    });
  }
  return behavior;
};