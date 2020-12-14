# @cosmokramer/azure-functions

[![NPM version](https://img.shields.io/npm/v/@cosmokramer/azure-functions.svg)](https://npmjs.org/package/@cosmokramer/azure-functions)
[![Total downloads](https://img.shields.io/npm/dt/@cosmokramer/azure-functions.svg)](https://npmjs.org/package/@cosmokramer/azure-functions)

Doubles library to simulate **Azure Functions** objects.

*Engineered in Valencia, Spain, EU by KramerStream.*

## context()

The `context()` function returns a mock for a `Context` instance:

```javascript
const {context, httpRequest, httpResponse} = require("@cosmokramer/azure-functions");
const ctx = context({
  functionName: "the function name",                      //mandatory
  functionDirectory: "local dir where function defined",  //mandatory
  bindings: {},                                           //optional
  req: httpRequest(/*...*/),                              //optional
  res: httpResponse(/*...*/)                              //optional
})
```

The function directory is used for importing the `function.json` to build the `bindingDefinitions`.

## httpRequest()

`httpRequest()` returns a mock for an `HttpRequest` instance:

```javascript
const {httpRequest} = require("@cosmokramer/azure-functions");
const req = httpRequest({
  method: "GET, PUT, POST...",      //mandatory
  url: "the url",                   //mandatory
  originalUrl: "the original url",  //optional, url used when not set
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
