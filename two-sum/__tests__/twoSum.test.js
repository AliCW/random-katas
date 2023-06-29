const { twoSum } = require('../twoSum')

describe('Given an array of integers, return the indices of the intergers that add up to the second argument', () => {
    test('First example, positive case', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        expect(twoSum(nums, target)).toEqual([0, 1]);
    });
    test('Second example', () => {
        const nums = [3, 2, 4];
        const target = 6;
        expect(twoSum(nums, target)).toEqual([1, 2]);
    });
    test('Third example', () => {
        const nums = [3, 3]
        const target = 6;
        expect(twoSum(nums, target)).toEqual([0, 1]);
    });
    test('Fourth example', () => {
        const nums = [2, 5, 5, 11]
        const target = 10;
        expect(twoSum(nums, target)).toEqual([1, 2]);
    });
});

//https://leetcode.com/problems/two-sum/