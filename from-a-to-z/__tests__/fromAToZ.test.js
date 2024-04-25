const { gimmieTheLetters } = require('../fromAToZ');

describe('Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter', () => {
    test('Given "a-b", return "ab"', () => {
        const string = "a-b";
        expect(gimmieTheLetters(string)).toBe("ab");
    });
    test('Given "A-B", return "AB"', () => {
        const string = "A-B";
        expect(gimmieTheLetters(string)).toBe("AB");
    });
    test('Given "a-z", return "abcdefghijklmnopqrstuvwxyz"', () => {
        const string = "a-z";
        expect(gimmieTheLetters(string)).toBe("abcdefghijklmnopqrstuvwxyz");
    });
    test('Given "h-o", return "hijklmno"', () => {
        const string = "h-o";
        expect(gimmieTheLetters(string)).toBe("hijklmno");
    });
    test('Given "Q-Z", return "QRSTUVWXYZ"', () => {
        const string = "Q-Z";
        expect(gimmieTheLetters(string)).toBe("QRSTUVWXYZ");
    });
    test('Given "J-J", return "J"', () => {
        const string = "J-J";
        expect(gimmieTheLetters(string)).toBe("J");
    });
});


//https://www.codewars.com/kata/6512b3775bf8500baea77663/train/javascript