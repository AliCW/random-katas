const { isPalindrome } = require('../validPalindromeFromPhrase');

describe('Checks if the alpha numeric phrase string passed is a valid palindrome', () => {
    test('First case - A man, a plan, a canal: Panama - true', () => {
        const s = 'A man, a plan, a canal: Panama';
        expect(isPalindrome(s)).toBe(true);
    });
    test('Second case - race a car - false', () => {
        const s = 'race a car';
        expect(isPalindrome(s)).toBe(false);
    });
    test('Third case - " " - true', () => {
        const s = ' ';
        expect(isPalindrome(s)).toBe(true);
    });
    test('Fourth case - "ab_a" - true', () => {
        const s = 'ab_a';
        expect(isPalindrome(s)).toBe(true);
    });
    test('Fifth case - "0P" - false', () => {
        const s = '0P';
        expect(isPalindrome(s)).toBe(false);
    });
    test('Sixth case - "L0#?/L" - true', () => {
        const s = 'L0#?/L';
        expect(isPalindrome(s)).toBe(true);
    });
});

//https://leetcode.com/problems/valid-palindrome/