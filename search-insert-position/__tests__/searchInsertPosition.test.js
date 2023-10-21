const { searchInsert } = require('../searchInsertPosition')

describe('Given an array of distinct integers, return the index of the target value or where the target index should be', () => {
    test('tests the input array is not mutated', () => {
        const nums = [1,3,5,6];
        const target = 5;
        searchInsert(nums, target)
        expect(nums).toEqual([1,3,5,6]);
    })
    test('First case - [1,3,5,6], target = 5, output = 2', () => {
        const nums = [1,3,5,6];
        const target = 5;
        expect(searchInsert(nums, target)).toBe(2);
    });
    test('Second case - [1,3,5,6], target = 2, output = 1', () => {
        const nums = [1,3,5,6];
        const target = 2;
        expect(searchInsert(nums, target)).toBe(1)
    });
    test('Third case - [1,3,5,6], target = 7, output = 4', () => {
        const nums = [1,3,5,6];
        const target = 7;
        expect(searchInsert(nums, target)).toBe(4);
    });
    test('Fourth case = [1,3,5,6,15,20,133]', () => {
        const nums = [1,3,5,6,15,20,133];
        const target = 20;
        expect(searchInsert(nums, target)).toBe(5)
    });
});

//https://leetcode.com/problems/search-insert-position/description/