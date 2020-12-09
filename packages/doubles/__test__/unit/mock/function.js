"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

const {
  mock
} = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    suite("position-based mock", () => {
      {
        test("when empty mock, the calls must raise error", () => {
          {
            const p = mock.fun([]);
            expected(() => {
              {
                p();
              }
            }).toRaise(Error("No response available for mock."));
          }
        });
        test("when position-based mock, position-based behavior must be used", () => {
          {
            const p = mock.fun([{
              ["default"]: true,
              ["returns"]: "the default value"
            }, {
              ["i"]: 0,
              ["returns"]: 111
            }, {
              ["raises"]: Error("my error")
            }, {
              ["returns"]: 222
            }]);
            expected(p).toBeCallable();
            expected(p()).toBeEqualTo(111);
            expected(() => {
              {
                p();
              }
            }).toRaise(Error("my error"));
            expected(p()).toBeEqualTo(222);
            expected(p()).toBeEqualTo("the default value");
            expected(p()).toBeEqualTo("the default value");
          }
        });
        test("when position-based mock using the first item, position-based behavior must be used", () => {
          {
            const p = mock.fun([{
              ["i"]: 0,
              ["returns"]: 111
            }, {
              ["raises"]: Error("my error")
            }, {
              ["returns"]: 222
            }]);
            expected(p).toBeCallable();
            expected(p()).toBeEqualTo(111);
            expected(() => {
              {
                p();
              }
            }).toRaise(Error("my error"));
            expected(p()).toBeEqualTo(222);
            expected(() => {
              {
                p();
              }
            }).toRaise(Error("No response available for mock."));
          }
        });
      }
    });
    suite("args-based mock", () => {
      {
        test("when valid behavior, args-based behavior must be used", async () => {
          {
            const p = mock.fun([{
              ["default"]: true,
              ["returns"]: "the default value"
            }, {
              ["args"]: [11, 22],
              ["returns"]: 1122
            }, {
              ["args"]: [22, 11],
              ["raises"]: Error("my error")
            }, {
              ["args"]: ["simple minds"],
              ["resolves"]: "promised you a miracle"
            }, {
              ["args"]: [],
              ["rejects"]: Error("rejected promise")
            }]);
            expected(p(11, 22)).toBeEqualTo(1122);
            expected(() => {
              {
                p(22, 11);
              }
            }).toRaise(Error("my error"));
            (0, await expected(p("simple minds"))).toBeEqualTo("promised you a miracle");
            expected(await _core.dogma.pawait(() => p())).it(0).toBeEqualTo(false).it(1).toBeEqualTo(Error("rejected promise"));
            expected(p(11, 22)).toBeEqualTo(1122);
          }
        });
        test("when not default call and needed in call, error must be raised", () => {
          {
            const p = mock.fun([{
              ["args"]: ["promised you a miracle"],
              ["returns"]: "simple minds"
            }]);
            expected(p("promised you a miracle")).toBeEqualTo("simple minds");
            expected(() => {
              {
                p("alive and kicking");
              }
            }).toRaise(Error("No response available for mock."));
          }
        });
      }
    });
    suite("mock base", () => {
      {
        test("when operation not passed, error must be raised", () => {
          {
            expected(() => {
              {
                mock.fun([{}]);
              }
            }).toRaise(TypeError("returns, raises, resolves or rejects must be set."));
          }
        });
        test("when simulating function with fields, fields can be accessed", () => {
          {
            const m = mock.fun({
              ["returns"]: "Simple Minds - Waterfront"
            }, {
              ["x"]: mock.field({
                ["returns"]: "Simple Minds - Live in the City of Light"
              })
            });
            expected(m()).toBeEqualTo("Simple Minds - Waterfront");
            expected(m.x).toBeEqualTo("Simple Minds - Live in the City of Light");
          }
        });
      }
    });
  }
});