"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@cosmokramer/expected"));

const {
  httpRequest
} = _core.dogma.use(require("../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when mock created w/o body, mock must not define body", () => {
      {
        const method = "GET";
        const uri = "https://localhost:8080/my/endpoint";
        const originalUrl = "http://localhost:8080/my/endpoint";
        const m = httpRequest({
          'method': method,
          'uri': uri,
          'originalUrl': originalUrl
        });
        expected(m).toHave({
          'method': method,
          'uri': uri,
          'originalUrl': originalUrl,
          'headers': {},
          'query': {},
          'params': {}
        });
        expected(m).notToHave("body").notToHave("rawBody");
      }
    });
    test("when mock created w/ body, mock must define body", () => {
      {
        const method = "GET";
        const uri = "http://localhost:8080/my/endpoint";
        const originalUrl = "http://localhost:8080/my/endpoint";
        const body = {};
        const rawBody = {};
        const m = httpRequest({
          'method': method,
          'uri': uri,
          'originalUrl': originalUrl,
          'body': body,
          'rawBody': rawBody
        });
        expected(m).toHave({
          'method': method,
          'uri': uri,
          'originalUrl': originalUrl,
          'headers': {},
          'query': {},
          'params': {},
          'body': body,
          'rawBody': rawBody
        });
      }
    });
  }
});