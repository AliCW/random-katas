const { high } = require('../highestScoringWord');

describe('Given a string, find the highest scoring word, each character is worth its placement in the alphabet: a = 1, b = 2, etc', () => {
    test('Given "man i need a taxi up to ubud", return "taxi"', () => {
        const string = 'man i need a taxi up to ubud';
        expect(high(string)).toBe('taxi');
    });
    test('Given "aa b", return "aa"', () => {
        const string = 'aa b';
        expect(high(string)).toBe('aa');
    });
    test('Given "b aa", return "b"', () => {
        const string = 'b aa';
        expect(high(string)).toBe('b');
    });
    test('Given "bb d", return "bb"', () => {
        const string = 'bb d';
        expect(high(string)).toBe('bb');
    });
    test('Given "d bb", return "d"', () => {
        const string = 'd bb';
        expect(high(string)).toBe('d');
    });
    test('Given "aaa b", return "aaa"', () => {
        const string = 'aaa b';
        expect(high(string)).toBe('aaa');
    });
    test('Given "what time are we climbing up the volcano", return "volcano"', () => {
        const string = 'what time are we climbing up the volcano';
        expect(high(string)).toBe('volcano');
    });
});

//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript