"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    suite("when no error passed", () => {
      {
        test("when error raised, wrapper must be returned", () => {
          {
            const w = expected("bonjour");
            assert.strictEqual(w.toRaise(), w);
          }
        });
        test("when error not raised, assertion error must be raised", () => {
          {
            assert.throws(() => {
              {
                expected(_core.dogma.nop()).toRaise();
              }
            });
          }
        });
      }
    });
    suite("when specific type passed", () => {
      {
        test("when error raised of the type, wrapper must be returned", () => {
          {
            const w = expected("bonjour");
            assert.strictEqual(w.toRaise(TypeError), w);
          }
        });
        test("when error raised but not of the type, assertion error must be raised", () => {
          {
            assert.throws(() => {
              {
                expected("bonjour").toRaise(SyntaxError);
              }
            });
          }
        });
      }
    });
    suite("when specific error object passed", () => {
      {
        test("when error raised same as specific error, wrapper must be returned", () => {
          {
            const w = expected("bonjour");
            assert.strictEqual(w.toRaise(TypeError("value is not a function")), w);
          }
        });
        test("when error raised but not specific error, assertion error must be raised", () => {
          {
            assert.throws(() => {
              {
                expected("bonjour").toRaise(Error());
              }
            });
          }
        });
      }
    });
  }
});