const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const UserController = require('../app/user.controller.js');

let userController = new UserController();
let userList = ['abc123','xyz321'];

beforeEach('Setting up user list', function() {
	userController.load(userList);
});

describe('Function: user controller', function() {

	describe('isAuthorizedPromise', function() {
		it('should return true if valid id', function() {
			return userController.isAuthorizedPromise('abc123').should.eventually.be.true;
		});

		it('should return false if invalid id', function() {
			return userController.isAuthorizedPromise('abc1234').should.eventually.be.false;
		});
	});

});