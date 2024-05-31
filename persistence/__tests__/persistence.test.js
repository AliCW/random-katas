const { persistence } = require('../persistence');

describe('Given a positive parameter (number) and return its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit', () => {
    test('Given 4, return 0', () => {
        const number = 4;
        expect(persistence(number)).toBe(0);
    });
    test('Given 39, return 3', () => {
        const number = 39;
        expect(persistence(number)).toBe(3);
    });
    test('Given 25, return 2', () => {
        const number = 25;
        expect(persistence(number)).toBe(2);
    });
    test('Given 999, return 4', () => {
        const number = 999;
        expect(persistence(number)).toBe(4);
    });
    test('Given 1678, return 4', () => {
        const number = 1678;
        expect(persistence(number)).toBe(4);
    });
    test('Given 12, return 1', () => {
        const number = 12;
        expect(persistence(number)).toBe(1);
    });
    test('Given 4021435, return 1', () => {
        const number = 4021435;
        expect(persistence(number)).toBe(1);
    });
    test('Given 123456789, return 2', () => {
        const number = 123456789;
        expect(persistence(number)).toBe(2);
    });
});

//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript