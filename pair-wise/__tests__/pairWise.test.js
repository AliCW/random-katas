const { pairWise } = require('../pairWise');

describe('Find all pairs in the given array (arr) that add up to the given number(n) and return the sum of indices', () => {
    test('Confirm the input array is not mutated', () => {
        const arr = [1, 2, 3, 4, 5];
        const n = 0;
        pairWise(arr, n);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });
    test('Given [] & 0, return 0', () => {
        const arr = [];
        const n = 0;
        expect(pairWise(arr, n)).toBe(0);
    });
    test('Given [0, 0, 0, 0, 0] & 1, return 0', () => {
        const arr = [0, 0, 0, 0, 0];
        const n = 1;
        expect(pairWise(arr, n)).toBe(0);
    });
    test('Given [1, 4, 2, 3, 0, 5] & 7, return 11', () => {
        const arr = [1, 4, 2, 3, 0, 5];
        const n = 7;
        expect(pairWise(arr, n)).toBe(11);
    });
    test('Given [1, 3, 2, 4] & 4, return 1', () => {
        const arr = [1, 3, 2, 4];
        const n = 4;
        expect(pairWise(arr, n)).toBe(1);
    });
    test('Given [1, 1, 1] & 2, return 1', () => {
        const arr = [1, 1, 1];
        const n = 2;
        expect(pairWise(arr, n)).toBe(1);
    });
    test('Given [0, 0, 0, 0, 1, 1] & 1, return 10', () => {
        const arr = [0, 0, 0, 0, 1, 1];
        const n = 1;
        expect(pairWise(arr, n)).toBe(10);
    });
    test('Given [15, 1, 1] & 5, return 0', () => {
        const arr = [15, 1, 1];
        const n = 5;
        expect(pairWise(arr, n)).toBe(0);
    });
    test('Given [11,21,0,2,9,2,11,1,1,5,20,3,8,1,11,4,6,17,15,0,4,6,6,5,11,6,9,11,8,0,11,10,10,9,7,2,7,4,4,4,4,13] & 12, return 395', () => {
        const arr = [11,21,0,2,9,2,11,1,1,5,20,3,8,1,11,4,6,17,15,0,4,6,6,5,11,6,9,11,8,0,11,10,10,9,7,2,7,4,4,4,4,13];
        const n = 12;
        expect(pairWise(arr, n)).toBe(395);
    });
    test('Given [2,5,5,4,10,13,0,3,3,1,0,1,13,3,8,13,1,4,3] & 6, return 72', () => {
        const arr = [2,5,5,4,10,13,0,3,3,1,0,1,13,3,8,13,1,4,3];
        const n = 6;
        expect(pairWise(arr, n)).toBe(72);
    });
});

//https://www.codewars.com/kata/58afa8185eb02ea2a7000094/train/javascript