# @cosmokramer/expected

[![NPM version](https://img.shields.io/npm/v/@cosmokramer/expected.svg)](https://npmjs.org/package/@cosmokramer/expected)
[![Total downloads](https://img.shields.io/npm/dt/@cosmokramer/expected.svg)](https://npmjs.org/package/@cosmokramer/expected)

An assertion test library.

*Engineered in Valencia, Spain, EU by KramerStream.*

## Use

```javascript
const expected = require("@cosmokramer/expected");
```

To load plugins, use its method `plugin()` as follows:

```javascript
expected.plugin("@cosmokramer/expected-fs");
```

## Chaining assertions

We can chain assertion methods for the same value such as the following examples:

```javascript
expected(value).toBeNum().toBeLessThan(25);

//similar to
expected(value).toBeNum();
expected(value).toBeLessThan();
```

## Specific members or items

Sometimes, we need to assert multiple members of a source value.
With the `member()`, `it()` or `get()` methods, we can get the value for one of its members:

```javascript
expected(value).member("field")...
expected(value).it("index")...
expected(value).get("expression")...
```

Examples:

```javascript
value = {x: 123, y: 456};
expected(value).toBeObject().member("x").toBeNum().toBeEqualTo(123).member("y").toBeNum();

value = ["zero", "one", "two", "three"];
expected(value).it(1).toBeEqualTo("one").member(3).toBeEqualTo("three");

value = {x: ["zero", "one", "two", "three"]};
expected(value).member("x[1]").toBeEqualTo("one").it("x[2]").toBeEqualTo("two");
```

The methods always access with respect to the source value passed to `expected()`.
And the assertions are respect to the last member got with them.

## Type assertions

To check whether a value is of a type or another, we can use:

```javascript
//class or type of instance
expected(value).toBe(Class)
expected(value).notToBe(Class)

expected(value).toBeInstanceOf(Class)
expected(value).notToBeInstanceOf(Class)

//string
expected(value).toBeText()
expected(value).notToBeText()

expected(value).toBeString()
expected(value).notToBeString()

//boolean
expected(value).toBeBool()
expected(value).notToBeBool()

expected(value).toBeBoolean()
expected(value).notToBeBoolean()

//date
expected(value).toBeDate()
expected(value).notToBeDate()

//number
expected(value).toBeNum()
expected(value).notToBeNum()

expected(value).toBeNumber()
expected(value).notToBeNumber()

//null
expected(value).toBeNil()
expected(value).notToBeNil()

expected(value).toBeNull()
expected(value).notToBeNull()

//object
expected(value).toBeMap()
expected(value).notToBeMap()

expected(value).toBeObject()
expected(value).notToBeObject()

//array
expected(value).toBeList()
expected(value).notToBeList()

expected(value).toBeArray()
expected(value).notToBeArray()

//set
expected(value).toBeSet()
expected(value).notToBeSet()

//function
expected(value).toBeFn()
expected(value).notToBeFn()

expected(value).toBeFunction()
expected(value).notToBeFunction()

//callable object
expected(value).toBeCallable()
expected(value).notToBeCallable()
```

## Comparisons

```javascript
//==, !=
expected(value).toBeEqualtTo(value)
expected(value).notToeBeEqualTo(value)

//===, !==
expected(value).toBeSameAs(value)
expected(value)notToBeSameAs(value)

//<
expected(value).toBeLessThan(value)

//<=
expected(value).toBeLessThanOrEqualTo(value)

//>
expected(value).toBeGreaterThan(value)

//>=
expected(value).toBeGreaterThanOrEqualTo(value)

//between
expected(value).toBeBetween(start, end)
expected(value).notToBeBetween(start, end)

//like
expected(value).toBeLike(pattern)
expected(value).notToBeLike(pattern)

expected(value).toMatch(pattern)
expected(value).notToMatch(pattern)

//start with prefix
expected(value).toStartWith(prefix)
expected(value).notToStartWith(prefix)

//end with suffix
expected(value).toEndWith(suffix)
expected(value).notToEndWith(suffix)
```

## In

```javascript
//coll contains item
expected(coll).toInclude(item)
expected(coll).notToInclude(item)

expected(coll).toContain(item)
expected(coll).notToContain(item)

//item in coll
expected(item).toBeIn(coll)
expected(item).notToBeIn(coll)

//object contains member
expected(object).toHave(fieldName)
expected(object).notToHave(fieldName)

expected(object).toHave([fieldName, fieldName...])
expected(object).notToHave([fieldName, fieldName...])

expected(object).toHave({field: value, field: value...})
expected(object).notToHave({field: value, field: value...})
```

## Similar

Two arrays/lists are similar when containing the same items in any order:

```javascript
expected(array).toBeSimilarTo(array)
expected(array).notToBeSimilarTo(array)
```

## Length

```javascript
//empty: empty list, empty string or object with no members
expected(value).toBeEmpty()
expected(value).notToBeEmpty()

//length: list, string or number of members
expected(value).toHaveLength(size)
expected(value).notToHaveLength(size)

expected(value).toHaveLen(size)
expected(value).notToHaveLen(size)
```

## Calls

```javascript
expected(fn).toRaise()
expected(fn).toRaise(error)
expected(fn).toRaise(ErrorType)

expected(fn).notToRaise()
expected(fn).notToRaise(error)
expected(fn).notToRaise(ErrorType)
```

## Asynchronous assertions

```javascript
//asserting resolved/fulfilled promise
await(expected(Promise.resolve())).toBeFullfilled()

//asserting rejected promise
await(expected(Promise.rejected())).toBeRejected()
```

## Misc

```javascript
//value should be a valid UUID: v1 or v4
expected(value).toBeUuid()
```
