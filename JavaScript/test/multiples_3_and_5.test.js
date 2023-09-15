const { assert, expect } = require("chai");
const multiples_3_and_5 = require("../src/multiples_3_and_5");

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.
// Note: If the number is a multiple of both 3 and 5, only count it once.

describe("Multiples of 3 and 5", () => {
    it(`DATATYPE: It should return a Number`, () => {
        assert.isNumber(multiples_3_and_5(10));
    });
    
    const tests = [
        {arg: 10, expected: 23},
        {arg: -1, expected: 0},
    ];

    tests.forEach(({arg, expected}) => {
        it(`should return ${expected}`, () => {
            expect(multiples_3_and_5(arg)).to.equal(expected);
        });
    });
});