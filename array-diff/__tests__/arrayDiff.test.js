const { arrayDiff } = require('../arrayDiff');

describe('return the difference between two arrays', () => {
    test('checks the input arrays are not mutated', () => {
        const a = [1, 2];
        const b = [1];
        arrayDiff(a, b);
        expect(a).toEqual([1, 2]);
        expect(b).toEqual([1]);
    })
    test('Given [1,2], [1], return [2]', () => {
        const a = [1, 2];
        const b = [1];
        expect(arrayDiff(a, b)).toEqual([2])
    });
    test('Given [1,2,2], [1]), return [2,2]', () => {
        const a = [1, 2, 2];
        const b = [1];
        expect(arrayDiff(a, b)).toEqual([2, 2]);
    });
    test('Given [1,2,2], [2]), return [1]', () => {
        const a = [1, 2, 2];
        const b = [2];
        expect(arrayDiff(a, b)).toEqual([1]);
    });
    test('Given [1,2,2], []), return [1,2,2]', () => {
        const a = [1, 2, 2];
        const b = [];
        expect(arrayDiff(a, b)).toEqual([1, 2, 2]);
    });
    test('Given [], [1, 2, 2], return []', () => {
        const a = [];
        const b = [1, 2, 2];
        expect(arrayDiff(a, b)).toEqual([]);
    });
    test('Given ([16,-6,19,19,2,-12,1,19,10,-15,-3,-3,18,-12,1,-4],[16,-6,19,19,2]), return [-12,  1,  10, -15, -3,-3, 18, -12,   1, -4]', () => {
        const a = [16,-6,19,19,2,-12,1,19,10,-15,-3,-3,18,-12,1,-4];
        const b = [16,-6,19,19,2];
        expect(arrayDiff(a, b)).toEqual([-12,  1,  10, -15, -3,-3, 18, -12,   1, -4]);
    });
});

//https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript