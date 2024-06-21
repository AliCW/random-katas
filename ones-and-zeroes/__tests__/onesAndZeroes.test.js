const { binaryArrayToNumber } = require('../onesAndZeroes');

describe('Given an binary representation in an array format, return its number', () => {
    test('Confirm the input array is not mutated', () => {
        const array = [0, 0, 0, 1];
        binaryArrayToNumber(array)
        expect(array).toEqual([0, 0, 0, 1]);
    });
    test('Given [0, 0, 0, 1], return 1', () => {
        const array = [0, 0, 0, 1];
        expect(binaryArrayToNumber(array)).toBe(1);
    });
    test('Given [0, 0, 1, 0], return 2', () => {
        const array = [0, 0, 1, 0];
        expect(binaryArrayToNumber(array)).toBe(2);
    });
    test('Given [1, 1, 1, 1], return 15', () => {
        const array = [1, 1, 1, 1];
        expect(binaryArrayToNumber(array)).toBe(15);
    });
    test('Given [0, 1, 1, 0], return 6', () => {
        const array = [0, 1, 1, 0];
        expect(binaryArrayToNumber(array)).toBe(6);
    });
    test('Given [1, 0, 0, 1], return 9', () => {
        const array = [1, 0, 0, 1];
        expect(binaryArrayToNumber(array)).toBe(9);
    });
    test('Given [1, 0, 1, 1], return 11', () => {
        const array = [1, 0, 1, 1];
        expect(binaryArrayToNumber(array)).toBe(11);
    });
});


// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript