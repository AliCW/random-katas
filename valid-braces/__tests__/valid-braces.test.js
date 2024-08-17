const { validBraces } = require('../valid-braces')

describe('Given a string containing brackets: "()" & "[]" & "{}", confirm if these are opened & closed correctly', () => {
    test('Given "()", return true - single valid set', () => {
        const string = '()';
        expect(validBraces(string)).toBe(true);
    });
    test('Given "{()}", return true - multiple valid set', () => {
        const string = '{()}';
        expect(validBraces(string)).toBe(true);
    });
    test('Given "(()", return false - single invalid set', () => {
        const string = '(}';
        expect(validBraces(string)).toBe(false);
    });
    test('Given "[(])", return false - multiple invalid set', () => {
        const string = '[(])';
        expect(validBraces(string)).toBe(false);
    });
    test('Given "]}()(", return false - multiple invalid set', () => {
        const string = ']}()(';
        expect(validBraces(string)).toBe(false);
    });
    test('Given "()}){}))", return false - multiple invalid set', () => {
        const string = '()}){}))';
        expect(validBraces(string)).toBe(false);
    });
    test('Given "([{}])", return true - multiple valid set', () => {
        const string = '([{}])';
        expect(validBraces(string)).toBe(true);
    });
    test('Given "(({{[[]]}}))", return true - multiple valid set', () => {
        const string = '(({{[[]]}}))';
        expect(validBraces(string)).toBe(true);
    });
    test('Given "(((({{", return false - no closing brackets', () => {
        const string = "(((({{";
        expect(validBraces(string)).toBe(false);
    });
});

//https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript

