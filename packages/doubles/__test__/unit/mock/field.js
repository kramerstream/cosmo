"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

const {
  mock
} = _core.dogma.use(require("../../.."));

const {
  field
} = mock;
module.exports = exports = suite(__filename, () => {
  {
    test("when uuid field created, the same uuid must be returned", () => {
      {
        const obj = mock({
          'fld': field.uuid()
        });
        const uuid = obj.fld;
        expected(obj).toBeMap();
        expected(obj.fld).toBeUuid().toBeEqualTo(uuid);
      }
    });
    test("when text field, the passed value must be returned", () => {
      {
        const obj = mock({
          'fld': field.text("ciao!")
        });
        expected(obj.fld).toBeEqualTo("ciao!");
      }
    });
    suite("map field", () => {
      {
        test("when field doesn't receive object, new object must be created and it can be modified", () => {
          {
            const obj = mock({
              'fld': field.map()
            });
            obj.fld.x = 123;
            obj.fld.y = 321;
            expected(obj).toBeMap();
            expected(obj.fld).toHave({
              'x': 123,
              'y': 321
            }).member("z").toBeNil();
          }
        });
        test("when field receives object, this must be cloned and its clone can be modified", () => {
          {
            const original = {};
            const obj = mock({
              'fld': field.map(original)
            });
            obj.fld.x = 123;
            obj.fld.y = 321;
            expected(original).toBeEmpty();
            expected(obj).toBeMap();
            expected(obj.fld).toHave({
              'x': 123,
              'y': 321
            }).member("z").toBeNil();
          }
        });
      }
    });
    suite("list field", () => {
      {
        test("when list field doesn't receive list, new list must be created and it can be modified", () => {
          {
            const obj = mock({
              'fld': field.list()
            });
            obj.fld.push(123);
            obj.fld.push(321);
            expected(obj).toBeMap();
            expected(obj.fld).toBeEqualTo([123, 321]);
          }
        });
        test("when list field receives list, this must be cloned and its clone can be modified", () => {
          {
            const original = [123, 456];
            const obj = mock({
              'fld': field.list(original)
            });
            obj.fld.push(789);
            expected(original).toBeEqualTo([123, 456]);
            expected(obj).toBeMap();
            expected(obj.fld).toBeEqualTo([123, 456, 789]);
          }
        });
      }
    });
    test("when any field, a value must be passed and this is cloned and can be modified", () => {
      {
        const original = {};
        const obj = mock({
          'fld': field.any(original)
        });
        obj.fld.x = 11;
        obj.fld.y = 22;
        expected(original).toBeEmpty();
        expected(obj).toBeMap();
        expected(obj.fld).toHave({
          'x': 11,
          'y': 22
        });
      }
    });
  }
});