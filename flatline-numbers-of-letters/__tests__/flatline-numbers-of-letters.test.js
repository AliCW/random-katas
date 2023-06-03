const { numbersOfLetters } = require('../flatline-numbers-of-letters');

describe('write the number of letters in the integer received and subsequent numbers of integers until a flatline is reached', () => {
    test('should return ["one", "three", "five", "four"] from an argument of 1', () => {
        const integer = 1;
        expect(numbersOfLetters(integer)).toEqual(["one", "three", "five", "four"]);
    });
    test('should return ["four"] for integer 4', () => {
        const integer = 4;
        expect(numbersOfLetters(integer)).toEqual(["four"]);
    });
    test('should return ["onetwo", "six", "three", "five", "four"] for integer 12', () => {
        const integer = 12;
        expect(numbersOfLetters(integer)).toEqual(["onetwo", "six", "three", "five", "four"]);
    });
    test('should return ["threeseven", "onezero", "seven", "five", "four"] for integer 37', () => {
        const integer = 37;
        expect(numbersOfLetters(integer)).toEqual(["threeseven", "onezero", "seven", "five", "four"]);
    });
    test('should return ["threeoneone", "oneone", "six", "three", "five", "four"] for integer 311', () => {
        const integer = 311;
        expect(numbersOfLetters(integer)).toEqual(["threeoneone", "oneone", "six", "three", "five", "four"]);
    });
    test('should return ["nineninenine", "onetwo", "six", "three", "five", "four"] for integer 999', () => {
        const integer = 999;
        expect(numbersOfLetters(integer)).toEqual(["nineninenine", "onetwo", "six", "three", "five", "four"]);
    });
});

//https://www.codewars.com/kata/599febdc3f64cd21d8000117/train/javascript