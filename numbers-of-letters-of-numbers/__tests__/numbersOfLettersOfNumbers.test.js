const { numbersOfLetters } = require('../numbersOfLettersOfNumbers');

describe(`If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is four: we have reached a stable equilibrium.
    Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).
    For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:`, () => {
    test('Given 60, return ["sixzero", "seven", "five", "four"]', () => {
        const number = 60;
        expect(numbersOfLetters(number)).toEqual(["sixzero", "seven", "five", "four"]);
    });
    test('Given 12, return ["onetwo", "six", "three", "five", "four"]', () => {
        const number = 12;
        expect(numbersOfLetters(number)).toEqual(["onetwo", "six", "three", "five", "four"]);
    });
    test('Given 37, return ["threeseven", "onezero", "seven", "five", "four"]', () => {
        const number = 37;
        expect(numbersOfLetters(number)).toEqual(["threeseven", "onezero", "seven", "five", "four"]);
    });
    test('Given 311, return ["threeoneone", "oneone", "six", "three", "five", "four"]', () => {
        const number = 311;
        expect(numbersOfLetters(number)).toEqual(["threeoneone", "oneone", "six", "three", "five", "four"]);
    });
    test('Given 999, return ["nineninenine", "onetwo", "six", "three", "five", "four"]', () => {
        const number = 999;
        expect(numbersOfLetters(number)).toEqual(["nineninenine", "onetwo", "six", "three", "five", "four"]);
    });
    test('Given 648, return ["sixfoureight", "onetwo", "six", "three", "five", "four"]', () => {
        const number = 648;
        expect(numbersOfLetters(number)).toEqual(["sixfoureight", "onetwo", "six", "three", "five", "four"]);
    });
    test('Given 241, return ["twofourone", "onezero", "seven", "five", "four"]', () => {
        const number = 241;
        expect(numbersOfLetters(number)).toEqual(["twofourone", "onezero", "seven", "five", "four"]);
    });
    test('Given 866, return ["eightsixsix", "oneone", "six", "three", "five", "four"]', () => {
        const number = 866;
        expect(numbersOfLetters(number)).toEqual(["eightsixsix", "oneone", "six", "three", "five", "four"]);
    });
    test('Given 350, return ["threefivezero", "onethree", "eight", "five", "four"]', () => {
        const number = 350;
        expect(numbersOfLetters(number)).toEqual(["threefivezero", "onethree", "eight", "five", "four"]);
    });
});

// https://www.codewars.com/kata/599febdc3f64cd21d8000117/train/javascript