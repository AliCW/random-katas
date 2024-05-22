const { gap } = require('../findLongestBinaryGap');

describe("Given a number, return the longest length of zeroes with a one at each end of the given number's binary", () => {
    test('Given 9, return 2', () => {
        const number = 9;
        expect(gap(number)).toBe(2);
    });
    test('Given 529, return 4', () => {
        const number = 529;
        expect(gap(number)).toBe(4);
    });
    test('Given 20, return 1', () => {
        const number = 20;
        expect(gap(number)).toBe(1);
    });
    test('Given 15, return 0', () => {
        const number = 15;
        expect(gap(number)).toBe(0);
    });
    test('Given 32, return 0', () => {
        const number = 32;
        expect(gap(number)).toBe(0);
    });
    test('Given 1044, return 5', () => {
        const number = 1044;
        expect(gap(number)).toBe(5);
    });
    test('Given 964, return 3', () => {
        const number = 964;
        expect(gap(number)).toBe(3);
    });
});


