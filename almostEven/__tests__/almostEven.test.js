const { almostEven } = require('../almostEven');

describe(`Complete the function so that it returns an array of integers representing the parts. If the input number is too small to split it into requested amount of parts, the additional parts should have value 0. Ignoring the order of the parts, there is only one valid solution for each input to your function!`, () => {
    test('Given 10 & 1, return 10', () => {
        const total = 10;
        const parts = 1;
        expect(almostEven(total, parts)).toEqual([10]);
    });
    test('Given 2 & 2, return [1, 1]', () => {
        const total = 2;
        const parts = 2;
        expect(almostEven(total, parts)).toEqual([1, 1]);
    });
    test('Given 20 & 5, return [4, 4, 4, 4, 4]', () => {
        const total = 20;
        const parts = 5;
        expect(almostEven(total, parts)).toEqual([4, 4, 4, 4, 4]);
    });
    test('Given 20 & 6, return [3, 3, 3, 3, 4, 4]', () => {
        const total = 20;
        const parts = 6;
        expect(almostEven(total, parts)).toEqual([3, 3, 3, 3, 4, 4]);
    });
    test('Given 54 & 6, return [ 9, 9, 9, 9, 9, 9 ]', () => {
        const total = 54;
        const parts = 6;
        expect(almostEven(total, parts)).toEqual([9, 9, 9, 9, 9, 9]);
    });
    test(`Given 4000 & 37, return [108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 109, 109, 109, 109])`, () => {
        const total = 4000;
        const parts = 37;
        expect(almostEven(total, parts)).toEqual([108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 109, 109, 109, 109]);
    });
    test('Given 244 & 14, return [17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18]', () => {
        const total = 244;
        const parts = 14;
        expect(almostEven(total, parts)).toEqual([17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18]);
    });
    test('Given 18 & 17, return [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]', () => {
        const total = 18;
        const parts = 17;
        expect(almostEven(total, parts)).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]);
    });
    test('Given 157 & 16, return [9,  9,  9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]', () => {
        const total = 157;
        const parts = 16;
        expect(almostEven(total, parts)).toEqual([9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
    });
});

//https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b/train/javascript
