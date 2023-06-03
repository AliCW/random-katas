const { solve } = require('../casino-chips')

describe('each of three elements represents a type of chip, you must take one of each type. Find the most amount of times you can go', () => {
    test('test the input array is not mutated', () => {
        const array = [1, 1, 1];
        solve(array);
        expect(array).toEqual([1, 1, 1]);
    });
    test('should return a 1 when given a flat array of each type of chip', () => {
        const array = [1, 1, 1];
        expect(solve(array)).toBe(1)
    });
    test('should return 2 when given an array with two of one type of chip and one of two others', () => {
        const array = [2, 1, 1];
        expect(solve(array)).toBe(2);
    })
    test('should return 10 when given an array with 10 of one type of chip, 7 of another & 4 of another', () => {
        const array = [4, 7, 10];
        expect(solve(array)).toBe(10);
    })
});

//https://www.codewars.com/kata/5e0b72d2d772160011133654/train/javascript