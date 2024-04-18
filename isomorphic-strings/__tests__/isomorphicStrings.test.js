const { isomorph } = require('../isomorphicStrings');

describe('Given two strings, determine if these are isomorphic to one-another & return a boolean', () => {
    test('Given "AA" & "BB", return true', () => {
        const string1 = "AA";
        const string2 = "BB";
        expect(isomorph(string1, string2)).toBe(true);
    });
    test('Given "AB" & "BX", return false', () => {
        const string1 = "SEE";
        const string2 = "SAW";
        expect(isomorph(string1, string2)).toBe(false);
    });
    test('Given "ESTATE" & "DUELED", return true', () => {
        const string1 = "ESTATE";
        const string2 = "DUELED";
        expect(isomorph(string1, string2)).toBe(true);
    });
    test('Given "RAMBUNCTIOUSLY" & "THERMODYNAMICS", return true', () => {
        const string1 = "RAMBUNCTIOUSLY";
        const string2 = "THERMODYNAMICS";
        expect(isomorph(string1, string2)).toBe(true);
    });
    test('Given "ACBDFD" & "ASHNTG", return false', () => {
        const string1 = "ACBDFD";
        const string2 = "ASHNTG";
        expect(isomorph(string1, string2)).toBe(false);
    });
    test('Given "abcdefghijk" & "abcdefghijba", return false', () => {
        const string1 = "abcdefghijk";
        const string2 = "abcdefghijba";
        expect(isomorph(string1, string2)).toBe(false);
    });
});


//https://www.codewars.com/kata/59dbab4d7997cb350000007f/train/javascript

