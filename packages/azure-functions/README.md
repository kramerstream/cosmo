# @cosmokramer/azure-functions

[![NPM version](https://img.shields.io/npm/v/@cosmokramer/azure-functions.svg)](https://npmjs.org/package/@cosmokramer/azure-functions)
[![Total downloads](https://img.shields.io/npm/dt/@cosmokramer/azure-functions.svg)](https://npmjs.org/package/@cosmokramer/azure-functions)

Doubles library to simulate **Azure Functions** objects.

*Engineered in Valencia, Spain, EU by KramerStream.*

## context()

The `context()` function returns a mock for a `Context` instance.
The context type is determined from the `functionDirectory/function.json` file.

### HTTP trigger context

The easy way to create an HTTP context is as follows:

```javascript
const {context} = require("@cosmokramer/azure-functions");
const ctx = context({
  functionDirectory: "local dir where function defined",  //mandatory
  functionName: "the function name",                      //optional; if unset, dir name used
  url: "http://...",                                      //mandatory
  bindings: {}                                            //optional
})
```

With this, the request and the response are created from the trigger data.
Remember that `req` and `res` are available in `context.req` and `context.res`.

When we have already `req` and `res`:

```javascript
const {context, httpRequest, httpResponse} = require("@cosmokramer/azure-functions");
const ctx = context({
  functionDirectory: "local dir where function defined",  //mandatory
  functionName: "the function name",                      //optional; if unset, dir name used
  bindings: {},                                           //optional
  req: httpRequest(/*...*/),                              //optional
  res: httpResponse(/*...*/)                              //optional
})
```

### Timer trigger context

```javascript
const {context, timer} = require("@cosmokramer/azure-functions");
const ctx = context({
  functionDirectory: "local dir where function defined",  //mandatory
  functionName: "the function name",                      //optional; if unset, dir name used
  bindings: {},                                           //optional
  timer: timer({schedule: "cron expression"})             //optional; if unset, trigger definition used
})
```

## httpRequest()

`httpRequest()` returns a mock for an `HttpRequest` instance:

```javascript
const {httpRequest} = require("@cosmokramer/azure-functions");
const req = httpRequest({
  method: "GET, PUT, POST...",      //mandatory
  url: "the url",                   //mandatory
  originalUrl: "the original url",  //optional; url used when not set
  headers: {},                      //optional
  query: {},                        //optional
  params: {},                       //optional
  body: {}                          //optional
});
```

## httpResponse()

`httpResponse()` returns a mock for an `HttpResponse` instance:

```javascript
const {httpResponse} = require("@cosmokramer/azure-functions");
const res = httpResponse();
```

## timer()

`timer()` returns a mock for a timer event:

```javascript
const {timer} = require("@cosmokramer/azure-functions");
const timer = timer({schedule: "cron expression such as, for example, 0 */1 * * * *"});
```
