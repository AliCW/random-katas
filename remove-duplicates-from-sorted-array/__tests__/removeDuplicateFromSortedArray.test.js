const { removeDuplicateFromSortedArray } = require('../removeDuplicateFromSortedArray')

describe('sort unique numbers to the front of the array & return the number of unique elements', () => {
    test('first case - nums = [1,1,2] output = 2 - nums = [1,2,_]', () => {
        let nums = [1,1,2];
        expect(removeDuplicateFromSortedArray(nums)).toEqual(2);
        expect(nums).toEqual([1,2,'_']);
    });
    test('second case - nums = [0,0,1,1,1,2,2,3,3,4] output = 5 = nums = [0,1,2,3,4,_,_,_,_,_]', () => {
        let nums = [0,0,1,1,1,2,2,3,3,4];
        expect(removeDuplicateFromSortedArray(nums)).toEqual(5);
        expect(nums).toEqual([0,1,2,3,4,'_','_','_','_','_']);
    });
    test('third case - nums = [3, 6, 6, 6, 8, 12, 14, 100, 1000] - output = 7 - nums = [3, 6, 8, 12, 14, 100, 1000, "_", "_"]', () => {
        let nums = [3, 6, 6, 6, 8, 12, 14, 100, 1000];
        expect(removeDuplicateFromSortedArray(nums)).toEqual(7);
        expect(nums).toEqual([3, 6, 8, 12, 14, 100, 1000, '_', '_']);
    })
});

//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/