const { findDup } = require('../findDup');

describe('Given an array of unique elements with one duplicate, return the duplicate element, solutions on codewars need to be O(n)', () => {
    test('Confirm input array is not mutated', () => {
        const arr = [1, 2, 3, 4, 1];
        findDup(arr);
        expect(arr).toEqual([1, 2, 3, 4, 1]);
    });
    test('Given [1, 2, 3, 1], return 1', () => {
        const arr = [1, 2, 3, 1];
        expect(findDup(arr)).toBe(1);
    });
    test('Given [5, 4, 3, 2, 1, 1], return 1', () => {
        const arr = [5, 4, 3, 1, 1];
        expect(findDup(arr)).toBe(1);
    });
    test('Given [1, 3, 2, 5, 4, 5, 7, 6], return 5', () => {
        const arr = [1, 3, 2, 5, 4, 5, 7, 6];
        expect(findDup(arr)).toBe(5);
    });
    test('Given [8, 2, 6, 3, 7, 2, 5, 1, 4], return 2', () => {
        const arr = [8, 2, 6, 3, 7, 2, 5, 1, 4];
        expect(findDup(arr)).toBe(2);
    });
    test('Given [15, 24, 17, 12,  1, 22,  7, 10, 19, 26,  8,  3, 21, 16, 18, 11, 23, 20,  2,  4,  8, 14,  9,  6, 27, 13, 25,  5], return 8', () => {
        const arr = [15, 24, 17, 12,  1, 22,  7, 10, 19, 26,  8,  3, 21, 16, 18, 11, 23, 20,  2,  4,  8, 14,  9,  6, 27, 13, 25,  5];
        expect(findDup(arr)).toBe(8);
    });
    test('Given [12, 21, 18,  5, 16, 23, 20, 17,  1, 10, 17, 11, 29,  6, 28, 15,  7, 19, 25,  9, 27,  4, 14,  8, 13,  2, 26, 3, 22, 24], return 17', () => {
        const arr = [12, 21, 18,  5, 16, 23, 20, 17,  1, 10, 17, 11, 29,  6, 28, 15,  7, 19, 25,  9, 27,  4, 14,  8, 13,  2, 26, 3, 22, 24];
        expect(findDup(arr)).toBe(17);
    });
});

//https://www.codewars.com/kata/558f0553803bc3c4720000af/train/javascript