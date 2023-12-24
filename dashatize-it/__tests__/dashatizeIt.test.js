const { dashatize } = require('../dashatizeIt');

describe("Given a number, return a string with a '-' mark before & after every odd number (the string cannot start or end with '-'", () => {
    test("Given 274, returns a string that does not start or end with '-'", () => {
        const num = 32743;
        expect(dashatize(num)).toBeString();
        expect(dashatize(num)).toStartWith("3");
        expect(dashatize(num)).toEndWith("3");
    });
    test("Given 274, return a '2-7-4'", () => {
        const num = 274;
        expect(dashatize(num)).toBe("2-7-4");
    });
    test("Given 5311, return 5-3-1-1", () => {
        const num = 5311;
        expect(dashatize(num)).toBe("5-3-1-1");
    });
    test("Given 86320, return '86-3-20'", () => {
        const num = 86320;
        expect(dashatize(num)).toBe("86-3-20");
    });
    test("Given 974302, return '9-7-4-3-02'", () => {
        const num = 974302;
        expect(dashatize(num)).toBe("9-7-4-3-02");
    });
    test("Given 0, return '0'", () => {
        const num = 0;
        expect(dashatize(num)).toBe("0");
    });
    test("Given -1, return '1'", () => {
        const num = -1;
        expect(dashatize(num)).toBe("1");
    });
    test("Given -28369, return '28-3-6-9'", () => {
        const num = -28369;
        expect(dashatize(num)).toBe("28-3-6-9");
    });
    test("Given -38369, return '3-8-3-6-9'", () => {
        const num = -38369;
        expect(dashatize(num)).toBe('3-8-3-6-9');
    });
    test("Given 4961, return '4-9-6-1'", () => {
        const num = 4961;
        expect(dashatize(num)).toBe('4-9-6-1');
    });
});

//https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript