"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

const path = _core.dogma.use(require("@dogmalang/path"));

const {
  context
} = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    const functionName = "eventHub";
    const functionDirectory = path.join(__dirname, `../../data/${functionName}`);
    test("when unsupported trigger, error must be raised", () => {
      {
        expected(() => {
          {
            context({
              'functionDirectory': functionDirectory
            });
          }
        }).toRaise(Error("Unsupported trigger: eventHubTrigger."));
      }
    });
  }
});