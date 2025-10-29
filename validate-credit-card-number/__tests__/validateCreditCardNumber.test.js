const { validate } = require('../validateCreditCardNumber');

describe('Implement the Luhn algorithm', () => {
    test('Given 123, return false', () => {
        const number = 123;
        expect(validate(number)).toBe(false);
    });
    test('Given 1, return false', () => {
        const number = 1;
        expect(validate(number)).toBe(false);
    });
    test('Given 1230, return true', () => {
        const number = 1230;
        expect(validate(number)).toBe(true);
    });
    test('Given 2121, return true', () => {
        const number = 2121;
        expect(validate(number)).toBe(true);
    });
    test('Given 851, return false', () => {
        const number = 851;
        expect(validate(number)).toBe(true);
    });
    test('Given 8675309, return false', () => {
        const number = 8675309;
        expect(validate(number)).toBe(false);
    });
    test('Given 2626262626262626, return true', () => {
        const number = 2626262626262626;
        expect(validate(number)).toBe(true);
    });
});

//https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2/train/javascript