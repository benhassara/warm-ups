var nextHighest = require('./nextHighest.js');

describe('nextHighest', function() {
	
	it('should swap last 2 if last is higher than next to last', function() {
		expect(nextHighest(1234)).toEqual(1243);
		expect(nextHighest(12)).toEqual(21);
	});
	
	it('swap nums in the middle if digits after same', function() {
		expect(nextHighest(1234111)).toEqual(1241113);
	});
	
	it('swap first time it finds a higher num after a lower num', function() {
		expect(nextHighest(123454321)).toEqual(123512344);
	});
	
	it('should return false if no answer', function() {
		expect(nextHighest(11)).toEqual(false);
		expect(nextHighest(31)).toEqual(false);
		expect(nextHighest(4321)).toEqual(false);
	});
	
	it('should make multiple swaps if necessary', function() {
		expect(nextHighest(231)).toEqual(312);
	});
});