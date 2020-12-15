"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

const {
  timer
} = _core.dogma.use(require("../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when schedule passed, timer must be created and returned as mock", () => {
      {
        expected(timer({
          'schedule': "0 */1 * * * *"
        })).toHave({
          'isPastDue': true,
          'scheduleForDST': true
        }).member("scheduleStatus").toHave(["next", "last"]);
      }
    });
  }
});