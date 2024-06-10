const { differenceOf2 } = require('../differenceOf2');

describe('Given an array, return all matching pairs with a difference of 2', () => {
    test('Confirm the given array is not mutated', () => {
        const array = [1, 2, 3, 4];
        differenceOf2(array);
        expect(array).toEqual([1, 2, 3, 4]);
    });
    test('Given [85], return []', () => {
        const array = [85];
        expect(differenceOf2(array)).toEqual([]);
    });
    test('Given [1, 2, 3, 4], return [[1, 3],[2,4]]', () => {
        const array = [1, 2, 3, 4];
        expect(differenceOf2(array)).toEqual([[1,3],[2,4]]);
    });
    test('Given [1, 3, 4, 6], return [[ 1, 3 ], [ 4, 6 ]]', () => {
        const array = [1, 3, 4, 6];
        expect(differenceOf2(array)).toEqual([[ 1, 3 ], [ 4, 6 ]]);
    });
    test('Given [4, 1, 2, 3], return [[1, 3], [2, 4]]', () => {
        const array = [4, 1, 2, 3];
        expect(differenceOf2(array)).toEqual([[1, 3], [2, 4]]);
    });
    test('Given [56, 77, 87,  0, 86, 70, 46, 44, 43, 98, 64], return [[44, 46]]', () => {
        const array = [56, 77, 87,  0, 86, 70, 46, 44, 43, 98, 64];
        expect(differenceOf2(array)).toEqual([[44, 46]]);
    });
    test('Given [97, 16, 77, 82, 32, 14], return [[14, 16]]', () => {
        const array = [97, 16, 77, 82, 32, 14];
        expect(differenceOf2(array)).toEqual([[14, 16]]);
    });
    test('Given [39, 97, 35, 99, 18, 6, 75, 76, 19, 30, 42, 82, 58, 50, 68, 98, 52, 70, 0, 93, 81, 25], return [[ 50, 52 ], [ 68, 70 ], [ 97, 99 ]]', () => {
        const array = [39, 97, 35, 99, 18, 6, 75, 76, 19, 30, 42, 82, 58, 50, 68, 98, 52, 70, 0, 93, 81, 25];
        expect(differenceOf2(array)).toEqual([[50, 52], [68, 70], [97, 99]]);
    });
});


//https://www.codewars.com/kata/5340298112fa30e786000688/train/javascript