const { multiplesOfThreeAndFive } = require('../multiplesOfThreeAndFiveRedux');

describe(`Return the sum of the multiples of 3 and 5 below a number. Being the galactic games, the tracks can get rather large, so your solution should work for really large numbers (greater than 1,000,000).`, () => {
    test('Given 10, return 23 (3 + 5 + 6 + 9)', () => {
        const number = 10;
        expect(multiplesOfThreeAndFive(number)).toBe(23);
    });
    test('Given 20, return 78', () => {
        const number = 20;
        expect(multiplesOfThreeAndFive(number)).toBe(78);
    });
    test('Given 100, return 2318', () => {
        const number = 100;
        expect(multiplesOfThreeAndFive(number)).toBe(2318);
    });
    test('Given 200, return 9168', () => {
        const number = 200;
        expect(multiplesOfThreeAndFive(number)).toBe(9168);
    });
    test('Given 1000, return 233168', () => {
        const number = 1000;
        expect(multiplesOfThreeAndFive(number)).toBe(233168);
    });
    test('Given 10000, return 23331668', () => {
        const number = 10000;
        expect(multiplesOfThreeAndFive(number)).toBe(23331668);
    });
    test('Given 1000000, return 233333166668', () => {
        const number = 1000000;
        expect(multiplesOfThreeAndFive(number)).toBe(233333166668);
    });
    test('Given 170031130, return 6745803177779423', () => {
        const number = 170031130;
        expect(multiplesOfThreeAndFive(number)).toBe(6745803177779423);
    });
});

//https://www.codewars.com/kata/54bb6ee72c4715684d0008f9/train/javascript
