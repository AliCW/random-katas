const { simpleFrequencySort } = require('../simpleFrequencySort');

describe('Sort the given array by occurance number, if these are equal, sort by numerical value', () => {
    test('Confirm the given array is not mutated', () => {
        const arr = [1,2,3,4,5];
        simpleFrequencySort(arr);
        expect(arr).toEqual([1,2,3,4,5]);
    });
    test('Given [2,3,5,3,7,9,5,3,7], return [3,3,3,5,5,7,7,2,9]', () => {
        const arr = [2,3,5,3,7,9,5,3,7];
        expect(simpleFrequencySort(arr)).toEqual([3,3,3,5,5,7,7,2,9]);
    });
    test('Given [1,2,3,0,5,0,1,6,8,8,6,9,1], return [1,1,1,0,0,6,6,8,8,2,3,5,9]', () => {
        const arr = [1,2,3,0,5,0,1,6,8,8,6,9,1];
        expect(simpleFrequencySort(arr)).toEqual([1,1,1,0,0,6,6,8,8,2,3,5,9]);
    });
    test('Given [5,9,6,9,6,5,9,9,4,4], return [9,9,9,9,4,4,5,5,6,6]', () => {
        const arr = [5,9,6,9,6,5,9,9,4,4];
        expect(simpleFrequencySort(arr)).toEqual([9,9,9,9,4,4,5,5,6,6]);
    });
    test('Given [4,4,2,5,1,1,3,3,2,8], return [1,1,2,2,3,3,4,4,5,8]', () => {
        const arr = [4,4,2,5,1,1,3,3,2,8];
        expect(simpleFrequencySort(arr)).toEqual([1,1,2,2,3,3,4,4,5,8]);
    });
    test('Given [4,9,5,0,7,3,8,4,9,0], return [0,0,4,4,9,9,3,5,7,8]', () => {
        const arr = [4,9,5,0,7,3,8,4,9,0];
        expect(simpleFrequencySort(arr)).toEqual([0,0,4,4,9,9,3,5,7,8]);
    });
    test('Given [ 0, 2, 5, 5, 7, 7, 8, 10, 10, 13, 15, 25, 25, 30, 31, 32, 40, 42 ], return [5, 5, 7, 7, 10, 10, 25, 25, 0, 2, 8, 13, 15, 30, 31, 32, 40, 42]', () => {
        const arr = [ 0, 2, 5, 5, 7, 7, 8, 10, 10, 13, 15, 25, 25, 30, 31, 32, 40, 42 ];
        expect(simpleFrequencySort(arr)).toEqual([5, 5, 7, 7, 10, 10, 25, 25, 0, 2, 8, 13, 15, 30, 31, 32, 40, 42]);
    });
    test('Given [1, 5, 8, 9, 10, 15, 19, 21, 37, 37, 38, 38, 47], return ', () => {
        const arr = [1, 5, 8, 9, 10, 15, 19, 21, 37, 37, 38, 38, 47];
        expect(simpleFrequencySort(arr)).toEqual([37, 37, 38, 38, 1, 5, 8, 9, 10, 15, 19, 21, 47]);
    });
    test('Given [ 0,1,4,4,9,10,11,11,11,15,16,17,17,17,18,19,19,22,27,29,30,30,31,32,32,35,37,39,40,41,43,48 ], return', () => {
        const arr = [ 0,1,4,4,9,10,11,11,11,15,16,17,17,17,18,19,19,22,27,29,30,30,31,32,32,35,37,39,40,41,43,48 ];
        expect(simpleFrequencySort(arr)).toEqual([11, 11, 11, 17, 17, 17, 4, 4, 19, 19, 30, 30, 32, 32, 0, 1, 9, 10, 15, 16, 18, 22, 27, 29, 31, 35, 37, 39, 40, 41, 43, 48]);
    });
    test('Given [ 2,3,4,6,7,8,9,9,9,11,11,12,15,30,30,33,33,35,35,35,39,43,45,46,46,47,48,49,50 ], return [9, 9, 9, 35, 35, 35, 11, 11, 30, 30, 33, 33, 46, 46, 2, 3, 4, 6, 7, 8, 12, 15, 39, 43, 45, 47, 48, 49, 50]', () => {
        const arr = [ 2,3,4,6,7,8,9,9,9,11,11,12,15,30,30,33,33,35,35,35,39,43,45,46,46,47,48,49,50 ];
        expect(simpleFrequencySort(arr)).toEqual([9, 9, 9, 35, 35, 35, 11, 11, 30, 30, 33, 33, 46, 46, 2, 3, 4, 6, 7, 8, 12, 15, 39, 43, 45, 47, 48, 49, 50]);
    });
});

//https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/train/javascript