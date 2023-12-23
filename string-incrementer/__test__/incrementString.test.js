const { incrementString } = require('../incrementString');

describe("Icrement the string, if no number is appended, add a one - consider leading zeros", () => {
    test("Given 'string001', returns 'string002'", () => {
        const string = 'string001';
        expect(incrementString(string)).toBe('string002');
    });
    test("Given 'string', return 'string1'", () => {
        const string = 'string';
        expect(incrementString(string)).toBe('string1');
    });
    test("Given 'string999', return string1000", () => {
        const string = 'string999';
        expect(incrementString(string)).toBe('string1000');
    });
    test("Given 'string00999', return 'string01000'", () => {
        const string = 'string00999';
        expect(incrementString(string)).toBe('string01000');
    });
    test("Given '1', return '2'", () => {
        const string = '1';
        expect(incrementString(string)).toBe('2');
    });
    test("Given '009', return '010'", () => {
        const string = '009';
        expect(incrementString(string)).toBe('010');
    });
    test("Given 'fo99obar99', return 'fo99obar100'", () => {
        const string = 'fo99obar99';
        expect(incrementString(string)).toBe('fo99obar100');
    });
});

//https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript