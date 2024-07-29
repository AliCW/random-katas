const { findMaxDivisors } = require('../findMaxDivisors');

describe('Given two numbers, find the number with the maximum possible divisors between the two', () => {
    test('Given 15 & 30, return 24', () => {
        const a = 15;
        const b = 30;
        expect(findMaxDivisors(a, b)).toBe(24);
    });
    test('Given 1 & 2, return 2', () => {
        const a = 1;
        const b = 2;
        expect(findMaxDivisors(a, b)).toBe(2);
    });
    test('Given 52 & 156, return 120', () => {
        const a = 52;
        const b = 156;
        expect(findMaxDivisors(a, b)).toBe(120);
    });
    test('Given 86 & 1521, return 1260', () => {
        const a = 86;
        const b = 1521;
        expect(findMaxDivisors(a, b)).toBe(1260);
    });
    test('Given 46 & 4051, return 2520', () => {
        const a = 46;
        const b = 4051;
        expect(findMaxDivisors(a, b)).toBe(2520);
    });
    test('Given 85 & 4717, return 2520', () => {
        const a = 85;
        const b = 4717;
        expect(findMaxDivisors(a, b)).toBe(2520);
    });
    test('Given 83 & 6760, return 5040', () => {
        const a = 83;
        const b = 6760;
        expect(findMaxDivisors(a, b)).toBe(5040);
    });
    test('Given 54 & 62, return 60', () => {
        const a = 54;
        const b = 62;
        expect(findMaxDivisors(a, b)).toBe(60);
    });
});


//https://www.codewars.com/kata/588c0a38b7cd14085300003f/train/javascript