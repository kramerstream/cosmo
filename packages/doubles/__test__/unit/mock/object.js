"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@kramertest/cosmo-expected"));

const {
  mock
} = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when well-defined, object mock must be returned", () => {
      {
        const o = mock({
          ["x"]: mock.field([{
            ["returns"]: 1234
          }, {
            ["returns"]: 4321
          }]),
          ["y"]: mock.field({
            ["returns"]: 5678
          }),
          ["z"]: mock.fun({
            ["returns"]: 12345678
          })
        });
        expected(o).notToBeCallable();
        expected(o.x).toBeEqualTo(1234);
        expected(o.y).toBeEqualTo(5678);
        expected(o.z()).toBeEqualTo(12345678);
        expected(o.z()).toBeEqualTo(12345678);
        expected(o.y).toBeEqualTo(5678);
        expected(o.x).toBeEqualTo(4321);
      }
    });
    test("when object mock called, JS-engine error must be raised", () => {
      {
        const o = mock({});
        expected(o).notToBeCallable();
        expected(() => {
          {
            o();
          }
        }).toRaise(TypeError("o is not a function"));
      }
    });
    test("when field() or fun() not used for member, error must be raised", () => {
      {
        expected(() => {
          {
            mock({
              'x': "invalid value"
            });
          }
        }).toRaise(TypeError("Member x must be field mock or function mock."));
      }
    });
  }
});