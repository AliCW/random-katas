const { findMissing } = require('../findMissing');

describe(`Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.`, () => {
    test('Given [1, 2, 2, 3] & [1, 2, 3], return 2', () => {
        const arr1 = [1, 2, 2, 3];
        const arr2 = [1, 2, 3];
        expect(findMissing(arr1, arr2)).toBe(2);
    });
    test('Given [6, 1, 3, 6, 8, 2] & [3, 6, 6, 1, 2], return 8', () => {
        const arr1 = [6, 1, 3, 6, 8, 2];
        const arr2 = [3, 6, 6, 1, 2];
        expect(findMissing(arr1, arr2)).toBe(8);
    });
    test('Given [7] & [], return 7', () => {
        const arr1 = [7];
        const arr2 = [];
        expect(findMissing(arr1, arr2)).toBe(7);
    });
    test('Given [4, 3, 3, 61, 8, 8] & [8, 61, 8, 3, 4], return 3', () => {
        const arr1 = [4, 3, 3, 61, 8, 8];
        const arr2 = [8, 61, 8, 3, 4];
        expect(findMissing(arr1, arr2)).toBe(3);
    });
    test('Given [4, 3, 2, 7, 6, 5] & [4, 3, 2, 7, 5], return 6', () => {
        const arr1 = [4, 3, 2, 7, 6, 5];
        const arr2 = [4, 3, 2, 7, 5];
        expect(findMissing(arr1, arr2)).toBe(6);
    });
    test('Given [0, 0, 0, 0, 0] & [0, 0, 0, 0]), return 0', () => {
        const arr1 = [0, 0, 0, 0, 0];
        const arr2 = [0, 0, 0, 0];
        expect(findMissing(arr1, arr2)).toBe(0);
    });
});