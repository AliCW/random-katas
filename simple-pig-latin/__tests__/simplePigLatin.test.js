const { pigIt } = require ("../simplePigLatin");

describe("Move the first letter of each word to the end of it, then add 'ay' to the end of the word. Leave punctuation marks untouched.", () => {
    test("Given 'Pig latin is cool' return igPay atinlay siay oolcay", () => {
        const str = "Pig latin is cool";
        expect(pigIt(str)).toBe("igPay atinlay siay oolcay")
    });
    test("Given 'This is my string' return hisTay siay ymay tringsay", () => {
        const str = "This is my string";
        expect(pigIt(str)).toBe("hisTay siay ymay tringsay");
    });
    test("Given 'Hello world !' return elloHay orldway !", () => {
        const str = "Hello world ! £";
        expect(pigIt(str)).toBe("elloHay orldway ! £");
    });
    test("Given 'Quis custodiet ipsos custodes ?' return uisQay ustodietcay psosiay ustodescay ?", () => {
        const str = "Quis custodiet ipsos custodes ?"
        expect(pigIt(str)).toBe("uisQay ustodietcay psosiay ustodescay ?")
    });
});

//https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript