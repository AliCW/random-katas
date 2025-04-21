const { trickyDoubles } = require('../trickyDoubles');

describe(`Write a function that returns twice the input value, unless the value is a "tricky double."
        A number is considered a tricky double if it consists of two identical halves with no extra digits. For example, 44, 1212, and 7777 are tricky doubles because each half of the number is the same (4 and 4, 12 and 12, 77 and 77).
        If the input value is a tricky double, return it as-is. Otherwise, return the value multiplied by 2.`, () => {
    test('Given 44, return 44', () => {
        const number = 44;
        expect(trickyDoubles(number)).toBe(44);
    });
    test('Given 4, return 8', () => {
        const number = 4;
        expect(trickyDoubles(number)).toBe(8);
    });
    test('Given 100100, return 100100', () => {
        const number = 100100;
        expect(trickyDoubles(number)).toBe(100100);
    });
    test('Given 1234, return 2468', () => {
        const number = 1234;
        expect(trickyDoubles(number)).toBe(2468);
    });
    test('Given 91794, return 183588', () => {
        const number = 91794;
        expect(trickyDoubles(number)).toBe(183588);
    });
    test('Given 2222, return 2222', () => {
        const number = 2222;
        expect(trickyDoubles(number)).toBe(2222);
    });
    test('Given 123412345, return 246824690', () => {
        const number = 123412345;
        expect(trickyDoubles(number)).toBe(246824690);
    });
});

//https://www.codewars.com/kata/56971747aa359bdbf800004d/train/javascript