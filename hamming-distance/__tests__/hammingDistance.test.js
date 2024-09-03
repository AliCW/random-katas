const { hammingDistance } = require('../hammingDistance');

describe('Given two strings of equal length, return the number of different characters between them', () => {
    test('Given "string" & "string", return 0', () => {
        const string1 = 'string';
        const string2 = 'string';
        expect(hammingDistance(string1, string2)).toBe(0);
    });
    test('Given "I like turtles" & "I like turkeys", return 3', () => {
        const string1 = 'I like turtles';
        const string2 = 'I like turkeys';
        expect(hammingDistance(string1, string2)).toBe(3);
    });
    test('Given "a man a plan a canal" & "a man a plan sobanal", return 3', () => {
        const string1 = 'a man a plan a canal';
        const string2 = 'a man a plan sobanal';
        expect(hammingDistance(string1, string2)).toBe(3);
    });
    test('Given "hamming and cheese" & "Hamming and Cheese", return 2', () => {
        const string1 = 'hamming and cheese';
        const string2 = 'Hamming and Cheese';
        expect(hammingDistance(string1, string2)).toBe(2);
    });
    test('Given "espresso" & "Expresso", return 2', () => {
        const string1 = 'espresso';
        const string2 = 'Expresso';
        expect(hammingDistance(string1, string2)).toBe(2);
    });
    test('Given "old father, old artificer" & "of my soul the uncreated", return 24', () => {
        const string1 = 'old father, old artificer';
        const string2 = 'of my soul the uncreated';
        expect(hammingDistance(string1, string2)).toBe(24);
    });
});



//https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69