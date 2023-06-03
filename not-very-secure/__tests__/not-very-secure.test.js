const { alphanumeric } = require('../not-very-secure');

describe('check if the given string is alphanumeric - upper or lower case latin and/or numbers 0-9', () => {
    test('returns false for an empty string - false test', () => {
        const string = "";
        expect(alphanumeric(string)).toBe(false);
    });
    test('checks for a string with only alphabet characters - true test', () => {
        const string = 'jimmies';
        expect(alphanumeric(string)).toBe(true);
    });
    test('checks for a string with only numbers as characters - true test', () => {
        const string = '0125846';
        expect(alphanumeric(string)).toBe(true);
    });
    test('checks for a string with both letters and numbers as characters - true test', () => {
        const string = 'jimmiesorsomething0125846';
        expect(alphanumeric(string)).toBe(true);
    });
    test('checks for a string with numbers and spaces characters - false test', () => {
        const string = '012 84 6';
        expect(alphanumeric(string)).toBe(false);
    });
    test('checks for a string with special characters - false test', () => {
        const string = 'hello-_world!';
        expect(alphanumeric(string)).toBe(false);
    });
    test('checks for a string with many special characters, letters and numbers - false test', () => {
        const string = 'hello123world-_!{}()"£$%^&*¬`,.<>/@~#=+';
        expect(alphanumeric(string)).toBe(false);
    });
});

//https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/javascript