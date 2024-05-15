const { detectPangram } = require('../detectPangram');

describe('Given a string, return true if the argument is a pangram & false if not', () => {
    test('Given "", return true', () => {
        const string = "The quick brown fox jumps over the lazy dog.";
        expect(detectPangram(string)).toBe(true);
    });
    test('Given "Cwm fjord bank glyphs vext quiz", return true', () => {
        const string = "Cwm fjord bank glyphs vext quiz";
        expect(detectPangram(string)).toBe(true);
    });
    test('Given "Pack my box with five dozen liquor jugs.", return true', () => {
        const string = "Pack my box with five dozen liquor jugs.";
        expect(detectPangram(string)).toBe(true);
    });
    test('Given "How quickly daft jumping zebras vex.", return true', () => {
        const string = "How quickly daft jumping zebras vex.";
        expect(detectPangram(string)).toBe(true);
    });
    test('Given "ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ", return true', () => {
        const string = "ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ";
        expect(detectPangram(string)).toBe(true);
    });
    test(`Given "This isn't a pangram!", return false`, () => {
        const string = "This isn't a pangram!";
        expect(detectPangram(string)).toBe(false);
    });
    test('Given "abcdefghijklm opqrstuvwxyz", return false', () => {
        const string = "abcdefghijklm opqrstuvwxyz";
        expect(detectPangram(string)).toBe(false);
    });
    test('Given "Aacdefghijklmnopqrstuvwxyz", return false', () => {
        const string = "Aacdefghijklmnopqrstuvwxyz";
        expect(detectPangram(string)).toBe(false);
    });
});

//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript