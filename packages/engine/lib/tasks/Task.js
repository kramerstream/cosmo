"use strict";

var _core = require("@dogmalang/core");

const DurationSpec = _core.dogma.use(require("../DurationSpec"));

const IDurationSpec = _core.dogma.use(require("../IDurationSpec"));

const Engine = _core.dogma.use(require("../engines/Engine"));

const $Task = class Task {
  constructor(_) {
    /* istanbul ignore next */
    if (_ == null) _ = {};
    (0, _core.expect)('engine', _['engine'], Engine);
    Object.defineProperty(this, 'engine', {
      value: (0, _core.coalesce)(_['engine'], null),
      writable: false,
      enumerable: true
    });
    Object.defineProperty(this, 'parent', {
      value: (0, _core.coalesce)(_['parent'], null),
      writable: false,
      enumerable: true
    });
    (0, _core.expect)('id', _['id'], _core.text);
    Object.defineProperty(this, 'id', {
      value: (0, _core.coalesce)(_['id'], null),
      writable: false,
      enumerable: true
    });
    /* istanbul ignore next */

    if (_['title'] != null) (0, _core.expect)('title', _['title'], _core.text);
    Object.defineProperty(this, '_title', {
      value: (0, _core.coalesce)(_['title'], null),
      writable: true,
      enumerable: false
    });
    /* istanbul ignore next */

    if (_['tags'] != null) (0, _core.expect)('tags', _['tags'], _core.set);
    Object.defineProperty(this, 'tags', {
      value: (0, _core.coalesce)(_['tags'], (0, _core.set)()),
      writable: false,
      enumerable: true
    });
    /* istanbul ignore next */

    if (_['skippable'] != null) (0, _core.expect)('skippable', _['skippable'], _core.bool);
    Object.defineProperty(this, '_skippable', {
      value: (0, _core.coalesce)(_['skippable'], true),
      writable: true,
      enumerable: false
    });
    /* istanbul ignore next */

    if (_['args'] != null) (0, _core.expect)('args', _['args'], _core.list);
    Object.defineProperty(this, 'args', {
      value: (0, _core.coalesce)(_['args'], null),
      writable: false,
      enumerable: true
    });
    Object.defineProperty(this, 'durationSpec', {
      value: _core.dogma.expect('durationSpec', this.engine.durationSpec, DurationSpec),
      writable: true,
      enumerable: true
    });
    /* istanbul ignore next */

    if (this._pvt_cd12d65cb5f86bb7ec9acd6a0cae7231___init__ instanceof Function) this._pvt_cd12d65cb5f86bb7ec9acd6a0cae7231___init__(_);
    /* istanbul ignore next */

    if (this._pvt_cd12d65cb5f86bb7ec9acd6a0cae7231___post__ instanceof Function) this._pvt_cd12d65cb5f86bb7ec9acd6a0cae7231___post__();
    /* istanbul ignore next */

    if (this._pvt_cd12d65cb5f86bb7ec9acd6a0cae7231___validate__ instanceof Function) this._pvt_cd12d65cb5f86bb7ec9acd6a0cae7231___validate__();
  }

};
const Task = new Proxy($Task, {
  /* istanbul ignore next */
  apply(receiver, self, args) {
    throw "'Task' is abstract.";
  }

});
module.exports = exports = Task;
Object.defineProperty(Task.prototype, "title", {
  enum: true,
  get: function () {
    const self = this;
    const {
      engine,
      id
    } = self;
    {
      var _this$_title;

      return (_this$_title = this._title) !== null && _this$_title !== void 0 ? _this$_title : id;
    }
  }
});
Object.defineProperty(Task.prototype, "skippable", {
  enum: true,
  get: function () {
    const self = this;
    const {
      engine,
      id
    } = self;
    {
      return this._skippable;
    }
  }
});

Task.prototype.skip = function (skippable) {
  const self = this;
  const {
    engine,
    id
  } = self;
  /* istanbul ignore next */

  if (skippable != null) _core.dogma.expect("skippable", skippable, _core.bool);
  {
    if (_core.dogma.overload(Array.from(arguments), [])) {
      this._skippable = true;
    } else {
      _core.dogma.update(this, {
        name: "skippable",
        visib: ":",
        assign: "=",
        value: skippable
      });
    }
  }
  return this;
};

Task.prototype.only = function () {
  const self = this;
  const {
    engine,
    id
  } = self;
  {
    this.tags.add("only");
  }
  return this;
};

Task.prototype.callWith = function (args) {
  const self = this;
  const {
    engine,
    id
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("args", args, _core.list);

  {
    return engine.runTask(task, args);
  }
};

Task.prototype.duration = function (spec) {
  const self = this;
  const {
    engine,
    id
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("spec", spec, [IDurationSpec, _core.num]);

  {
    this.fdurationSpec = _core.dogma.overload(Array.from(arguments), [_core.dogma.OverloadParam({
      kind: 'm',
      type: _core.num
    })]) ? DurationSpec({
      'fast': spec / 2,
      'normal': spec,
      'slow': spec * 2
    }) : DurationSpec(spec);
  }
  return this;
};

Task.prototype.hasTag = function (tags) {
  const self = this;
  const {
    engine,
    id
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("tags", tags, _core.dogma.TypeDef({
    name: 'inline',
    types: [_core.text],
    min: 0,
    max: null
  }));

  {
    return this.hasOwnTag(tags);
  }
};

Task.prototype.hasOwnTag = function (tags) {
  const self = this;
  const {
    engine,
    id
  } = self;
  let yep = false;
  /* istanbul ignore next */

  _core.dogma.expect("tags", tags, _core.dogma.TypeDef({
    name: 'inline',
    types: [_core.text],
    min: 0,
    max: null
  }));

  {
    for (const tag of tags) {
      if (yep = _core.dogma.includes(this.tags, tag)) {
        break;
      }
    }
  }
  return yep;
};