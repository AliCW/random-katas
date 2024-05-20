const { sortGiftCode } = require('../sortTheGiftCode');

describe('Given a string of 26 unique character, return these in a alphabetical order', () => {
    test('Given "abcdef", return "abcdef"', () => {
        const string = "abcdef";
        expect(sortGiftCode(string)).toBe("abcdef");
    });
    test('Given "pqksuvy", return "kpqsuvy"', () => {
        const string = "pqksuvy";
        expect(sortGiftCode(string)).toBe("kpqsuvy");
    });
    test('Given "zyxwvutsrqponmlkjihgfedcba", return "abcdefghijklmnopqrstuvwxyz"', () => {
        const string = "zyxwvutsrqponmlkjihgfedcba";
        expect(sortGiftCode(string)).toBe("abcdefghijklmnopqrstuvwxyz");
    });
    test('Given "qgcahkxfljwuv", return "acfghjklquvwx"', () => {
        const string = "qgcahkxfljwuv";
        expect(sortGiftCode(string)).toBe("acfghjklquvwx");
    });
    test('Given "avbncrftxpkdisl", return "abcdfiklnprstvx"', () => {
        const string = "avbncrftxpkdisl";
        expect(sortGiftCode(string)).toBe("abcdfiklnprstvx");
    });
    test('Given "qgdcezofxprtkvbhmnjyilau", return "abcdefghijklmnopqrtuvxyz"', () => {
        const string = "qgdcezofxprtkvbhmnjyilau";
        expect(sortGiftCode(string)).toBe("abcdefghijklmnopqrtuvxyz");
    });
});

//https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3/train/javascript