const { expandedForm } = require('../expandedForm');

describe('Given a number, return its expanded form, eg: (12) => "10 + 2", (70304) => "70000" + 300 + 4"', () => {
    test('Given 8, return "8"', () => {
        const number = 8;
        expect(expandedForm(number)).toBe('8');
    });
    test('Given 12, return "10 + 2"', () => {
        const number = 12;
        expect(expandedForm(number)).toBe('10 + 2');
    });
    test('Given 42, return "40 + 2"', () => {
        const number = 42;
        expect(expandedForm(number)).toBe('40 + 2');
    });
    test('Given 70304, return "70000 + 300 + 4"', () => {
        const number = 70304;
        expect(expandedForm(number)).toBe('70000 + 300 + 4');
    });
    test('Given 9000000, return "9000000"', () => {
        const number = 9000000;
        expect(expandedForm(number)).toBe('9000000');
    });
    test('Given 11300030, return "10000000 + 1000000 + 300000 + 30"', () => {
        const number = 11300030;
        expect(expandedForm(number)).toBe('10000000 + 1000000 + 300000 + 30');
    });
    test('Given 522002014452044510, return "500000000000000000 + 20000000000000000 + 2000000000000000 + 2000000000000 + 10000000000 + 4000000000 + 400000000 + 50000000 + 2000000 + 40000 + 4000 + 500"', () => {
        const number = 522002014452044510;
        expect(expandedForm(number)).toBe('500000000000000000 + 20000000000000000 + 2000000000000000 + 2000000000000 + 10000000000 + 4000000000 + 400000000 + 50000000 + 2000000 + 40000 + 4000 + 500');
    });
});

//https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript