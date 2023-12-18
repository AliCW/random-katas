const { lateClock } = require('../lateClock');

describe('Given four digits, return the time latest in the day (24 hour clock (00:00 - 23:59)', () => {
    test("Given 1 9 8 3, return '19:38'", () => {
        const a = 1;
        const b = 9;
        const c = 8;
        const d = 3;
        expect(lateClock(a, b, c, d)).toBe("19:38");
    });
    test("Given 9 1 2 5, return '21:59'", () => {
        const a = 9;
        const b = 1;
        const c = 2;
        const d = 5;
        expect(lateClock(a, b, c, d)).toBe("21:59");
    });
    test("Given 0 0 0 0, return '00:00'", () => {
        const a = 0;
        const b = 0;
        const c = 0;
        const d = 0;
        expect(lateClock(a, b, c, d)).toBe("00:00");
    });
    test("Given 1 2 3 4, return '23:41", () => {
        const a = 1;
        const b = 2;
        const c = 3;
        const d = 4;
        expect(lateClock(a, b, c, d)).toBe("23:41");
    });
    test("Given 2 7 5 1, return '21:57'", () => {
        const a = 2;
        const b = 7;
        const c = 5;
        const d = 1;
        expect(lateClock(a, b, c, d)).toBe("21:57");
    });
    test("Given 9 2 5 3, return '23:59'", () => {
        const a = 9;
        const b = 2;
        const c = 5;
        const d = 3;
        expect(lateClock(a, b, c, d)).toBe("23:59");
    });
    test("Given 0 0 1 2, return '12:00'", () => {
        const a = 0;
        const b = 0;
        const c = 1;
        const d = 2;
        expect(lateClock(a, b, c, d)).toBe("21:00");
    });
    test("Given 1 2 8 9, return '19:28'", () => {
        const a = 1;
        const b = 2;
        const c = 8;
        const d = 9;
        expect(lateClock(a, b, c, d)).toBe("19:28");
    });
});

//https://www.codewars.com/kata/58925dcb71f43f30cd00005f/train/python