var code = require('../main.js')

describe("Hello World", function() {
  it("says 'hello, world!' when ran", function() {
    expect(code.outputHelloWorld()).toEqual("Hello, world!");
  });
});

// describe('Tax Calculator', function(){

//   it('should tax 10% on the first $10', function() {
//     expect(code.calculate(1)).toEqual(0.1);
//     expect(code.calculate(10)).toEqual(1);
//   });

//   it('should tax 7% on the second $10', function(){
//     expect(code.calculate(15)).toEqual(1.35);
//   });

// });


describe('leapYear', function() {
  it('returns true if arguments are a leap year', function() {
    expect(code.leapYear(1600)).toEqual(true);
  });

  it('returns false if the arguments are not a leap year', function() {
    expect(code.leapYear(1700)).toEqual(false);
  });
});

describe("changeToUpper", function() {
  it('returns a lowercase string to UPPER', function() {
    expect(code.changeToUpper(['red', 'green', 'blue'])).toEqual(['RED', 'GREEN', 'BLUE']);
  });
});

describe("findGreatestStrength", function() {
	it('returns the array with the greatest strength', function() {
		expect(code.findGreatestStrength([{strength: 20, name: 'A'}, {strength: 10, name: 'B'}])).toEqual({strength: 20, name: 'A'});
	});
});
