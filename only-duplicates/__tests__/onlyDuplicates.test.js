const { onlyDuplicates } = require('../onlyDuplicates');

describe('Given a string, remove all unique characters & return', () => {
    test('Given "abccdefee", return "cceee"', () => {
        const string = "abccdefee";
        expect(onlyDuplicates(string)).toBe("cceee");
    });
    test('Given "hello", return "ll"', () => {
        const string = "hello";
        expect(onlyDuplicates(string)).toBe("ll");
    });
    test('Given "colloquial", return "ollol"', () => {
        const string = "colloquial";
        expect(onlyDuplicates(string)).toBe("ollol");
    });
    test('Given "foundersandcoders", return "ondersndoders"', () => {
        const string = "foundersandcoders";
        expect(onlyDuplicates(string)).toBe("ondersndoders");
    });
    test('Given "ehfgfffaihf", return "hffffhf"', () => {
        const string = "ehfgfffaihf";
        expect(onlyDuplicates(string)).toBe("hffffhf");
    });
    test('Given "hhhgfgedeei", return "hhhggeee"', () => {
        const string = "hhhgfgedeei";
        expect(onlyDuplicates(string)).toBe("hhhggeee");
    });
    test('Given "eehgfieeecg", return "eegeeeg"', () => {
        const string = "eehgfieeecg";
        expect(onlyDuplicates(string)).toBe("eegeeeg");
    });
    test('Given "egbhceceifh", return "ehceceh"', () => {
        const string = "egbhceceifh";
        expect(onlyDuplicates(string)).toBe("ehceceh");
    });
    test('Given "ifegfehhfhc", return "fefehhfh"', () => {
        const string = "ifegfehhfhc";
        expect(onlyDuplicates(string)).toBe("fefehhfh");
    });
});

//https://www.codewars.com/kata/5a1dc4baffe75f270200006b/train/javascript