const { removeElements } = require('../remove-elements-return-length');

describe('remove all instances of val from nums & return the length (nums must be mutated)', () => {
    test('first case - nums = [3,2,2,3] val = 3 - output = 2, nums = [2,2,]', () => {
        const nums = [3,2,2,3];
        const val = 3;
        expect(removeElements(nums, val)).toBe(2);
        expect(nums).toEqual([2, 2]);
    });
    test('second case - nums = [0,1,2,2,3,0,4,2] val = 2 - output = 5, nums = [0,1,4,0,3,]', () => {
        const nums = [0,1,2,2,3,0,4,2];
        const val = 2;
        expect(removeElements(nums, val)).toBe(5);
        expect(nums).toEqual([0,1,3,0,4]);
    });
    test('third case - nums = [0, 3, 6, 12, 16, 16, 14, 4, 9, 16] val = 16 - output = 7, nums = [0, 3, 6, 12, 14, 4, 9]', () => {
        const nums = [0, 3, 6, 12, 16, 16, 14, 4, 9, 16];
        const val = 16;
        expect(removeElements(nums, val)).toBe(7);
        expect(nums).toEqual([0, 3, 6, 12, 14, 4, 9]);
    });
    test('fourth case - nums = [0, 0, 0, 0, 0, 0] val = 0 - output = 0, nums = []', () => {
        const nums = [0, 0, 0, 0, 0, 0];
        const val = 0;
        expect(removeElements(nums, val)).toBe(0);
        expect(nums).toEqual([]);
    });
    test('fifth case - nums = [0, 5, 6, 8, 2, 3] val = 4 - output = 6, nums = [0, 5, 6, 8, 2, 3]', () => {
        const nums = [0, 5, 6, 8, 2, 3];
        const val = 4;
        expect(removeElements(nums, val)).toBe(6);
        expect(nums).toEqual([0, 5, 6, 8, 2, 3]);
    });
});

//https://leetcode.com/problems/remove-element/description/