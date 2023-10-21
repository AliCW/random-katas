const { containsDuplicate } = require('../containsDuplicate');

describe('returns false if every element is unique, returns true if a duplicate is found', () => {
    test('tests the input array is not mutated', () => {
        const nums = [1, 2, 3, 1]
        containsDuplicate(nums)
        expect(nums).toEqual([1, 2, 3, 1])
    });
    test('first case - nums = [1,2,3,1] - return true', () => {
        const nums = [1, 2, 3, 1];
        expect(containsDuplicate(nums)).toBe(true);
    });
    test('second case - nums = [1,2,3,4] - return false', () => {
        const nums = [1, 2, 3, 4];
        expect(containsDuplicate(nums)).toBe(false);
    });
    test('third case - nums = [1,1,1,3,3,4,3,2,4,2] - return true', () => {
        const nums = [1,1,1,3,3,4,3,2,4,2];
        expect(containsDuplicate(nums)).toBe(true);
    });
    test('fourth case - nums = [1,1,1,1,1,1,1] - return true', () => {
        const nums = [1,1,1,1,1,1,1];
        expect(containsDuplicate(nums)).toBe(true);
    });
    test('fifth case - nums = [6] - return false', () => {
        const nums = [6];
        expect(containsDuplicate(nums)).toBe(false);
    });
});