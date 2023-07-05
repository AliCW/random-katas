const { mergeTwoSortedLists } = require('../mergeTwoSortedLists');

describe('merge the two lists in to one sorted list', () => {
    test('first case - array1 = [1,2,4], array2 = [1,3,4]', () => {
        const array1 = [1,2,4];
        const array2 = [1,3,4];
        expect(mergeTwoSortedLists(array1, array2)).toEqual([1,1,2,3,4,4])
    })
    test('second case - array1 = [-9, 3], array2 = [5, 7]', () => {
        const array1 = [-9, 3];
        const array2 = [5, 7];
        expect(mergeTwoSortedLists(array1, array2)).toEqual([-9,3,5,7])
    })
    test('third case - long array', () => {
        const array1 = [-17,5,19,19]
        const array2 = [-30,-29,-28,-28,-27,-26,-26,-23,-23,-21,-18,-18,-17,-15,-14,-13,-13,-8,-8,-7,-7,-4,-2,0,1,5,5,5,7,11,13,13,15,17,17,26,26,27,28]
        expect(mergeTwoSortedLists(array1, array2)).toEqual([-30,-29,-28,-28,-27,-26,-26,-23,-23,-21,-18,-18,-17,-17,-15,-14,-13,-13,-8,-8,-7,-7,-4,-2,0,1,5,5,5,5,7,11,13,13,15,17,17,19,19,26,26,27,28])
    })
})

//https://leetcode.com/problems/merge-two-sorted-lists/