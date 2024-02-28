const { longestPalindrome } = require('../longestPalindromeLength');

describe('Return the length of the longest possible palindrome in the given string, case is not sensitive & only account for letters a-z & numbers 0-9', () => {
    test('Given "racecar", return 7', () => {
        const str = 'racecar';
        expect(longestPalindrome(str)).toBe(7);
    });
    test('Given "B", return 1', () => {
        const str = 'B';
        expect(longestPalindrome(str)).toBe(1);
    });
    test('Given "Aaaaa", return 5', () => {
        const str = 'Aaaaa_';
        expect(longestPalindrome(str)).toBe(5);
    });
    test('Given "Hannah", return 6', () => {
        const str = 'Hannah';
        expect(longestPalindrome(str)).toBe(6);
    })
    test('Given "xyz__a_/b0110//a_zyx", return 13', () => {
        const str = 'xyz__a_/b0110//a_zyx';
        expect(longestPalindrome(str)).toBe(13);
    });
    test('Given "$aaabbbccddd_!jJpqlQx_.///yYabababhii_", return 25', () => {
        const str = "$aaabbbccddd_!jJpqlQx_.///yYabababhii_";
        expect(longestPalindrome(str)).toBe(25);
    });
    test('Given "z£ybDzA0Aab", return 7', () => {
        const str = "z£ybDzA0Aab";
        expect(longestPalindrome(str)).toBe(7);
    });
    test('Given "£iheDdfy£cy£beie$£yid0d", return 11', () => {
        const str = "£iheDdfy£cy£beie$£yid0d";
        expect(longestPalindrome(str)).toBe(11);
    });
    test('Given "£icxA0i£DDehbgydfchhgczgdc$fg", return 11', () => {
        const str = "£icxA0i£DDehbgydfchhgczgdc$fg";
        expect(longestPalindrome(str)).toBe(19);
    });
});

//https://www.codewars.com/kata/5a0178f66f793bc5b0001728/train/javascript