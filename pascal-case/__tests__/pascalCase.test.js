const { pascalCase } = require('../pascalCase');

describe('Given a string, return it in PascalCase', () => {
    test('Given "test case", return "TestCase"', () => {
        const string = 'test case';
        expect(pascalCase(string)).toBe('TestCase');
    });
    test('Given "pascal Case method", return "PascalCaseMethod"', () => {
        const string = 'pascal Case method';
        expect(pascalCase(string)).toBe('PascalCaseMethod');
    });
    test('Given "", return ""', () => {
        const string = '';
        expect(pascalCase(string)).toBe('');
    });
    test('Given "this test should not be worth 6", return "ThisTestShouldNotBeWorth6"', () => {
        const string = "this test should not be worth 6";
        expect(pascalCase(string)).toBe('ThisTestShouldNotBeWorth6');
    });
});


//https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript