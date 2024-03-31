const { capitaliseFirst } = require('../capitaliseFirst');


describe('Capitalise the first letter of a string in one return line', () => {
    test('Given "string", return "String"', () => {
        const string = "string";
        expect(capitaliseFirst(string)).toBe("String");
    });
    test('Given "", return ""', () => {
        const string = "";
        expect(capitaliseFirst(string)).toBe("");
    });
    test('Given "s", return "S"', () => {
        const string = "s";
        expect(capitaliseFirst(string)).toBe("S");
    });
    test('Given "String", return "String"', () => {
        const string = "String";
        expect(capitaliseFirst(string)).toBe("String");
    }); 
    test('Given "STRING", return "STRING"', () => {
        const string = "STRING";
        expect(capitaliseFirst(string)).toBe("STRING");
    });
    test('Given "sTRING", return "STRING"', () => {
        const string = "sTRING";
        expect(capitaliseFirst(string)).toBe("STRING");
    });
});