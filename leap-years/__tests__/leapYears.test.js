const { isLeapYear } = require('../leapYears');

describe('Given a year number, return a boolean indicating whether the date is a leap year', () => {
    test('should return true for the given year: 2020', () => {
        const year = 2020;
        expect(isLeapYear(year)).toBe(true);
    });
    test('should return false for the given year: 2100', () => {
        const year = 2100;
        expect(isLeapYear(year)).toBe(false);
    });
    test('should return true for the given year: 2000', () => {
        const year = 2000;
        expect(isLeapYear(year)).toBe(true);
    });
    test('should return true for the given year: 1588', () => {
        const year = 1588;
        expect(isLeapYear(year)).toBe(true);
    });
    test('should return false for the given year: 1687', () => {
        const year = 1687;
        expect(isLeapYear(year)).toBe(false);
    });
});


//https://www.codewars.com/kata/526c7363236867513f0005ca/train/javascript