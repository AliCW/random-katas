const { encryptThis } = require('../encryptThis');

describe("Encrypt the given string - first letter of each word as its ACSII value & swap the second letter for the last", () => {
    test("Given 'A' return a string", () => {
        const string = 'A';
        expect(typeof encryptThis(string)).toBe('string');
        expect(encryptThis(string)).toBe('65');
    });
    test("Given 'Hello World', return 104olle 119drlo", () => {
        const string = 'hello world';
        expect(encryptThis(string)).toBe('104olle 119drlo');
    });
    test("Given 'A wise old owl lived in an oak', return 65 119esi 111dl 111lw 108dvei 105n 97n 111ka", () => {
        const string = 'A wise old owl lived in an oak';
        expect(encryptThis(string)).toBe('65 119esi 111dl 111lw 108dvei 105n 97n 111ka');
    });
    test("Given 'The more he saw the less he spoke', return '84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp'", () => {
        const string = 'The more he saw the less he spoke';
        expect(encryptThis(string)).toBe('84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp');
    });
    test("Given 'Why can we not all be like that wise old bird', return '87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri'", () => {
        const string = "Why can we not all be like that wise old bird";
        expect(encryptThis(string)).toBe('87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri');
    });
    test("Given 'The less he spoke the more he heard', return '84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare'", () => {
        const string = "The less he spoke the more he heard";
        expect(encryptThis(string)).toBe('84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare');
    });
});

//https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript