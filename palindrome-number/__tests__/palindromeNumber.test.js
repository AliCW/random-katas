const { palindromeNumber } = require('../palindromeNumber')

describe('Check if given number is a palindrome', () => {
    test('First case: 121', () => {
        const x = 121;
        expect(palindromeNumber(x)).toBe(true);
    });
    test('Second case: -121', ()  => {
        const x = -121;
        expect(palindromeNumber(x)).toBe(false);
    });
    test('Third case: 10', () => {
        const x = 10;
        expect(palindromeNumber(x)).toBe(false);
    });
    test('Fourth case: 0', () => {
        const x = 0;
        expect(palindromeNumber(x)).toBe(true);
    });
    test('Fifth case: 5', () => {
        const x = 5;
        expect(palindromeNumber(x)).toBe(true);
    });
    test('Sixth case: 154731', () => {
        const x = 154731;
        expect(palindromeNumber(x)).toBe(false);
    });
});

//https://leetcode.com/problems/palindrome-number/