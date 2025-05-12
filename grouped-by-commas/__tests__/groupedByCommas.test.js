const { groupByCommas } = require('../groupedByCommas');

describe(`Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.`, () => {
    test('Given 1, return "1"', () => {
        const number = 1;
        expect(groupByCommas(number)).toBe('1');
    });
    test('Given 12, return "12"', () => {
        const number = 12;
        expect(groupByCommas(number)).toBe('12');
    });
    test('Given 123, return "123"', () => {
        const number = 123;
        expect(groupByCommas(number)).toBe('123');
    });
    test('Given 1234, return "1,234"', () => {
        const number = 1234;
        expect(groupByCommas(number)).toBe('1,234');
    });
    test('Given 12345, return "12,345"', () => {
        const number = 12345;
        expect(groupByCommas(number)).toBe('12,345');
    });
    test('Given 123456, return "123,456"', () => {
        const number = 123456;
        expect(groupByCommas(number)).toBe('123,456');
    });
    test('Given 1234567, return "1,234,567"', () => {
        const number = 1234567;
        expect(groupByCommas(number)).toBe('1,234,567');
    });
    test('Given 12345678, return "12,345,678"', () => {
        const number = 12345678;
        expect(groupByCommas(number)).toBe('12,345,678');
    });
    test('Given 123456789, return "123,456,789"', () => {
        const number = 123456789;
        expect(groupByCommas(number)).toBe('123,456,789');
    });
    test('Given 1234567890, return "1,234,567,890"', () => {
        const number = 1234567890;
        expect(groupByCommas(number)).toBe('1,234,567,890');
    });
});

//https://www.codewars.com/kata/5274e122fc75c0943d000148/train/javascript