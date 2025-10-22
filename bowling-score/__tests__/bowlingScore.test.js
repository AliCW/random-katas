const { bowlingScore } = require('../bowlingScore');

describe('Given an array of pins knocked down, calcuclate the score (ten pin bowling: https://en.wikipedia.org/wiki/Tenpin_bowling#Scoring', () => {
    test('Confirm the input array is not mutated', () => {
        const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        bowlingScore(array)
        expect(array).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
    test('Given [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], return 0', () => {
        const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        expect(bowlingScore(array)).toBe(0);
    });
    test('Given [9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9], return 190', () => {
        const array = [9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9];
        expect(bowlingScore(array)).toBe(190);
    });
    test('Given [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], return 300', () => {
        const array = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
        expect(bowlingScore(array)).toBe(300);
    });
});