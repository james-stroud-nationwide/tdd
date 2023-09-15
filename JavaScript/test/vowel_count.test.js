const { assert, expect } = require("chai");
const getCount = require("../src/vowel_count.js");

// CODEWARS: Vowel Count
describe("Vowel Count Tests", () => {
    it(`DATATYPE: It should return a Number`, () => {
        assert.isNumber(getCount("abracadabra"));
    });
    
    const tests = [
        {arg: "abracadabra", expected: 5},
        {arg: "bbb", expected: 0},
        {arg: "AaA", expected: 3},
        {arg: "Nothing Compares 2 U", expected: 6},
        {arg: "I before E except after C", expected: 9},
    ];

    tests.forEach(({arg, expected}) => {
        it(`should return ${expected}`, () => {
            expect(getCount(arg)).to.equal(expected);
        });
    });
});