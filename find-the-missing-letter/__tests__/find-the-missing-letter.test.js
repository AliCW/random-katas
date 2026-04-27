const { findMissingLetter } = require("../find-the-missing-letter");

describe("Given an array of letters in increasing order, return the missing letter from the array", () => {
    test("Given ['a', 'b', 'c', 'd', 'f'], return 'e'", () => {
        const array = ["a", "b", "c", "d", "f"];
        expect(findMissingLetter(array)).toBe("e");
    });
    test("Given ['O', 'Q', 'R', 'S'], return 'P'", () => {
        const array = ["O", "Q", "R", "S"];
        expect(findMissingLetter(array)).toBe("P");
    });
    test("Given ['c', 'd', 'e', 'g', 'h', 'i'], return 'f'", () => {
        const array = ["c", "d", "e", "g", "h", "i"];
        expect(findMissingLetter(array)).toBe("f");
    });
    test("Given ['M', 'O', 'P', 'Q'], return 'N'", () => {
        const array = ["M", "O", "P", "Q"];
        expect(findMissingLetter(array)).toBe("N");
    });
    test("Given ['F', 'G', 'H', 'J', 'K', 'L', 'M', 'N'], return 'I'", () => {
        const array = ["F", "G", "H", "J", "K", "L", "M", "N"];
        expect(findMissingLetter(array)).toBe("I");
    });
    test("Given ['q', 'r', 's', 't', 'v', 'w', 'x'], return 'u'", () => {
        const array = ["q", "r", "s", "t", "v", "w", "x"];
        expect(findMissingLetter(array)).toBe("u");
    });
});

//https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript