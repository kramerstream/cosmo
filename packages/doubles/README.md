# @kramertest/cosmo-doubles

[![NPM version](https://img.shields.io/npm/v/@kramertest/cosmo-doubles.svg)](https://npmjs.org/package/@kramertest/cosmo-doubles)
[![Total downloads](https://img.shields.io/npm/dt/@kramertest/cosmo-doubles.svg)](https://npmjs.org/package/@kramertest/cosmo-doubles)

Doubles library to simulate objects.

*Engineered in Valencia, Spain, EU by KramerStream.*

## Monitors

A **monitor** is an object to save the accesses to an object or the calls to a function.
Similar to the spies.

### Object monitor

An **object monitor** monitors an object: its field accesses and its method calls.
We can use the monitor as the object being monitored.

We can create a monitor for an object as follows:

```javascript
const {monitor} = require("@kramertest/cosmo-doubles");
const object = {/* ... */};

//monitor all: field accesses and calls
const m = monitor(object);

//monitor only the calls
const m = monitor(object, {onlyCalls: true});

//monitor only given members
const m = monitor(object, {members: ["member1", "member2"]});
const m = monitor(object, {members: ["method1", "method2"], onlyCalls: true});

//examples of use
console.log(m.x);       //monitored
console.log(object.x);  //not monitored, using object directly
```

When an object monitored, we have two kinds of entry in the log:

- **Access**, a member access.

- **Call**, a function object call.

When a method is accessed, we can't forget that two operations are performed:

1. The access to the function object.

2. The function object call.

If only the method calls must be monitored, use the `onlyCalls` option.

### Function monitor

A **function monitor** monitors a function.
We can use the monitor as the function object being monitored.

We can create a monitor for a function object as follows:

```javascript
const {monitor} = require("@kramertest/cosmo-doubles");
function fn(/*...*/) { /* ... */ }

//monitor function calls
const m = monitor(fn);

//examples of use
console.log(m(1, 2));   //monitored
console.log(fn(1, 2));  //not monitored, using function object directly
```

### Monitor clear

To clear a monitor:

```javascript
const m = monitor({});
monitor.clear(m);
```

### Log

A monitor has a log where the accesses and the calls are saved.
To get the log associated to a monitor:

```javascript
const m = monitor({});

//work with m

const log = monitor.log(m);
```

#### Operations with the log

```javascript
//number of calls, not keeping in mind the field accesses
log.calls

//number of field accesses, not keeping in mind the calls
log.accesses

//number of log entries (calls + accesses)
log.len

//number of operations returning
log.returns

//number of times a given value returned
log.returnedValue(value)

//number of times a value returned of a given type
log.returnedType(Type)

//number of operations raising an error
log.raises

//number of times a given value raised
log.raisedValue(value)

//number of times a value raised of a given type
log.raisedType(Type)

//number of times called with a given arguments
log.calledWith([arg1, arg2...])

//given entry by its index in the log
log.getEntry(i)

//given call by its index in the log, not keeping in mind the accesses
log.getCall(i)

//given field access by its index in the log, not keeping in mind the calls
log.getAccess(i)
```

When `getEntry()`, `getCall()` or `getAccess()` used, the instances returned are of the following types:

- `Access`, representing a field access:

  Member | Date type | Description
  -- | -- | --
  member | string | Member name.
  value | any | Value returned or raised.
  returned | boolean | Did the access return a value?
  raised | boolean | Did the access raise an error?
  returnedValue(value) | boolean | Was the given value returned?
  returnedType(Type) | boolean | Is the returned value of the given type?
  raisedValue(value) | boolean | Was the given value raised?
  raisedType(Type) | boolean | Is the raised value of the given type?
  isGet() | boolean | Is a read access?
  isSet() | boolean | Is a write access?

- `Call`, representing a function/method call:

  Member | Date type | Description
  -- | -- | --
  value | any | Value returned or raised by the call.
  returned | boolean | Did the call return a value?
  raised | boolean | Did the call raise an error?
  returnedValue(value) | boolean | Was the given value returned?
  returnedType(Type) | boolean | Is the returned value of the given type?
  raisedValue(value) | boolean | Was the given value raised?
  raisedType(Type) | boolean | Is the raised value of the given type?
  calledWith([arg1, arg2...]) | boolean | Were the given arguments passed to the call?

Examples:

```javascript
const log = monitor.log(m);

expected(log.calls).toBeEqualTo(1);
expected(log.getCall(0)).toHave({value: 123});
```
