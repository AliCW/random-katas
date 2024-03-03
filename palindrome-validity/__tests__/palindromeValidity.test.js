const { palindrome } = require('../palindromeValidity');

describe('Determine if the given string is a palindrome, case is insensitive', () => {
    test('Given "", return true', () => {
        const string = "";
        expect(palindrome(string)).toBe(true);
    });
    test('Given "101", return true', () => {
        const string = "101";
        expect(palindrome(string)).toBe(true);
    });
    test('Given "911", return false', () => {
        const string = "911";
        expect(palindrome(string)).toBe(false);
    });
    test('Given "RotaTor", return true', () => {
        const string = "RotaTor";
        expect(palindrome(string)).toBe(true);
    });
    test('Given "A man, a plan, a canal - Panama", return true', () => {
        const string = "A man, a plan, a canal - Panama";
        expect(palindrome(string)).toBe(true);
    });
    test('Given "Abba Zabba, you\'re my only friend", return false', () => {
        const string = "Abba Zabba, you're my only friend";
        expect(palindrome(string)).toBe(false);
    });
    test('Given "Under_scores; Serocsrednu", return true', () => {
        const string = "Under_scores; Serocsrednu";
        expect(palindrome(string)).toBe(true);
    });
    test('Given "Eva: Can I see bees in a cave?", return true', () => {
        const string = "Eva: Can I see bees in a cave?";
        expect(palindrome(string)).toBe(true);
    });
});

//https://www.codewars.com/kata/53046ceefe87e4905e00072a/train/javascript