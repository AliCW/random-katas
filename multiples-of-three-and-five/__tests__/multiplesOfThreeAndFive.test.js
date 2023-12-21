const { solution } = require('../multiplesOfThreeAndFive');

describe('Return the sum of all numbers below the given number that are multiples of three or five', () => {
    test('Given 4, return 3 (3=1, 5=0]', () => {
        const number = 4;
        expect(solution(number)).toBe(3);
    });
    test('Given 10, return 23', () => {
        const number = 10;
        expect(solution(number)).toBe(23);
    });
    test('Given 5055, return 5959845', () => {
        const number = 5055;
        expect(solution(number)).toBe(5959845);
    });
    test('Given 95038, return 2107559520', () => {
        const number = 95038;
        expect(solution(number)).toBe(2107559520);
    });
    test('Given 23883, return 133071300', () => {
        const number = 23883;
        expect(solution(number)).toBe(133071300);
    });
    test('Given 47945, return 536328753', () => {
        const number = 47945;
        expect(solution(number)).toBe(536328753);
    });
});


//https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript