const assert = require('chai').assert;
const UserController = require('../app/user.controller.js');

let userController = new UserController();
let userList = ['abc123','xyz321'];

beforeEach('Setting up user list', function() {
	userController.load(userList);
});

describe('Function: user controller', function() {

	describe('isValidId', function() {
		it('should return true if valid id', function() {
			let isValid = userController.isValidId('abc123');
			assert.equal(isValid, true);
		});
		it('should return false if invalid id', function() {
			let isValid = userController.isValidId('abc1234');
			assert.equal(isValid, false);
		});
	});

	describe('isValidIdAsync', function() {
		it('should return true if valid id', function(done) {
			userController.isValidIdAsync('abc123', function(isValid) {
				assert.equal(isValid, true);
				done();
			});
		});
		it('should return false if invalid id', function(done) {
			userController.isValidIdAsync('abc1234', function(isValid) {
				assert.equal(isValid, false);
				done();
			});
		});
	});

});