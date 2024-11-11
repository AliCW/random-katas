const { addTwoNumbers } = require('../addTwoNumbers');

describe('Given two arrays representing numbers, reverse each & return the sum', () => {
    test('Tests input arrays are not mutated', () => {
        const array1 = [2, 4, 3];
        const array2 = [5, 6, 4];
        addTwoNumbers(array1, array2);
        expect(array1).toEqual([2, 4, 3]);
        expect(array2).toEqual([5, 6, 4]);
    });
    test('Given [2, 4, 3] & [5, 6, 4], return [7, 0, 8] (342 + 465 = 807)', () => {
        const array1 = [2, 4, 3];
        const array2 = [5, 6, 4];
        expect(addTwoNumbers(array1, array2)).toEqual([7, 0, 8]);
    });
    test('Given [0] & [0], return [0]', () => {
        const array1 = [0];
        const array2 = [0];
        expect(addTwoNumbers(array1, array2)).toEqual([0]);
    });
    test('Given [4,8,5,3,6] & [5,4,7,0,0,0,6,1], return [9,2,3,4,6,0,6,1]', () => {
        const array1 = [4,8,5,3,6];
        const array2 = [5,4,7,0,0,0,6,1];
        expect(addTwoNumbers(array1, array2)).toEqual([9,2,3,4,6,0,6,1]);
    });
    test('Given [6,3,5,4,2,0,0,1] & [8,4,4,5,0,2,4,4,4], return [4,8,9,9,2,2,4,5,4]', () => {
        const array1 = [6,3,5,4,2,0,0,1];
        const array2 = [8,4,4,5,0,2,4,4,4];
        expect(addTwoNumbers(array1, array2)).toEqual([4,8,9,9,2,2,4,5,4]);
    });
    test('Given [9, 9, 9, 9, 9, 9, 9] & [9, 9, 9, 9] , return [8, 9, 9, 9, 0, 0, 0, 1]', () => {
        const array1 = [9, 9, 9, 9, 9, 9, 9];
        const array2 = [9, 9, 9, 9];
        expect(addTwoNumbers(array1, array2)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
    });
    test('Given [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1] & [5,6,4] , return [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]', () => {
        const array1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
        const array2 = [5,6,4];
        expect(addTwoNumbers(array1, array2)).toEqual([6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])
    });
    test('Given [1,4,5,2,6,3,9,8,7,5,2,3,6,5,9,8,5,3,2,4] & [1,4,5,2,6,3,9,8,7,5,2,3,6,5,9,8,5,3,2,4] (BigInt test), return []', () => {
        const array1 = [1,4,5,2,6,3,9,8,7,5,2,3,6,5,9,8,5,3,2,4];
        const array2 = [1,4,5,2,6,3,9,8,7,5,2,3,6,5,9,8,5,3,2,4];
        expect(addTwoNumbers(array1, array2)).toEqual([2,8,0,5,2,7,8,7,5,1,5,6,2,1,9,7,1,7,4,8]);
    });
    test('Given [5,4,8,2,3,1,5,4,8,5,6,9,3,2,2,5,3,6,1,2] & [1,9,6,3,5,2,8,7,5,3,3,6,5,4,2,5,8,4,2] (BigInt test), return [6,3,5,6,8,3,3,2,4,9,9,5,9,6,4,0,2,1,4,2]', () => {
        const array1 = [5,4,8,2,3,1,5,4,8,5,6,9,3,2,2,5,3,6,1,2];
        const array2 = [1,9,6,3,5,2,8,7,5,3,3,6,5,4,2,5,8,4,2];
        expect(addTwoNumbers(array1, array2)).toEqual([6,3,5,6,8,3,3,2,4,9,9,5,9,6,4,0,2,1,4,2]);
    });
});


//https://leetcode.com/problems/add-two-numbers/solutions/
