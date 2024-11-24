const { findEvenIndex } = require('../equalSidesOfAnArray');

describe('Given an array, return the index in which all elements to the left & right add up to the same value. Return -1 if no same value can be found', () => {
    test('Given [1,2,3,4,3,2,1], return 3', () => {
        const array = [1,2,3,4,3,2,1];
        expect(findEvenIndex(array)).toBe(3);
    });
    test('Given [1,100,50,-51,1,1], return 1', () => {
        const array = [1,100,50,-51,1,1];
        expect(findEvenIndex(array)).toBe(1);
    });
    test('Given [1,2,3,4,5,6], return -1', () => {
        const array = [1,2,3,4,5,6];
        expect(findEvenIndex(array)).toBe(-1);
    });
    test('Given [20,10,30,10,10,15,35], return 3', () => {
        const array = [20,10,30,10,10,15,35];
        expect(findEvenIndex(array)).toBe(3);
    });
    test('Given [8, 8], return 1', () => {
        const array = [8, 8];
        expect(findEvenIndex(array)).toBe(-1);
    });
    test('Given [8, 0], return 0', () => {
        const array = [8, 0];
        expect(findEvenIndex(array)).toBe(0);
    });
    test('Given [0, 8], return 0', () => {
        const array = [0, 8];
        expect(findEvenIndex(array)).toBe(1);
    });
    test('Given [7, 3, -3], return -1', () => {
        const array = [7, 3, -3];
        expect(findEvenIndex(array)).toBe(0);
    });
    test('Given [8], return -1', () => {
        const array = [8];
        expect(findEvenIndex(array)).toBe(0);
    });
    test('Given [0, 0, 0, 0, 0], return 0', () => {
        const array = [0, 0, 0, 0, 0];
        expect(findEvenIndex(array)).toBe(0);
    });
});

//https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
