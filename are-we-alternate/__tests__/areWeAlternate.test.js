const { isAlt } = require('../areWeAlternate');

describe('Given a string, return true if the vowels & consonants are in opposite order', () => {
    test('Given "amazon", return true', () => {
        const string = 'amazon';
        expect(isAlt(string)).toBe(true);
    });
    test('Given "apple", return false', () => {
        const string = 'apple';
        expect(isAlt(string)).toBe(false);
    });
    test('Given "banana", return true', () => {
        const string = 'banana';
        expect(isAlt(string)).toBe(true);
    });
    test('Given "fcfgf", return false', () => {
        const string = 'fcfgf';
        expect(isAlt(string)).toBe(false);
    });
    test('Given "hegeg", return true', () => {
        const string = 'hegeg';
        expect(isAlt(string)).toBe(true);
    });
    test('Given "frkvmgdrgjdnmkddvdaxcxwgceh", return false', () => {
        const string = 'frkvmgdrgjdnmkddvdaxcxwgceh';
        expect(isAlt(string)).toBe(false);
    });
    test('Given "atatatatatatatatatatatata", return true', () => {
        const string = 'atatatatatatatatatatatata';
        expect(isAlt(string)).toBe(true);
    });
});

//https://www.codewars.com/kata/59325dc15dbb44b2440000af/train/javascript