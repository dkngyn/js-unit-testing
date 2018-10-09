## Javascript unit testing
Javascript unit testing examples with [Mocha](https://mochajs.org/) & [Chai](https://www.chaijs.com/)

### Usage
```
$ npm install
$ npm test
```
or run individual tests
```
$ npm run test:basic
$ npm run test:function
$ npm run test:async
$ npm run test:hooks
$ npm run test:expect
$ npm run test:should
$ npm run test:promise
```

#####What is unit testing?
The smallest parts of an application are called units, testing of those units to check whether it is fit for use or not is called unit testing.
If we are going to create a test for any function, then we need to make sure that the function by itself, separate from everything around, should do what it is intended to do, not more, not less and mock rest of things which are not under test. And that’s basic principle of unit test.

#####Integration testing
In the context of Unit Testing, testing the interactions between two units called Integration Testing. Scenarios like function under test calling another function with some context. We should still mock the outside resources but need to test those integration links.

`describe(name, fn)` creates a block that groups together several related tests in one test suite.

`it(name, fn)` is a function again which is actually a test itself

`assert(expression, message)` helps to determine the status of the test, it determines failure of the test.