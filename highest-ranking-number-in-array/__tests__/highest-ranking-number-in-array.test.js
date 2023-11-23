const { highestRank } = require('../highest-ranking-number-in-array')

describe('Return the most frequent number in an array, in case of a tie, return the highest number', () => {
    test('Test the given array is not mutated', () => {
        const arr = [1, 2, 3, 4, 5];
        highestRank(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });
    test('Test the given array: [12, 10, 8, 12, 7, 6, 4, 10, 12]', () => {
        const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
        expect(highestRank(arr)).toBe(12);
    });
    test('Test the given array: [9,8,30,5,11,17,24,13,4,8,21,25,6,9,9]', () => {
        const arr = [9,8,30,5,11,17,24,13,4,8,21,25,6,9,9];
        expect(highestRank(arr)).toBe(9);
    });
    test('Test the given array: [1,29,18,18,18,5,18,10,10,10,21,15,9,27,27,30,18,15]', () => {
        const arr = [1,29,18,18,18,5,18,10,10,10,21,15,9,27,27,30,18,15];
        expect(highestRank(arr)).toBe(18);
    });
});

//https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript