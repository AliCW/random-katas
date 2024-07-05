const { englishBeggars } = require('../englishBeggars');

describe('Given an array of values and an amount of beggars, you are supposed to return an array with the sum of what each beggar brings home, assuming they all take regular turns, from the first to the last.', () => {
    test('Confirm the input array is not mutated', () => {
        const values = [1, 2, 3, 4, 5];
        const beggars = 3;
        englishBeggars(values, beggars);
        expect(values).toEqual([1, 2, 3, 4, 5]);
    });
    test('Given [1, 2, 3, 4, 5] & 1, return [15]', () => {
        const values = [1, 2, 3, 4, 5];
        const beggars = 1;
        expect(englishBeggars(values, beggars)).toEqual([15]);
    });
    test('Given [1, 2, 3, 4, 5] & 2, return [9, 6]', () => {
        const values = [1, 2, 3, 4, 5];
        const beggars = 2;
        expect(englishBeggars(values, beggars)).toEqual([9, 6]);
    });
    test('Given [1, 2, 3, 4, 5] & 3, return [5, 7, 3]', () => {
        const values = [1, 2, 3, 4, 5];
        const beggars = 3;
        expect(englishBeggars(values, beggars)).toEqual([5, 7, 3]);
    });
    test('Given [1, 2, 3, 4, 5] & 6, return [1, 2, 3, 4, 5, 0]', () => {
        const values = [1, 2, 3, 4, 5];
        const beggars = 6;
        expect(englishBeggars(values, beggars)).toEqual([1, 2, 3, 4, 5, 0]);
    });
    test('Given [1, 2, 3, 4, 5] & 0, return []', () => {
        const values = [1, 2, 3, 4, 5];
        const beggars = 0;
        expect(englishBeggars(values, beggars)).toEqual([]);
    });
    test('Given [1, 2, 3, 4, 5] & 19, return [1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]', () => {
        const values = [1, 2, 3, 4, 5];
        const beggars = 19;
        expect(englishBeggars(values, beggars)).toEqual([1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
    test('Given [328, 9, 1, 9, 203, 43, 7, 131, 353, 227, 7, 15, 44, 50] & 14, return [328, 9, 1, 9, 203, 43, 7, 131, 353, 227, 7, 15, 44, 50]', () => {
        const values = [328, 9, 1, 9, 203, 43, 7, 131, 353, 227, 7, 15, 44, 50];
        const beggars = 14;
        expect(englishBeggars(values, beggars)).toEqual([328, 9, 1, 9, 203, 43, 7, 131, 353, 227, 7, 15, 44, 50]);
    });
    test('Given [22, 339, 272, 928, 14, 3, 74, 8, 300, 854, 3, 126, 583, 4, 7] & 4, return [919, 1200, 356, 1062]', () => {
        const values = [22, 339, 272, 928, 14, 3, 74, 8, 300, 854, 3, 126, 583, 4, 7];
        const beggars = 4;
        expect(englishBeggars(values, beggars)).toEqual([919, 1200, 356, 1062]);
    });
});


// https://www.codewars.com/kata/59590976838112bfea0000fa/train/javascript