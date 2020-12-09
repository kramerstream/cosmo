# @cosmokramer/expected-fs

[![NPM version](https://img.shields.io/npm/v/@cosmokramer/expected-fs.svg)](https://npmjs.org/package/@cosmokramer/expected-fs)
[![Total downloads](https://img.shields.io/npm/dt/@cosmokramer/expected-fs.svg)](https://npmjs.org/package/@cosmokramer/expected-fs)

Test assertion plugin for files and directories.

*Engineered in Valencia, Spain, EU by KramerStream.*

## Use

```javascript
const expected = require("@cosmokramer/expected");
expected.plugin("@cosmokramer/expected-fs");
```

## File assertions

To work with files, we have to use the function `expected.file()`:

```javascript
expected.file(...path)
```

Next we can use assertion methods such as:

```javascript
expected.file("/my/file.txt").toExist()
expected.file("/my", "file.txt").notToExist()
```

### File assertions

```javascript
//file should exist
expected.file(...path).toExist()
expected.file(...path).notToExist()

//file should be empty
expected.file(...path).toBeEmpty()
expected.file(...path).notToBeEmpty()

//file should include/contain a given text
expected.file(...path).toInclude(text)
expected.file(...path).notToInclude(text)

expected.file(...path).toContain(text)
expected.file(...path).notToContain(text)

//file should contain an value in JSON format
expected.file(...path).toBeJson()

//file content should be equal to a given text
expected.file(...path).toBeEqualTo(content)
expected.file(...path).notToBeEqualTo(content)

//file content should be equal to other file content
expected.file(...path).toBeEqualToFile(path)
expected.file(...path).notToBeEqualToFile(path)

//file content should start with a prefix
expected.file(...path).toStartWith(prefix)
expected.file(...path).notToStartWith(prefix)

//file content should end with a suffix
expected.file(...path).toEndWith(suffix)
expected.file(...path).notToEndWith(suffix)
```

## Directory assertions

To work with directories, we have to use the function `expected.dir()`:

```javascript
expected.dir(...path)
```

Next, let's show some examples:

```javascript
expected.dir("/my/dir").toExist()
expected.dir("/my", "dir").notToExist()
```

### Dir assertions

```javascript
//dir should exist
expected.dir(...path).toExist()
expected.dir(...path).notToExist()

//dir should have a given entry
expected.dir(...path).toHave(entryName)
expected.dir(...path).toHave([entryName, entryName...])

expected.dir(...path).notToHave(entryName)
expected.dir(...path).notToHave([entryName, entryName...])
```
