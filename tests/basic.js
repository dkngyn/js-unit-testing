const assert = require('chai').assert;

const stringExample = "hello world";

describe('Basic: string test', function() {
	it('should return string length', function() {
		assert.equal(stringExample.length, 11);
	});
	it ('should return first char of string', function() {
		assert.equal(stringExample.charAt(0), 'h');
	});
});