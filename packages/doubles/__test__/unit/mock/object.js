"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

const {
  mock
} = _core.dogma.use(require("../../.."));

const {
  field,
  fun
} = mock;
module.exports = exports = suite(__filename, () => {
  {
    test("when well-defined, object mock must be returned", () => {
      {
        const o = mock({
          ["u"]: field.uuid(),
          ["a"]: field.any("hi!"),
          ["l1"]: field.list(),
          ["l2"]: field.list([1, 2, 3]),
          ["m1"]: field.map(),
          ["m2"]: field.map({
            ["x"]: 1,
            ["y"]: 2
          }),
          ["t1"]: field.text("ciao!"),
          ["t2"]: field.text("bonjour!"),
          ["x"]: field([{
            ["returns"]: 1234
          }, {
            ["returns"]: 4321
          }]),
          ["y"]: fun({
            ["returns"]: 12345678
          })
        });
        expected(o).notToBeCallable();
        expected(o.a).toBeEqualTo("hi!");
        expected(o.u).toBeUuid();
        expected(o.l1).toBeList().toBeEmpty();
        expected(o.l2).toBeList().toBeEqualTo([1, 2, 3]);
        expected(o.m1).toBeMap().toBeEmpty();
        expected(o.m2).toBeMap().toBeEqualTo({
          ["x"]: 1,
          ["y"]: 2
        });
        expected(o.t1).toBeText().toBeEqualTo("ciao!");
        expected(o.t2).toBeText().toBeEqualTo("bonjour!");
        expected(o.x).toBeEqualTo(1234);
        expected(o.y()).toBeEqualTo(12345678);
        expected(o.y()).toBeEqualTo(12345678);
        expected(o.u).toBeUuid();
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
        }).toRaise(TypeError("Member 'x' must be map, field mock or function mock."));
      }
    });
  }
});