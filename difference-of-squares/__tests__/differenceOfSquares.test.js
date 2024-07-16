const { differenceOfSquares } = require('../differenceOfSquares');

describe('Find the difference between the square of the sum of the first n natural numbers (1 <= n <= 100) and the sum of their squares.', () => {
    test('Given 10, return 2640', () => {
        const number = 10;
        expect(differenceOfSquares(number)).toBe(2640);
    });
    test('Given 5, return 170', () => {
        const number = 5;
        expect(differenceOfSquares(number)).toBe(170);
    });
    test('Given 100, return 25164150', () => {
        const number = 100;
        expect(differenceOfSquares(number)).toBe(25164150);
    });
    test('Given 40, return 650260', () => {
        const number = 40;
        expect(differenceOfSquares(number)).toBe(650260);
    });
    test('Given 79, return 9818120', () => {
        const number = 79;
        expect(differenceOfSquares(number)).toBe(9818120);
    });
    test('Given 1, return 0', () => {
        const number = 1;
        expect(differenceOfSquares(number)).toBe(0);
    });
    test('Given 53, return 1996722', () => {
        const number = 53;
        expect(differenceOfSquares(number)).toBe(1996722);
    });
    test('Given 72, return 6779364', () => {
        const number = 72;
        expect(differenceOfSquares(number)).toBe(6779364);
    });
    test('Given 60, return 3275090', () => {
        const number = 60;
        expect(differenceOfSquares(number)).toBe(3275090);
    });
});


//https://www.codewars.com/kata/558f9f51e85b46e9fa000025/train/javascript