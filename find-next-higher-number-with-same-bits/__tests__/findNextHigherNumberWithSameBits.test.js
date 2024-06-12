const { nextHigher } = require('../findNextHigherNumberWithSameBits');

describe('Given a number, find the next higher number with same "1"- Bits', () => {
    test('Given 129 (10000001), return 130 (10000010)', () => {
        const number = 129;
        expect(nextHigher(number)).toBe(130);
    });
    test('Given 1, return 2', () => {
        const number = 1;
        expect(nextHigher(number)).toBe(2);
    });
    test('Given 1022, return 1279', () => {
        const number = 1022;
        expect(nextHigher(number)).toBe(1279);
    });
    test('Given 127, return 191', () => {
        const number = 127;
        expect(nextHigher(number)).toBe(191);
    });
    test('Given 1253343, return 1253359', () => {
        const number = 1253343;
        expect(nextHigher(number)).toBe(1253359);
    });
    // test('Given 201326592, return ', () => {
    //     const number = 201326592;
    //     expect(nextHigher(number)).toBe(0);
    // });
});

