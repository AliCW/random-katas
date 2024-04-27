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
    test("Given '£[abcABCabcABC]$', return ['a', 'b', 'c', 'A', 'B', 'C'", () => {
        const string = "£[abcABCabcABC]$";
        expect(moreZeroes(string)).toEqual(['a', 'b', 'A', 'B', 'C', '$']);
    });
});

//https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/train/javascript
