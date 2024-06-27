const { twoSum } = require('../twoSum')

describe('Given an array of integers, return the indices of the intergers that add up to the second argument', () => {
    test('Confirm the input array is not mutated', () => {
        const array = [2, 7, 11, 15];
        const target = 9;
        twoSum(array, target)
        expect(array).toEqual([2, 7, 11, 15]);
    });
    test('Given [1, 2, 3] & 4, return [0, 2] or [2, 0]', () => {
        const array = [1, 2, 3];
        const target = 4;
        expect(twoSum(array, target)).toContain(0);
        expect(twoSum(array, target)).toContain(2);
        expect(twoSum(array, target)).toHaveLength(2);
        expect(twoSum(array, target)).toBeInstanceOf(Array);
    });
    test('Given [2, 7, 11, 15] & 9, return [0, 1] or [1, 0]', () => {
        const array = [2, 7, 11, 15];
        const target = 9;
        expect(twoSum(array, target)).toContain(0);
        expect(twoSum(array, target)).toContain(1);
        expect(twoSum(array, target)).toHaveLength(2);
        expect(twoSum(array, target)).toBeInstanceOf(Array);
    });
    test('Given [3, 2, 4] & 6, return [1, 2] or [2, 1]', () => {
        const array = [3, 2, 4];
        const target = 6;
        expect(twoSum(array, target)).toContain(1);
        expect(twoSum(array, target)).toContain(2);
        expect(twoSum(array, target)).toHaveLength(2);
        expect(twoSum(array, target)).toBeInstanceOf(Array);
    });
    test('Given [3, 3] & 6, return [0, 1] or [1, 0]', () => {
        const array = [3, 3]
        const target = 6;
        expect(twoSum(array, target)).toContain(0);
        expect(twoSum(array, target)).toContain(1);
        expect(twoSum(array, target)).toHaveLength(2);
        expect(twoSum(array, target)).toBeInstanceOf(Array);
    });
    test('Given [2, 5, 5, 11] & 10, return [1, 2[ or [2, 1]', () => {
        const array = [2, 5, 5, 11]
        const target = 10;
        expect(twoSum(array, target)).toContain(1);
        expect(twoSum(array, target)).toContain(2);
        expect(twoSum(array, target)).toHaveLength(2);
        expect(twoSum(array, target)).toBeInstanceOf(Array);
    });
    test('Given [1234, 5678, 9012] & 14690, return [1, 2] or [2, 1]', () => {
        const array = [1234, 5678, 9012]
        const target = 14690;
        expect(twoSum(array, target)).toContain(1);
        expect(twoSum(array, target)).toContain(2);
        expect(twoSum(array, target)).toHaveLength(2);
        expect(twoSum(array, target)).toBeInstanceOf(Array);
    });
    test('Given [8, 19, 16, 4, 18, 5, 7, 13, 14, 5, 15, 25, 0, 15] & 14, return [8, 12] or [12, 8]', () => {
        const array = [8, 19, 16, 4, 18, 5, 7, 13, 14, 5, 15, 25, 0, 15]
        const target = 14;
        expect(twoSum(array, target)).toContain(8);
        expect(twoSum(array, target)).toContain(12);
        expect(twoSum(array, target)).toHaveLength(2);
        expect(twoSum(array, target)).toBeInstanceOf(Array);
    });
    test('Given [68, 26, 25, 53, 11, 50, 44, 4, 76, 5, 6, 47, 82, 34, 48, 53, 101, 90, 114, 24, 18, 4, 35, 35, 5, 28, 74, 2, 20, 21, 99, 25, 26, 23, 27, 12, 0, 30, 103, 94, 34, 14, 10, 114, 116, 78, 74, 13, 58, 50, 111, 72, 25, 86, 67, 64, 66, 13, 39] & 46, return [1, 20] or [20, 1]', () => {
        const array = [68, 26, 25, 53, 11, 50, 44, 4, 76, 5, 6, 47, 82, 34, 48, 53, 101, 90, 114, 24, 18, 4, 35, 35, 5, 28, 74, 2, 20, 21, 99, 25, 26, 23, 27, 12, 0, 30, 103, 94, 34, 14, 10, 114, 116, 78, 74, 13, 58, 50, 111, 72, 25, 86, 67, 64, 66, 13, 39];
        const target = 46;
        expect(twoSum(array, target)).toContain(1);
        expect(twoSum(array, target)).toContain(28);
        expect(twoSum(array, target)).toHaveLength(2);
        expect(twoSum(array, target)).toBeInstanceOf(Array);
    });
});

//https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript