"use strict";

var _core = require("@dogmalang/core");

const assert = _core.dogma.use(require("assert"));

const get = _core.dogma.use(require("lodash.get"));

const uuid = _core.dogma.use(require("uuid"));

const $ValueWrapper = class ValueWrapper {
  constructor(_) {
    /* istanbul ignore next */
    if (_ == null) _ = {};
    Object.defineProperty(this, 'value', {
      value: (0, _core.coalesce)(_['value'], null),
      writable: false,
      enumerable: false
    });
    Object.defineProperty(this, 'originalValue', {
      value: (0, _core.coalesce)(_['originalValue'], null),
      writable: false,
      enumerable: false
    });
    /* istanbul ignore next */

    if (_['fulfilled'] != null) (0, _core.expect)('fulfilled', _['fulfilled'], _core.bool);
    Object.defineProperty(this, 'fulfilled', {
      value: (0, _core.coalesce)(_['fulfilled'], null),
      writable: false,
      enumerable: false
    });
    /* istanbul ignore next */

    if (this._pvt_62bf16e296951a4d67bb347ede049a31___init__ instanceof Function) this._pvt_62bf16e296951a4d67bb347ede049a31___init__(_);
    /* istanbul ignore next */

    if (this._pvt_62bf16e296951a4d67bb347ede049a31___post__ instanceof Function) this._pvt_62bf16e296951a4d67bb347ede049a31___post__();
    /* istanbul ignore next */

    if (this._pvt_62bf16e296951a4d67bb347ede049a31___validate__ instanceof Function) this._pvt_62bf16e296951a4d67bb347ede049a31___validate__();
  }

};
const ValueWrapper = new Proxy($ValueWrapper, {
  apply(receiver, self, args) {
    return new $ValueWrapper(...args);
  }

});
module.exports = exports = ValueWrapper;
const Self = ValueWrapper;

ValueWrapper.prototype.it = function (i) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("i", i, _core.num);

  {
    return this.get(`[${i}]`);
  }
};

ValueWrapper.prototype.member = function (name) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("name", name, _core.text);

  {
    return this.get(name);
  }
};

ValueWrapper.prototype.get = function (exp) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("exp", exp, [_core.text, _core.num]);

  {
    const root = originalValue !== null && originalValue !== void 0 ? originalValue : value;
    return Self({
      'value': get(root, exp),
      'originalValue': root
    });
  }
};

ValueWrapper.prototype.toRaise = function (err) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    {
      const [ok, res] = _core.dogma.peval(() => {
        return value();
      });

      if (ok) {
        _core.dogma.raise("function should raise error.");
      } else if (err) {
        {
          const Type = err;

          if (_core.dogma.is(Type, _core.func)) {
            if (_core.dogma.isNot(res, Type)) {
              _core.dogma.raise(`'${value}' should raise of '${Type}'. Raised: '${res}'.`);
            }
          } else {
            if (!_core.dogma.getItem(_core.dogma.peval(() => {
              return assert.deepEqual(res, err);
            }), 0)) {
              _core.dogma.raise(`'${value}' should raise '${err}'. Raised: '${res}'.`);
            }
          }
        }
      }
    }
  }
  return this;
};

ValueWrapper.prototype.notToRaise = function (err) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    {
      const [ok, res] = _core.dogma.peval(() => {
        return value();
      });

      if (!ok) {
        if (!err) {
          _core.dogma.raise("function should not raise error.");
        } else {
          {
            const Type = err;

            if (_core.dogma.is(Type, _core.func)) {
              if (_core.dogma.is(res, Type)) {
                _core.dogma.raise(`'${value}' should not raise of '${Type}'. Raised: '${res}'.`);
              }
            } else {
              if (_core.dogma.getItem(_core.dogma.peval(() => {
                return assert.deepEqual(res, err);
              }), 0)) {
                _core.dogma.raise(`'${value}' should not raise '${err}'. Raised: '${res}'.`);
              }
            }
          }
        }
      }
    }
  }
  return this;
};

ValueWrapper.prototype.toBeInstanceOf = ValueWrapper.prototype.toBe = function (klass) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("klass", klass);

  {
    if (_core.dogma.isNot(value, klass)) {
      _core.dogma.raise(`'{value}' should be instance of '${klass}'.`);
    }
  }
  return this;
};

ValueWrapper.prototype.notToBeInstanceOf = ValueWrapper.prototype.notToBe = function (klass) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("klass", klass);

  {
    if (_core.dogma.is(value, klass)) {
      _core.dogma.raise(`'${value}' should not be instance of '${klass}'.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toBeNull = ValueWrapper.prototype.toBeNil = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (value != null) {
      _core.dogma.raise(`'${value}' should be nil/null.`);
    }
  }
  return this;
};

ValueWrapper.prototype.notToBeNull = ValueWrapper.prototype.notToBeNil = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (value == null) {
      _core.dogma.raise(`'${value}' should not be nil/null.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toBeBoolean = ValueWrapper.prototype.toBeBool = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.isNot(value, _core.bool)) {
      _core.dogma.raise(`'${value}' should be a boolean.`);
    }
  }
  return this;
};

ValueWrapper.prototype.notToBeBoolean = ValueWrapper.prototype.notToBeBool = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.is(value, _core.bool)) {
      _core.dogma.raise(`'${value}' should not be a boolean.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toBeDate = ValueWrapper.prototype.toBeTimestamp = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.isNot(value, _core.timestamp)) {
      _core.dogma.raise(`'${value}' should be a date.`);
    }
  }
  return this;
};

ValueWrapper.prototype.notToBeDate = ValueWrapper.prototype.notToBeTimestamp = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.is(value, _core.timestamp)) {
      _core.dogma.raise(`'${value}' should be a date.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toBeString = ValueWrapper.prototype.toBeText = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.isNot(value, _core.text)) {
      _core.dogma.raise(`'${value}' should be a text or string.`);
    }
  }
  return this;
};

ValueWrapper.prototype.notToBeString = ValueWrapper.prototype.notToBeText = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.is(value, _core.text)) {
      _core.dogma.raise(`'${value}' should not be a text or string.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toBeNumber = ValueWrapper.prototype.toBeNum = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.isNot(value, _core.num)) {
      _core.dogma.raise(`'${value}' should be a number.`);
    }
  }
  return this;
};

ValueWrapper.prototype.notToBeNumber = ValueWrapper.prototype.notToBeNum = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.is(value, _core.num)) {
      _core.dogma.raise(`'${value}' should not be a number.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toBeArray = ValueWrapper.prototype.toBeList = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.isNot(value, _core.list)) {
      _core.dogma.raise(`'${value}' should be an array or list.`);
    }
  }
  return this;
};

ValueWrapper.prototype.notToBeArray = ValueWrapper.prototype.notToBeList = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.is(value, _core.list)) {
      _core.dogma.raise(`'${value}' should not be an array or list.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toBeSet = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.isNot(value, _core.set)) {
      _core.dogma.raise(`'${value}' should be a set.`);
    }
  }
  return this;
};

ValueWrapper.prototype.notToBeSet = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.is(value, _core.set)) {
      _core.dogma.raise(`'${value}' should not be a set.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toBeObject = ValueWrapper.prototype.toBeMap = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.isNot(value, _core.map)) {
      _core.dogma.raise(`'${value}' should not be an object or map.`);
    }
  }
  return this;
};

ValueWrapper.prototype.notToBeObject = ValueWrapper.prototype.notToBeMap = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.is(value, _core.map)) {
      _core.dogma.raise(`'${value}' should not be an object or map.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toBeFunction = ValueWrapper.prototype.toBeFn = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.isNot(value, _core.func)) {
      _core.dogma.raise(`'${value}' should be a function.`);
    }
  }
  return this;
};

ValueWrapper.prototype.notToBeFunction = ValueWrapper.prototype.notToBeFn = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.is(value, _core.func)) {
      _core.dogma.raise(`'${value}' should not be a function.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toBeCallable = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.isNot(value, _core.func)) {
      _core.dogma.raise(`'${value}' should be callable.`);
    }
  }
  return this;
};

ValueWrapper.prototype.notToBeCallable = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.is(value, _core.func)) {
      _core.dogma.raise(`'${value}' should not be callable.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toBeEqualTo = function (another) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if ((0, _core.typename)(value) != (0, _core.typename)(another) || !_core.dogma.getItem(_core.dogma.peval(() => {
      return assert.deepEqual(value, another);
    }), 0)) {
      _core.dogma.raise(`'${(0, _core.fmt)(value)}' should be equal to '${(0, _core.fmt)(another)}'.`);
    }
  }
  return this;
};

ValueWrapper.prototype.notToBeEqualTo = function (another) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if ((0, _core.typename)(value) == (0, _core.typename)(another) && _core.dogma.getItem(_core.dogma.peval(() => {
      return assert.deepEqual(value, another);
    }), 0)) {
      _core.dogma.raise(`'${(0, _core.fmt)(value)}' should not be equal to '${(0, _core.fmt)(another)}'.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toBeSameAs = function (another) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (value !== another) {
      _core.dogma.raise(`'${(0, _core.fmt)(value)}' should be same as '${(0, _core.fmt)(another)}'.`);
    }
  }
  return this;
};

ValueWrapper.prototype.notToBeSameAs = function (another) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (value === another) {
      _core.dogma.raise(`'${(0, _core.fmt)(value)}' should not be same as '${(0, _core.fmt)(another)}'.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toBeLt = ValueWrapper.prototype.toBeLessThan = function (another) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("another", another);

  {
    if ((0, _core.typename)(value) != (0, _core.typename)(another) || value >= another) {
      _core.dogma.raise(`'${value}' should be less than '${another}'.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toBeLe = ValueWrapper.prototype.toBeLessThanOrEqualTo = function (another) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("another", another);

  {
    if ((0, _core.typename)(value) != (0, _core.typename)(another) || value > another) {
      _core.dogma.raise(`'${value}' should be less than or equal to '${another}'.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toBeGt = ValueWrapper.prototype.toBeGreaterThan = function (another) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("another", another);

  {
    if ((0, _core.typename)(value) != (0, _core.typename)(another) || _core.dogma.includes(["bool"], (0, _core.typename)(value)) || value <= another) {
      _core.dogma.raise(`'${value}' should be greater than '${another}'.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toBeGe = ValueWrapper.prototype.toBeGreaterThanOrEqualTo = function (another) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("another", another);

  {
    if ((0, _core.typename)(value) != (0, _core.typename)(another) || _core.dogma.includes(["bool"], (0, _core.typename)(value)) || value < another) {
      _core.dogma.raise(`'${value}' should be greater than or equal to '${another}'.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toBeBetween = function (val1, val2) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if ((0, _core.typename)(value) != (0, _core.typename)(val1) || (0, _core.typename)(value) != (0, _core.typename)(val2) || value < val1 || value > val2) {
      _core.dogma.raise(`'${value}' should be between '${val1}' and '${val2}'.`);
    }
  }
  return this;
};

ValueWrapper.prototype.notToBeBetween = function (val1, val2) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if ((0, _core.typename)(value) == (0, _core.typename)(val1) && (0, _core.typename)(value) == (0, _core.typename)(val2) && value >= val1 && value <= val2) {
      _core.dogma.raise(`'${value}' should not be between '${val1}' and '${val2}'.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toContain = ValueWrapper.prototype.toInclude = function (item) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    {
      const [ok, res] = _core.dogma.peval(() => {
        return value.includes(item);
      });

      if (!ok || !res) {
        _core.dogma.raise(`'${value}' should include '${item}'.`);
      }
    }
  }
  return this;
};

ValueWrapper.prototype.notToContain = ValueWrapper.prototype.notToInclude = function (item) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    {
      const [ok, res] = _core.dogma.peval(() => {
        return value.includes(item);
      });

      if (ok && res) {
        _core.dogma.raise(`'${value}' should not include '${item}'.`);
      }
    }
  }
  return this;
};

ValueWrapper.prototype.toBeIn = function (another) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("another", another, _core.list);

  {
    if (!another.includes(value)) {
      _core.dogma.raise(`'{fmt(value)}' should be in '${(0, _core.fmt)(another)}'`);
    }
  }
  return this;
};

ValueWrapper.prototype.notToBeIn = function (another) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("another", another, _core.list);

  {
    if (another.includes(value)) {
      _core.dogma.raise(`'{fmt(value)}' should not be in '${(0, _core.fmt)(another)}'`);
    }
  }
  return this;
};

ValueWrapper.prototype.toHave = function (members) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("members", members, [_core.text, _core.list, _core.map]);

  {
    if (_core.dogma.isNot(members, [_core.list, _core.map])) {
      members = [members];
    }

    if (_core.dogma.is(members, _core.list)) {
      for (const mem of members) {
        if (_core.dogma.getItem(value, mem) == null) {
          _core.dogma.raise(`'${(0, _core.fmt)(value)}' should have '${mem}'.`);
        }
      }
    } else {
      for (const [mem, val] of Object.entries(members)) {
        {
          {
            const [ok, received] = _core.dogma.peval(() => {
              return assert.deepEqual(_core.dogma.getItem(value, mem), val);
            });

            if (!ok) {
              _core.dogma.raise(`'${(0, _core.fmt)(value)}' should have '${mem}' to '${(0, _core.fmt)(val)}'. Received: ${received}.`);
            }
          }
        }
      }
    }
  }
  return this;
};

ValueWrapper.prototype.notToHave = function (members) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("members", members, [_core.text, _core.list, _core.map]);

  {
    if (_core.dogma.isNot(members, [_core.list, _core.map])) {
      members = [members];
    }

    if (_core.dogma.is(members, _core.list)) {
      for (const mem of members) {
        if (_core.dogma.getItem(value, mem) !== undefined) {
          _core.dogma.raise(`${(0, _core.fmt)(value)} should not have '${mem}'.`);
        }
      }
    } else {
      for (const [mem, val] of Object.entries(members)) {
        {
          {
            const received = _core.dogma.getItem(value, mem);

            if (received == val) {
              _core.dogma.raise(`${(0, _core.fmt)(value)} should not have '${mem}' to '${val}'. Received: '${received}'.`);
            }
          }
        }
      }
    }
  }
  return this;
};

ValueWrapper.prototype.toBeSimilarTo = function (another) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("another", another);

  {
    if (!similar(value, another)) {
      _core.dogma.raise(`'${(0, _core.fmt)(value)}' should be similar to '${(0, _core.fmt)(another)}'.`);
    }
  }
  return this;
};

ValueWrapper.prototype.notToBeSimilarTo = function (another) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("another", another);

  {
    if (similar(value, another)) {
      _core.dogma.raise(`'${(0, _core.fmt)(value)}' should not be similar to '${(0, _core.fmt)(another)}'.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toBeEmpty = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if ((0, _core.len)(value) != 0) {
      _core.dogma.raise(`'${value}' should be empty.`);
    }
  }
  return this;
};

ValueWrapper.prototype.notToBeEmpty = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.includes(["bool", "num"], (0, _core.typename)(value)) || (0, _core.len)(value) == 0) {
      _core.dogma.raise(`'${value}' should not be empty.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toHaveLen = ValueWrapper.prototype.toHaveLength = function (size) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("size", size, [_core.num, _core.list]);

  {
    {
      const received = (0, _core.len)(value);

      if (received != size) {
        _core.dogma.raise(`${(0, _core.fmt)(value)} length should have length '${size}'. Received: ${received}.`);
      }
    }
  }
  return this;
};

ValueWrapper.prototype.notToHaveLen = ValueWrapper.prototype.notToHaveLength = function (size) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("size", size, _core.num);

  {
    {
      const received = (0, _core.len)(value);

      if (received == size) {
        _core.dogma.raise(`${(0, _core.fmt)(value)} length should not have length '${size}'. Received: ${received}.`);
      }
    }
  }
  return this;
};

ValueWrapper.prototype.toMatch = ValueWrapper.prototype.toBeLike = function (pattern) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("pattern", pattern, _core.text);

  {
    if (!(0, _core.re)(pattern).test(value)) {
      _core.dogma.raise(`'${value}' should be like '${pattern}'.`);
    }
  }
  return this;
};

ValueWrapper.prototype.notToMatch = ValueWrapper.prototype.notToBeLike = function (pattern) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("pattern", pattern, _core.text);

  {
    if ((0, _core.re)(pattern).test(value)) {
      _core.dogma.raise(`'${value}' should not be like '${pattern}'.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toStartWith = function (prefix) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("prefix", prefix, _core.text);

  {
    if (!(0, _core.text)(value).startsWith(prefix)) {
      _core.dogma.raise(`'${value}' should start with '${prefix}'.`);
    }
  }
  return this;
};

ValueWrapper.prototype.notToStartWith = function (prefix) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("prefix", prefix, _core.text);

  {
    if ((0, _core.text)(value).startsWith(prefix)) {
      _core.dogma.raise(`'${value}' should not start with '${prefix}'.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toEndWith = function (suffix) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("suffix", suffix, _core.text);

  {
    if (!(0, _core.text)(value).endsWith(suffix)) {
      _core.dogma.raise(`'${value}' should end with '${suffix}'.`);
    }
  }
  return this;
};

ValueWrapper.prototype.notToEndWith = function (suffix) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  /* istanbul ignore next */

  _core.dogma.expect("suffix", suffix, _core.text);

  {
    if ((0, _core.text)(value).endsWith(suffix)) {
      _core.dogma.raise(`'${value}' should not end with '${suffix}'.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toHaveBeenFulfilled = ValueWrapper.prototype.toBeFulfilled = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (this.fulfilled !== true) {
      _core.dogma.raise(`${value} should have been fulfilled.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toHaveBeenRejected = ValueWrapper.prototype.toBeRejected = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (this.fulfilled !== false) {
      _core.dogma.raise(`${value} should have been rejected.`);
    }
  }
  return this;
};

ValueWrapper.prototype.toBeUuid = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (!uuid.validate(value)) {
      _core.dogma.raise(`${value} should be a valid UUID.`);
    }
  }
  return this;
};

function similar(arr1, arr2) {
  let res = false;
  /* istanbul ignore next */

  _core.dogma.expect("arr1", arr1);
  /* istanbul ignore next */


  _core.dogma.expect("arr2", arr2);

  {
    if ((0, _core.len)(arr1) != (0, _core.len)(arr2)) {
      res = false;
    } else {
      if ((0, _core.len)(arr1) == 0 && (0, _core.len)(arr2) == 0) {
        res = true;
      } else {
        for (const i of arr1) {
          res = false;

          for (const j of arr2) {
            [res] = _core.dogma.getArrayToUnpack(_core.dogma.peval(() => {
              return assert.deepEqual(i, j);
            }), 1);

            if (res) {
              break;
            }
          }

          if (!res) {
            break;
          }
        }
      }
    }
  }
  return res;
}