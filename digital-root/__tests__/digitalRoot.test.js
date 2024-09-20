const { digitalRoot } = require('../digitalRoot');

describe('Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.', () => {
    test('Given 16, return 7', () => {
        const number = 16;
        expect(digitalRoot(number)).toBe(7);
    });
    test('Given 11, return 2', () => {
        const number = 11;
        expect(digitalRoot(number)).toBe(2);
    });
    test('Given 942, return 6', () => {
        const number = 942;
        expect(digitalRoot(number)).toBe(6);
    });
    test('Given 132189, return 6', () => {
        const number = 132189;
        expect(digitalRoot(number)).toBe(6);
    });
    test('Given 493193, return 2', () => {
        const number = 493193;
        expect(digitalRoot(number)).toBe(2);
    });
    test('Given 123456789, return 9', () => {
        const number = 123456789;
        expect(digitalRoot(number)).toBe(9);
    });
    test('Given 987654321, return 9', () => {
        const number = 987654321;
        expect(digitalRoot(number)).toBe(9);
    });
});

//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript