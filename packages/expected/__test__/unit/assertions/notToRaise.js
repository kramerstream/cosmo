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
        test("when no error raised, wrapper must be returned", () => {
          {
            const w = expected(_core.dogma.nop());
            assert.strictEqual(w.notToRaise(), w);
          }
        });
        test("when error raised, assertion error must be raised", () => {
          {
            assert.throws(() => {
              {
                expected("ciao!").notToRaise();
              }
            });
          }
        });
      }
    });
    suite("when specific type passed", () => {
      {
        test("when error raised but not of the type, wrapper must be returned", () => {
          {
            const w = expected("bonjour");
            assert.strictEqual(w.notToRaise(SyntaxError), w);
          }
        });
        test("when error raised of the type, assertion error must be raised", () => {
          {
            assert.throws(() => {
              {
                expected("bonjour").notToRaise(TypeError);
              }
            });
          }
        });
      }
    });
    suite("when specific error object passed", () => {
      {
        test("when error raised not same as specific error object, wrapper must be returned", () => {
          {
            const w = expected("bonjour");
            assert.strictEqual(w.notToRaise(TypeError("xyz is not a function")), w);
          }
        });
        test("when error raised same as specific error object, assertion error must be raised", () => {
          {
            assert.throws(() => {
              {
                expected("bonjour").notToRaise(TypeError("value is not a function"));
              }
            });
          }
        });
      }
    });
  }
});