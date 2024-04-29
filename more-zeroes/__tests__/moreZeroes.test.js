const { moreZeroes } = require('../moreZeroes');

describe(`Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.
        You should remove any duplicate characters, keeping the first occurrence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.`, () => {
    test("Given 'abcde', return ['a','b','d']", () => {
        const string = "abcde";
        expect(moreZeroes(string)).toEqual(['a', 'b', 'd']);
    });
    test("Given 'Great job!'), return ['a', ' ', 'b', '!']", () => {
        const string = "Great job!";
        expect(moreZeroes(string)).toEqual(['a', ' ', 'b', '!']);
    });
    test("Given 'DIGEST'), return ['D','I','E','T']", () => {
        const string = "DIGEST";
        expect(moreZeroes(string)).toEqual(['D', 'I', 'E', 'T']);
    });
    test("Given 'abcdeabcde'), return ['a','b','d'],'Should not return duplicates values'", () => {
        const string = "abcdeabcde";
        expect(moreZeroes(string)).toEqual(['a', 'b', 'd']);
    });
    test("Given 'Forgiveness is the fragrance that the violet sheds on the heal that has crushed it', return ['F', ' ', 'h', 'a', 'd']", () => {
        const string = "Forgiveness is the fragrance that the violet sheds on the heal that has crushed it";
        expect(moreZeroes(string)).toEqual(["F", " ", "h", "a", "d"]);
    });
    test("Given 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_', return ['a', 'b', 'd', 'h', 'p', 'A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'L', 'P', 'Q', 'R', 'T', 'X', '0']", () => {
        const string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
        expect(moreZeroes(string)).toEqual(['a', 'b', 'd', 'h', 'p', 'A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'L', 'P', 'Q', 'R', 'T', 'X', '0']);
    });
    test("Given 'thequickbrownfoxjumpsoverthelazydog', return ['h', 'b', 'p', 'a', 'd']", () => {
        const string = "thequickbrownfoxjumpsoverthelazydog";
        expect(moreZeroes(string)).toEqual(['h', 'b', 'p', 'a', 'd']);
    });
    test(`Given "THEQUICKBROWNFOXJUMPSOVERTHELAZYDOG", return ['T', 'H', 'E', 'Q', 'I', 'C', 'B', 'R', 'F', 'X', 'J', 'P', 'L', 'A', 'D']`, () => {
        const string = "THEQUICKBROWNFOXJUMPSOVERTHELAZYDOG";
        expect(moreZeroes(string)).toEqual( ['T', 'H', 'E', 'Q', 'I', 'C', 'B', 'R', 'F', 'X', 'J', 'P', 'L', 'A', 'D']);
    });
});

//https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/train/javascript
