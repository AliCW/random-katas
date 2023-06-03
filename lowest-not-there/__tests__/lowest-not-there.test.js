const { lowestNotThere } = require('../lowest-not-there');

describe('find the lowest possible positive value not featured in the array, return 1 for an array of negative numbers', () => {
    test('checks the initial array argument is not mutated', () => {
        const array = [-3, -1, 0, 1, 4, 6];
        lowestNotThere(array);
        expect(array).toEqual([-3, -1, 0, 1, 4, 6]);
    });    
    test('find the lowest possible value from array of positive values', () => {
        const array = [1, 3, 4, 34, 2, 1, 2, 0];
        expect(lowestNotThere(array)).toBe(33);
    });
    test('find the lowest possible value from array of positive seqential values', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(lowestNotThere(array)).toBe(9);
    });
    test('find the lowest possible value from array of positive non-seqential values, the highest being a duplicate', () => {
        const array = [1, 2, 3, 5, 6, 7, 12, 12];
        expect(lowestNotThere(array)).toBe(11);
    });
    test('return 1 for an array of negative numbers', () => {
        const array = [-1, -35, -76, -894];
        expect(lowestNotThere(array)).toBe(1);
    });
    test('find the lowest possible value from array of negative & positive values including zero', () => {
        const array = [4, -67, 12, -43, 0];
        expect(lowestNotThere(array)).toBe(11);
    });
    test('find the lowest possible value from array of when the highest value is zero', () => {
        const array = [-4, -67, -12, -43, 0];
        expect(lowestNotThere(array)).toBe(1);
    });
});