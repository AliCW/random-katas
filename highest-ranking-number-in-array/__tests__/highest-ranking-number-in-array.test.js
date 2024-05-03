const { highestRank } = require('../highest-ranking-number-in-array')

describe('Return the most frequent number in an array, in case of a tie, return the highest number', () => {
    test('Test the given array is not mutated', () => {
        const arr = [1, 2, 3, 4, 5];
        highestRank(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });
    test('Test the given array: [12, 10, 8, 12, 7, 6, 4, 10, 12], return 12', () => {
        const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
        expect(highestRank(arr)).toBe(12);
    });
    test('Test the given array: [9,8,30,5,11,17,24,13,4,8,21,25,6,9,9], return 9', () => {
        const arr = [9,8,30,5,11,17,24,13,4,8,21,25,6,9,9];
        expect(highestRank(arr)).toBe(9);
    });
    test('Test the given array: [1,29,18,18,18,5,18,10,10,10,21,15,9,27,27,30,18,15], return 18', () => {
        const arr = [1,29,18,18,18,5,18,10,10,10,21,15,9,27,27,30,18,15];
        expect(highestRank(arr)).toBe(18);
    });
    test('Test the given array: [2,22,22,22,21,6,24,24,24,11,6,6,6,6,13,11], return 6', () => {
        const arr = [2,22,22,22,21,6,24,24,24,11,6,6,6,6,13,11];
        expect(highestRank(arr)).toBe(6);
    });
    test('Test the given array: [6,21,9,9,9,16,29,29,4,12,15,15,30,17,24,18,10,14,27], return 9', () => {
        const arr = [6,21,9,9,9,16,29,29,4,12,15,15,30,17,24,18,10,14,27];
        expect(highestRank(arr)).toBe(9);
    });
    test('Test the given array: [20,20,20,21,21,21,4,6,5,8,7,2,11,16,16,12,19,2], return 21', () => {
        const arr = [20,20,20,21,21,21,4,6,5,8,7,2,11,16,16,12,19,2];
        expect(highestRank(arr)).toBe(21);
    });
});

//https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript