const { sequenceClassifier } = require('../sequenceClassifier');

describe('Return the correct sequence number depending on the values in the given array', () => {
    test('Checks the input array is not mutated', () => {
        const arr = [1, 2, 3, 2, 1];
        sequenceClassifier(arr);
        expect(arr).toEqual([1, 2, 3, 2, 1]);
    });
    test('Given [8, 8, 8, 8, 8, 8], return "5" (constant)', () => {
        const arr = [8, 8, 8, 8, 8, 8];
        expect(sequenceClassifier(arr)).toBe(5);
    });
    test('Given [3,5,8,1,14,3], return "0" (unordered)', () => {
        const arr = [3,5,8,1,14,3];
        expect(sequenceClassifier(arr)).toBe(0);
    });
    test('Given [3,5,8,9,14,23], return "1" (strictly increasing)', () => {
        const arr = [3,5,8,9,14,23];
        expect(sequenceClassifier(arr)).toBe(1);
    });
    test('Given [3,5,8,8,14,14], return "2" (not decreasing)', () => {
        const arr = [3,5,8,8,14,14];
        expect(sequenceClassifier(arr)).toBe(2);
    });
    test('Given [14,9,8,5,3,1], return "3" (strictly decreasing)', () => {
        const arr = [14,9,8,5,3,1];
        expect(sequenceClassifier(arr)).toBe(3);
    });
    test('Given [14,14,8,8,5,3], return "4", (not increasing)', () => {
        const arr = [14,14,8,8,5,3];
        expect(sequenceClassifier(arr)).toBe(4);
    });
});

//https://www.codewars.com/kata/5921c0bc6b8f072e840000c0/train/javascript