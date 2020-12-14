"use strict";

var _core = require("@dogmalang/core");

const moment = _core.dogma.use(require("moment"));

const cron = _core.dogma.use(require("cron-parser"));

const {
  mock
} = _core.dogma.use(require("@cosmokramer/doubles"));

const {
  field
} = mock;

function timer(opts) {
  /* istanbul ignore next */
  _core.dogma.expect("opts", opts, _core.dogma.intf("inline", {
    schedule: {
      optional: false,
      type: _core.text
    }
  }));

  let {
    schedule
  } = opts;
  {
    const dateFmt = "YYYY-MM-DDTHH:mm:ss.SSSS";
    const currentDate = (0, _core.timestamp)();
    const interval = cron.parseExpression(schedule, {
      'currentDate': currentDate
    });
    const nextSchedule = interval.next();
    return mock({
      ["isPastDue"]: field.bool(true),
      ["scheduleForDST"]: field.bool(true),
      ["scheduleStatus"]: {
        ["last"]: moment(currentDate).format(dateFmt),
        ["next"]: interval.next()._date.format(dateFmt),
        ["lastUpdated"]: moment(currentDate).format(dateFmt)
      }
    });
  }
}

module.exports = exports = timer;