const { singleNumber } = require('../singleNumberInArray');

describe('given a non-empty array, return the element appearing once', () => {
    test('tests the input array is not mutated', () => {
        const nums = [1, 2, 2];
        singleNumber(nums)
        expect(nums).toEqual([1, 2, 2]);
    })
    test('first test - nums = [1, 2, 2] - return 1', () => {
        const nums = [1, 2, 2];
        expect(singleNumber(nums)).toBe(1);
    });
    test('second test - nums = [4, 1, 2, 1, 2] - return 4', () => {
        const nums = [4, 1, 2, 1, 2];
        expect(singleNumber(nums)).toBe(4);
    });
    test('third test - nums = [1] - return 1', () => {
        const nums = [1];
        expect(singleNumber(nums)).toBe(1);
    });
    test('fourth test - nums = [2, 5, 5, 6, 2, 6, 24] - return 24', () => {
        const nums = [2, 5, 5, 6, 2, 6, 24];
        expect(singleNumber(nums)).toBe(24);
    });
});