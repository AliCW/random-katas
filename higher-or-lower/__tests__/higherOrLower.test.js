const { higherOrLower } = require('../higherOrLower');

describe('Given a string of numbers, return the highest & lowest value', () => {
    test('Given "1 2 3", return "3 1"', () => {
        const string = "1 2 3"
        expect(higherOrLower(string)).toBe("3 1");
    });
    test('Given "1 2 3 4", return "4 1"', () => {
        const string = "1 2 3 4"
        expect(higherOrLower(string)).toBe("4 1");
    });
    test('Given "1 2", return "2 1"', () => {
        const string = "1 2"
        expect(higherOrLower(string)).toBe("2 1");
    });
    test('Given "1 3 5 7 9", return "9 1"', () => {
        const string = "1 3 5 7 9"
        expect(higherOrLower(string)).toBe("9 1");
    });
    test('Given "-1 1 0 0", return 1, -1', () => {
        const string = "-1 1 0 0"
        expect(higherOrLower(string)).toBe("1 -1");
    });
    test('Given "1 2 3 -5 8 100 -100", return "100 -100"', () => {
        const string = "1 2 3 -5 8 100 -100"
        expect(higherOrLower(string)).toBe("100 -100");
    });
    test('Given "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 9 -7", return "9 -7"', () => {
        const string = "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 9 -7"
        expect(higherOrLower(string)).toBe("9 -7");
    });
});

//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript