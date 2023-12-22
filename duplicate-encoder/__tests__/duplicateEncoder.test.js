const { duplicateEncoder } = require('../duplicateEncoder');

describe("Encode the given string, if a char appears once, replace with '(', else replace with ')' (ignoring case)", () => {
    test("Given 'din', return '((('", () => {
        const string = "din";
        expect(typeof duplicateEncoder(string)).toBe('string')
        expect(duplicateEncoder(string)).toBe("(((");
    });
    test("Given 'recede', return '()()()'", () => {
        const string = "recede"
        expect(duplicateEncoder(string)).toBe("()()()");
    });
    test("Given 'Success', return ')())())'", () => {
        const string = "Success";
        expect(duplicateEncoder(string)).toBe(")())())");
    });
    test("Given '(( @', return '))(('", () => {
        const string = "(( @";
        expect(duplicateEncoder(string)).toBe("))((");
    });
    test("Given 'abHJHHHnxHuHHHHwH', return '(()()))(()())))()'", () => {
        const string = "abHJHHHnxHuHHHHwH";
        expect(duplicateEncoder(string)).toBe("(()()))(()())))()");
    });
    test("Given '@@l@e@)@@Hv@G', return '))()()())(()('", () => {
        const string = "@@l@e@)@@Hv@G";
        expect(duplicateEncoder(string)).toBe('))()()())(()(');
    });
    test("Given 'Oxn(((((lRJ((k(@TH', return '((()))))((())()((('", () => {
        const string = "Oxn(((((lRJ((k(@TH";
        expect(duplicateEncoder(string)).toBe('((()))))((())()(((');
    });
});

//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript