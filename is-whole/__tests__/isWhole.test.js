const { isWhole } = require('../isWhole');

describe('Returns true if the number is whole, false if not', () => {
    test('Returns true given whole number', () => {
        const number = 10;
        expect(isWhole(number)).toBe(true);
    });
    test('Returns false given a decimal number', () => {
        const number = 10.1;
        expect(isWhole(number)).toBe(false);
    });
});