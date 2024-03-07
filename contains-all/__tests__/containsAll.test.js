const { containsAll } = require('../containsAll');

describe('Check if the second argument (array) contains elements that are also all in the first argument (array)', () => {
    test('Given [1, 2, 3,  4,  5,  6, 7, 8, 9, 10, 11, 12, 13] & [1, 2, 3, 4, 5], return true', () => {
        const arr1 = [1, 2, 3,  4,  5,  6, 7, 8, 9, 10, 11, 12, 13];
        const arr2 = [1, 2, 3, 4, 5];
        expect(containsAll(arr1, arr2)).toBe(true);
    });
    test('Given [1, 2, 3,  4,  5,  6, 7, 8, 9, 10, 11, 12, 13] & [ 9, 2, 5, 4, 10 ], return true', () => {
        const arr1 = [1, 2, 3,  4,  5,  6, 7, 8, 9, 10, 11, 12, 13];
        const arr2 = [9, 2, 5, 4, 10];
        expect(containsAll(arr1, arr2)).toBe(true);
    });
    test('Given [1, 2, 3,  4,  5,  6, 7, 8, 9, 10, 11, 12, 13] & [12, 15], return false', () => {
        const arr1 = [1, 2, 3,  4,  5,  6, 7, 8, 9, 10, 11, 12, 13];
        const arr2 = [12, 15];
        expect(containsAll(arr1, arr2)).toBe(false);
    });
    test('Given [1,2,3,4,5,6,7,8,9,10,11,12,13] & [], return true', () => {
        const arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13];
        const arr2 = [];
        expect(containsAll(arr1, arr2)).toBe(true);
    });
    test('Given [] & [12, 15], return false', () => {
        const arr1 = [];
        const arr2 = [12, 15];
        expect(containsAll(arr1, arr2)).toBe(false);
    });
    test('Given [18,  7, 15, 3, 17, 11, 2,  1, 16, 5,  6,  8, 10, 20] & [ 8, 7, 6 ], return true', () => {
        const arr1 = [18,  7, 15, 3, 17, 11, 2,  1, 16, 5,  6,  8, 10, 20];
        const arr2 = [8, 7, 6];
        expect(containsAll(arr1, arr2)).toBe(true);
    });
    test('Given [14, 10, 13, 15, 17, 2,  5,  3,  7, 19, 4] & [1, 15], return false', () => {
        const arr1 = [14, 10, 13, 15, 17, 2,  5,  3,  7, 19, 4];
        const arr2 = [1, 15];
        expect(containsAll(arr1, arr2)).toBe(false);
    });
    test('Given [2, 18,  7, 17, 8,  3, 10,  5] & [9, 3, 13], return false', () => {
        const arr1 = [2, 18,  7, 17, 8,  3, 10,  5];
        const arr2 = [9, 3, 13];
        expect(containsAll(arr1, arr2)).toBe(false);
    });
});

//https://www.codewars.com/kata/5143cc9694a24abcd2000001/train/javascript