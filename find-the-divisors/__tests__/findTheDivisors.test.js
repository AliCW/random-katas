const { findDivisors } = require('../findTheDivisors');

describe('Given a number, return an array of divisors. If the input is a prime, return the number with "is a prime number"', () => {
    test('Given 15, return [3, 5] - two divisor test', () => {
        const number = 15;
        expect(findDivisors(number)).toEqual([3, 5]);
    });
    test('Given 12, return [2, 3, 4, 6] - four divisor test', () => {
        const number = 12;
        expect(findDivisors(number)).toEqual([2, 3, 4, 6]);
    });
    test('Given 13, return "13 is a prime number" - prime number test', () => {
        const number = 13;
        expect(findDivisors(number)).toEqual("13 is a prime number");
    });
    test('Given 100, return [2, 4, 5, 10, 20, 25, 50] - three digit number test', () => {
        const number = 100;
        expect(findDivisors(number)).toEqual([2, 4, 5, 10, 20, 25, 50]);
    });
    test('Given 1001, return [], - four digit number test', () => {
        const number = 1001;
        expect(findDivisors(number)).toEqual([7, 11, 13, 77, 91, 143]);
    });
    test('Given 97, return "97 is a prime number" - higher prime number test', () => {
        const number = 97;
        expect(findDivisors(number)).toEqual("97 is a prime number");
    });
});



//https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript