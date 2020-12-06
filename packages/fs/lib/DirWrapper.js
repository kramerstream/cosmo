"use strict";

var _core = require("@dogmalang/core");

const path = _core.dogma.use(require("@dogmalang/path"));

const fs = _core.dogma.use(require("@dogmalang/fs.sync"));

const $DirWrapper = class DirWrapper {
  constructor(_) {
    /* istanbul ignore next */
    if (_ == null) _ = {};
    (0, _core.expect)('dirPath', _['dirPath'], _core.text);
    Object.defineProperty(this, 'dirPath', {
      value: (0, _core.coalesce)(_['dirPath'], null),
      writable: false,
      enumerable: false
    });
    /* istanbul ignore next */

    if (this._pvt_818f3c76e1a7eb01165527300a9aecda___init__ instanceof Function) this._pvt_818f3c76e1a7eb01165527300a9aecda___init__(_);
    /* istanbul ignore next */

    if (this._pvt_818f3c76e1a7eb01165527300a9aecda___post__ instanceof Function) this._pvt_818f3c76e1a7eb01165527300a9aecda___post__();
    /* istanbul ignore next */

    if (this._pvt_818f3c76e1a7eb01165527300a9aecda___validate__ instanceof Function) this._pvt_818f3c76e1a7eb01165527300a9aecda___validate__();
  }

};
const DirWrapper = new Proxy($DirWrapper, {
  apply(receiver, self, args) {
    return new $DirWrapper(...args);
  }

});
module.exports = exports = DirWrapper;

DirWrapper.prototype.toExist = function () {
  const self = this;
  const {
    dirPath
  } = self;
  {
    if (!fs.isDir(dirPath)) {
      _core.dogma.raise(`dir '${dirPath}' should exist.`);
    }
  }
  return this;
};

DirWrapper.prototype.notToExist = function () {
  const self = this;
  const {
    dirPath
  } = self;
  {
    if (fs.isDir(dirPath)) {
      _core.dogma.raise(`dir '${dirPath}' should not exist.`);
    }
  }
  return this;
};

DirWrapper.prototype.toHave = function (entries) {
  const self = this;
  const {
    dirPath
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("entries", entries, [_core.list, _core.text]);

  if (!_core.dogma.is(entries, _core.list)) entries = (0, _core.list)(entries);
  {
    this.toExist();

    for (const e of entries) {
      if (!fs.exists(path.join(dirPath, e))) {
        _core.dogma.raise(`dir '${dirPath}' should have entry '${e}'.`);
      }
    }
  }
  return this;
};

DirWrapper.prototype.notToHave = function (entries) {
  const self = this;
  const {
    dirPath
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("entries", entries, [_core.list, _core.text]);

  if (!_core.dogma.is(entries, _core.list)) entries = (0, _core.list)(entries);
  {
    this.toExist();

    for (const e of entries) {
      if (fs.exists(path.join(dirPath, e))) {
        _core.dogma.raise(`dir '${dirPath}' should not have entry '${e}'.`);
      }
    }
  }
  return this;
};