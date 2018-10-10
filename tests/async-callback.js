const assert = require('chai').assert;
const LoginController = require('../app/login.controller.js');

let loginController = new LoginController();
let userList = ['abc123','xyz321'];

describe('Function: login controller', function() {

	describe('isValidUserIdAsync', function() {
		it('should return true if valid user id', function(done) {
			loginController.isValidUserIdAsync(userList, 'abc123', function(isValid) {
				assert.equal(isValid, true);
				done();
			});
		});

		it('should return false if invalid user id', function(done) {
			loginController.isValidUserIdAsync(userList, 'abc1234', function(isValid) {
				assert.equal(isValid, false);
				done();
			});
		});
	});

});