const { isValidIPv4 } = require('../validIPv4');

describe('Determine if the given string is a valid IPv4 address', () => {
    test('Given "192.168.1.1", return true', () => {
        const string = '192.168.1.1';
        expect(isValidIPv4(string)).toBe(true);
    });
    test('Given "0.0.0.0", return true', () => {
        const string = '0.0.0.0';
        expect(isValidIPv4(string)).toBe(true);
    });
    test('Given "12.255.56.1", return true', () => {
        const string = '12.255.56.1';
        expect(isValidIPv4(string)).toBe(true);
    });
    test('Given "", return false', () => {
        const string = '';
        expect(isValidIPv4(string)).toBe(false);
    });
    test('Given "123.456.789.10", return false', () => {
        const string = '123.456.789.10';
        expect(isValidIPv4(string)).toBe(false);
    });
    test('Given "12.34.56", return false', () => {
        const string = '12.34.56';
        expect(isValidIPv4(string)).toBe(false);
    });
    test('Given "137.255.156.100", return true', () => {
        const string = '137.255.156.100';
        expect(isValidIPv4(string)).toBe(true);
    });
    test('Given "abc.def.ghi.jkl", return false', () => {
        const string = 'abc.def.ghi.jkl';
        expect(isValidIPv4(string)).toBe(false);
    });
    test('Given "01.02.03.04", return false', () => {
        const string = '01.02.03.04';
        expect(isValidIPv4(string)).toBe(false);
    });
    test('Given "123,45,67,89", return false', () => {
        const string = '123,45,67,89';
        expect(isValidIPv4(string)).toBe(false);
    });
    test('Given "192.158.0.0.", return false', () => {
        const string = '192.158.0.0.';
        expect(isValidIPv4(string)).toBe(false);
    });
    test('Given " 1.2.3.4", return false', () => {
        const string =' 1.2.3.4';
        expect(isValidIPv4(string)).toBe(false);
    });
    test('Given "1.2.3.4 ", return false', () => {
        const string = '1.2.3.4 ';
        expect(isValidIPv4(string)).toBe(false);
    });
    test('Given "1e0.1e1.1e2.2e2", return false', () => {
        const string = '1e0.1e1.1e2.2e2';
        expect(isValidIPv4(string)).toBe(false);
    });
    test('Given 12.34.56.-7", return false', () => {
        const string = '12.34.56.-7';
        expect(isValidIPv4(string)).toBe(false);
    });
    test('Given "1.2.3.4\\n", return false', () => {
        const string = '1.2.3.4\n';
        expect(isValidIPv4(string)).toBe(false);
    });
    test('Given "\\n1.2.3.4", return false', () => {
        const string = '\n1.2.3.4';
        expect(isValidIPv4(string)).toBe(false);
    });
    test('Given "56.135.147.", return false', () => {
        const string = '56.135.147.';
        expect(isValidIPv4(string)).toBe(false);
    });
    test('Given "bc180.212.251.61", return false', () => {
        const string = 'bc180.212.251.61';
        expect(isValidIPv4(string)).toBe(false);
    });
    test('Given "30.221.94.239", return true', () => {
        const string = '30.221.94.239';
        expect(isValidIPv4(string)).toBe(true);
    });
    test('Given ".180.42.225", return false', () => {
        const string = '.180.42.225';
        expect(isValidIPv4(string)).toBe(false);
    });
});

//https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript
