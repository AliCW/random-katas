const { formatTextInput } = require('../utils/formatTextInput');

describe('Given an old sum string & updated string Remove potential errors generated by user input from the numberpad that cannot be disabled', () => {
    test('Given "9.9 - 9" & "9.9.9 - 9" & ".", return 9.9 - 9 - old correct, updated wrong (first number - decimal)', () => {
        const old = '9.9 - 9';
        const updated = '9.9.9 - 9';
        const string = '.';
        expect(formatTextInput(old, updated, string)).toBe('9.9 - 9');
    });
    test('Given "9.9 - 8.23" & "9.9 - 8.23.25" & "." - old correct, updated wrong (second number - decimal)', () => {
        const old = '9.9 - 8.23';
        const updated = '9.9 - 8.23.25';
        const string = '.';
        expect(formatTextInput(old, updated, string)).toBe('9.9 - 8.23');
    });
    test('Given "6.3 + 3.2" & "6..3 + 3.2" & ".", return "6.3 + 3.2", old correct updated wrong (following decimal)', () => {
        const old = '6.3 + 3.2';
        const updated = '6..3 + 3.2';
        const string = '.';
        expect(formatTextInput(old, updated, string)).toBe('6.3 + 3.2');
    });
    test('Given "6 + 9" & "6.9 + 9" & ".", return "6.9 + 9", updated correct (edited to decimal)', () => {
        const old = '25 + 9';
        const updated = '2.5 + 9';
        const string = '.';
        expect(formatTextInput(old, updated, string)).toBe('2.5 + 9');
    });
    test('Given "5.5 + 5.25" & "5.5 + 5.254" & "4", return "5.5 + 5.254", updated correct (number added)', () => {
        const old = '5.5 + 5.25';
        const updated = '5.5 + 5.254';
        const string = '4';
        expect(formatTextInput(old, updated, string)).toBe('5.5 + 5.254');
    });
    test('Given "0.1 + 0.2 - 36" & "0.1 + 0.2 - 3.6" & "6", return "0.1 + 0.2 + 3.6" - updated correct, three numbers (updated to decimal)', () => {
        const old = '0.1 + 0.2 - 36';
        const updated = '0.1 + 0.2 - 3.6';
        const string = '.';
        expect(formatTextInput(old, updated, string)).toBe('0.1 + 0.2 - 3.6');
    })
    test('Given "-3 - -3" & "-3 - --3" & "-", return "-3 - -3", old correct, updated wrong (second number - minus)', () => {
        const old = '-3 - -3';
        const updated = '-3 - --3';
        const string = '-';
        expect(formatTextInput(old, updated, string)).toBe('-3 - -3');
    });
    test('Given "-6 - -8" & --6 - -8", "-", return "-6 - -8", old correct, updated wrong (first number - minus)', () => {
        const old = '-6 - -8';
        const updated = '--6 - -8';
        const string = '-';
        expect(formatTextInput(old, updated, string)).toBe('-6 - -8');
    });
    test('Given "58 - -54" & "-58 - -54" & "-", return "-58 - -54", updated correct (edited to negative)', () => {
        const old = '58 - -54';
        const updated = '-58 - -54';
        const string = '-';
        expect(formatTextInput(old, updated, string)).toBe('-58 - -54')
    });
    test('Given "-24 - -102" & "-240 - -102" & "0", return "-240 - -102", updated correct (number added)', () => {
        const old = '-24 - -102';
        const updated = '-240 - -102';
        const string = '0';
        expect(formatTextInput(old, updated, string)).toBe('-240 - -102')
    });
    test('Given "-24 - -102 + 33" & "-24 - -102 + -33" & "-", return "-24 - -102 + -33", updated correct, three numbers (number added)', () => {
        const old = '-24 - -102 + 33';
        const updated = '-24 - -102 + -33';
        const string = '-';
        expect(formatTextInput(old, updated, string)).toBe('-24 - -102 + -33')
    });
    test('Given "0.24 / 263.3 - -231 * -100" & "0.24 / 263.3 - -23.1 * -100" & ".", updated correct - many numbers', () => {
        const old = '0.24 / 263.3 - -231 * -100';
        const updated = '0.24 / 263.3 - -23.1 * -100';
        const string = ".";
        expect(formatTextInput(old, updated, string)).toBe('0.24 / 263.3 - -23.1 * -100');
    });
});