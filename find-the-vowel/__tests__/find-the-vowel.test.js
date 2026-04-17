const { vowelIndices } = require("../find-the-vowel");

describe("Given a string, return an array containing the vowels placements within the string", () => {
    test("Given 'Mmmmm', return []", () => {
        const string = "Mmmmm";
        expect(vowelIndices(string)).toEqual([]);
    });
    test("Given 'apple', return [1, 5]", () => {
        const string = "apple";
        expect(vowelIndices(string)).toEqual([1, 5]);
    });
    test("Given 'super', return [2, 4]", () => {
        const string = "super";
        expect(vowelIndices(string)).toEqual([2, 4]);
    });
    test("Given 'supercalifragilisticexpialidocious', return [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]", () => {
        const string = "supercalifragilisticexpialidocious";
        expect(vowelIndices(string)).toEqual([2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]);
    });
    test("Given 'jzaWFjggopVXcwtjzDmSmbLpyXfBBoIz', return [3,9,25,30,31]", () => {
        const string =  "jzaWFjggopVXcwtjzDmSmbLpyXfBBoIz";
        expect(vowelIndices(string)).toEqual([3,9,25,30,31]);
    });
    test("Given 'GboEDkUhSirwPlodsKJGkPzNVWyELomucO', return [3,4,7,10,15,27,28,30,32,34]", () => {
        const string = "GboEDkUhSirwPlodsKJGkPzNVWyELomucO";
        expect(vowelIndices(string)).toEqual([3,4,7,10,15,27,28,30,32,34]);
    });
});

//https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript


