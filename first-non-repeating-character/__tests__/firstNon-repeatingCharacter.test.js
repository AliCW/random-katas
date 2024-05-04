const { firstNonRepeatingLetter } = require('../firstNon-repeatingCharacter');

describe('Given a string, return the first non-repeating character - upper & lower case count as the same letter, return "" if all repeat', () => {
    test('Given "a", return "a" (single character test)', () => {
        const string = "a";
        expect(firstNonRepeatingLetter(string)).toBe("a");
    });
    test('Given "stress", return "t"', () => {
        const string = "stress";
        expect(firstNonRepeatingLetter(string)).toBe("t");
    });
    test('Given "moonmen", return "e"', () => {
        const string = "moonmen";
        expect(firstNonRepeatingLetter(string)).toBe("e");
    });
    test('Given "sTreSS", return "T" (case-sensitive test)', () => {
        const string = "sTreSS";
        expect(firstNonRepeatingLetter(string)).toBe("T");
    });
    test(`Given "Go hang a salami, I'm a lasagna hog!", return "G" (case-sensitive test)`, () => {
        const string = "Go hang a salami, I'm a lasagna hog!";
        expect(firstNonRepeatingLetter(string)).toBe(",");
    });
    test('Given "aaaa", return "" (duplicate character test)', () => {
        const string = "aaaa";
        expect(firstNonRepeatingLetter(string)).toBe("");
    });
    test('Given "xoxoxoxo", return "" (duplicate character test)', () => {
        const string = "xoxoxoxo";
        expect(firstNonRepeatingLetter(string)).toBe("");
    });
    test('Given "∞§ﬁ›ﬂ∞§", return "ﬁ" (odd character test)', () => {
        const string = "∞§ﬁ›ﬂ∞§";
        expect(firstNonRepeatingLetter(string)).toBe("ﬁ");
    });
});

//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
