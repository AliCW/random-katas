const { lengthOfSeq } = require('../lengthOfSeq');

describe('Given an array and number, find the length of the subarray starting and ending with the given number within the array', () => {
    test('Confirm the input array is not mutated - mutation test', () => {
        const array = [1, 2, 3, 4, 1];
        const number = 1;
        lengthOfSeq(array, number);
        expect(array).toEqual([1, 2, 3, 4, 1]);
    });
    test('Given [] & 6, return 0 - empty array test', () => {
        const array = [];
        const number = 6;
        expect(lengthOfSeq(array, number)).toBe(0);
    })
    test('Given [1, 1] & 1, return 2 - array length of 2 (end-to-end)', () => {
        const array = [1, 1];
        const number = 1;
        expect(lengthOfSeq(array, number)).toBe(2);
    });
    test('Given [-7, 4, 2, -12, 4] & 6, return 0 - given number not in array', () => {
        const array = [-7, 6, -12, -7, 4];
        const number = 8;
        expect(lengthOfSeq(array, number)).toBe(0);
    });
    test('Given [1] & 1, return 0 - array length of 1', () => {
        const array = [1]
        const number = 1;
        expect(lengthOfSeq(array, number)).toBe(0);
    });
    test('Given [-7, 3, -7, -7, 2, 1] & -7, return 0 - given number appears more than twice', () => {
        const array = [-7, 3, -7, -7, 2, 1];
        const number = -7;
        expect(lengthOfSeq(array, number)).toBe(0);
    });
    test('Given [1, 2, 3, 1] & 1, return 4 - array length of 4 (end-to-end)', () => {
        const array = [1, 2, 3, 1];
        const number = 1;
        expect(lengthOfSeq(array, number)).toBe(4);
    });
    test('Given [-7, 5, 0, 2, 9, 5] & 5, return 5 - array length of 6 (mid-to-end)', () => {
        const array = [-7, 5, 0, 2, 9, 5];
        const number = 5;
        expect(lengthOfSeq(array, number)).toBe(5);
    });
    test('Given [-7, 6, 2, -7, 4] & -7, return 4 - array length of 5 (start-to-mid)', () => {
        const array = [-7, 6, 2, -7, 4];
        const number = -7;
        expect(lengthOfSeq(array, number)).toBe(4);
    });
});


//https://www.codewars.com/kata/5566b0dd450172dfc4000005/train/javascript