const assert = require('chai').assert;
const LoginController = require('../app/login.controller.js');

let loginController = new LoginController();
let userList = ['abc123','xyz321'];

describe('Function: controller', function() {
	describe('isValidUserId', function() {
		it('should return true if valid user id', function() {
			let isValid = loginController.isValidUserId(userList, 'abc123');
			assert.equal(isValid, true);
		});
		it('should return false if invalid user id', function() {
			let isValid = loginController.isValidUserId(userList, 'abc1234');
			assert.equal(isValid, false);
		});
	});
});