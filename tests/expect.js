const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

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
			expect(isValid).to.be.true;
		});
		it('should return false if invalid id', function() {
			let isValid = userController.isValidId('abc1234');
			expect(isValid).to.be.false;
		});
	});

	describe('isValidIdAsync', function() {
		it('should return true if valid id', function(done) {
			userController.isValidIdAsync('abc123', function(isValid) {
				isValid.should.equal(true);
				done();
			});
		});
		it('should return false if invalid id', function(done) {
			userController.isValidIdAsync('abc1234', function(isValid) {
				isValid.should.equal(false);
				done();
			});
		});
	});

});