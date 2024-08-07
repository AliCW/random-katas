const { duplicateCount } = require('../countDuplicateLetters');

describe('Count the duplicate letter in the given argument & return the number', () => {
    test('Given "", return 0 - empty string test', () => {
        const string = '';
        expect(duplicateCount(string)).toBe(0);
    });
    test('Given "abcdefg", return 0 - string with no duplicate letters', () => {
        const string = 'abcdefg';
        expect(duplicateCount(string)).toBe(0);
    });
    test('Given "aabedfj", return 1 - string with a single duplicate letter (at string start)', () => {
        const string = 'aabedfj';
        expect(duplicateCount(string)).toBe(1);
    });
    test('Given "aadDegjn047", return 2 - string with two duplicate letters (at string start), ignoring case', () => {
        const string = 'aadDegjn047';
        expect(duplicateCount(string)).toBe(2);
    });
    test('Given "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", return 26 - string with many duplicates (throughout string), ignoring case', () => {
        const string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        expect(duplicateCount(string)).toBe(26);
    });
    test('Given "bb00fghyylmoopqw", return 4 - string with four duplicate characters (throughout string)', () => {
        const string = 'bb00fghyylmoopqw';
        expect(duplicateCount(string)).toBe(4);
    });
    test('Given "Indivisibilities", return 2 - string with two duplicates, duplicates are not adjacent', () => {
        const string = 'Indivisibilities';
        expect(duplicateCount(string)).toBe(2);
    });
    test('Given "abcdefghijklmnabcdefgABCDEFabcdeABCDABCaba", return 7 - string with many duplicates, duplicates are not adjacent', () => {
        const string = 'abcdefghijklmnabcdefgABCDEFabcdeABCDABCaba';
        expect(duplicateCount(string)).toBe(7);
    });
});

//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript