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
});


//(divNum(52,156),120); 