const { whatCentury } = require('../whatCenturyIsIt');

describe('Given a year, return the correct century', () => {
    test('Given 1999, return 20th', () => {
        const year = 1999;
        expect(whatCentury(year)).toBe("20th");
    });
    test('Given 2011, return 21st', () => {
        const year = 2011;
        expect(whatCentury(year)).toBe("21st");
    });
    test('Given 2154, return 22nd', () => {
        const year = 2154;
        expect(whatCentury(year)).toBe("22nd");
    });
    test('Given 2259, return 23rd', () => {
        const year = 2259;
        expect(whatCentury(year)).toBe("23rd");
    });
    test('Given 1124, return 12th', () => {
        const year = 1124;
        expect(whatCentury(year)).toBe("12th");
    });
    test('Given 2000, return 20th', () => {
        const year = 2000;
        expect(whatCentury(year)).toBe("20th");
    });
    test('Given 1234, return 13th', () => {
        const year = 1234;
        expect(whatCentury(year)).toBe("13th");
    });
    test('Given 1023, return 11th', () => {
        const year = 1023;
        expect(whatCentury(year)).toBe("11th");
    });
    test('Given 8900, return 89th', () => {
        const year = 8900;
        expect(whatCentury(year)).toBe("89th");
    });
});