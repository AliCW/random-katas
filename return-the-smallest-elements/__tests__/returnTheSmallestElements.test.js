const { firstSmallest } = require('../returnTheSmallestElements');

describe('Given an array and "n", return the smallest array elements in order equal to "n"', () => {
    test('Confirm the input array is not mutated', () => {
        const array = [1, 2, 3, 4, 5];
        const n = 3;
        firstSmallest(array, n);
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });    
    test('Given [1, 2, 3, 4, 5] & 3, return [1, 2, 3]', () => {
        const array = [1, 2, 3, 4, 5];
        const n = 3;
        expect(firstSmallest(array, n)).toEqual([1, 2, 3]);
    });
    test('Given [5, 4, 3, 2, 1] & 3, return [3, 2, 1]', () => {
        const array = [5, 4, 3, 2, 1];
        const n = 3;
        expect(firstSmallest(array, n)).toEqual([3, 2, 1]);
    });
    test('Given [1, 2, 3, 1, 2] & 3), return [1, 2, 1]', () => {
        const array = [1, 2, 3, 1, 2];
        const n = 3;
        expect(firstSmallest(array, n)).toEqual([1, 2, 1]);
    });
    test('Given [1, 2, 3, -4, 0] & 3, return [1, -4, 0]', () => {
        const array = [1, 2, 3, -4, 0];
        const n = 3;
        expect(firstSmallest(array, n)).toEqual([1, -4, 0]);
    });
    test('Given [1, 2, 3, 4, 5] & 0, return []', () => {
        const array = [1, 2, 3, 4, 5];
        const n = 0;
        expect(firstSmallest(array, n)).toEqual([]);
    });
    test('Given [1, 2, 3, 4, 5] & 5, return [1, 2, 3, 4, 5]', () => {
        const array = [1, 2, 3, 4, 5];
        const n = 5;
        expect(firstSmallest(array, n)).toEqual([1, 2, 3, 4, 5]);
    });
    test('Given [4, -8, -10, 6, 9, 8, 9, 9, -6, -7, -3, 8, 8, -6] & 7, return [4, -8, -10, -6, -7, -3, -6]', () => {
        const array = [4, -8, -10, 6, 9, 8, 9, 9, -6, -7, -3, 8, 8, -6];
        const n = 7;
        expect(firstSmallest(array, n)).toEqual([4, -8, -10, -6, -7, -3, -6]);
    });
    test('Given  [-3, 10, 0, 3, 5, 7, -5, 8, 7, -4, -8, 4, 5, -3, 3, 3, 6, 5, 8, -4, 8] & 5, return [-3, -5, -4, -8, -4]', () => {
        const array = [-3, 10, 0, 3, 5, 7, -5, 8, 7, -4, -8, 4, 5, -3, 3, 3, 6, 5, 8, -4, 8];
        const n = 5;
        expect(firstSmallest(array, n)).toEqual([-3, -5, -4, -8, -4]);
    });
});

//https://www.codewars.com/kata/5aec1ed7de4c7f3517000079/train/javascript