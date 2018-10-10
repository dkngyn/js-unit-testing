const assert = require('assert');
const should = require('chai').should();

let car = {name:'Fit', maker: 'Honda'};

describe('Test: object', function() {

	it('should have property name', function() {
		car.should.have.property('name');
	});

	it(`should have property name with value ${car.name}`, function() {
		car.should.have.property('name').equal('Fit');
	});

	it('should compare objects', function() {
		let car2 = {name:'Fit', maker: 'Honda'};
		car.should.deep.equal(car2);
	});

	it('handling null', function() {
		let car = null;
		should.not.exist(car);
	});

});