const { quicksum } = require('../quicksum');

describe("Return placement * value of each capital letter, if the packet does not start or end with a capital letter, or contain punctuation or lowercase characters, return 0", () => {
    test("Given ACM, return 46", () => {
        const packet = "ACM";
        expect(quicksum(packet)).toBe(46);
    });
    test("Given ' HH', return 0", () => {
        const packet = " HH";
        expect(quicksum(packet)).toBe(0);
    });
    test("Given 'HH ', return 0", () => {
        const packet = "HH ";
        expect(quicksum(packet)).toBe(0);
    });
    test("Given '123454', return 0", () => {
        const packet = "123454";
        expect(quicksum(packet)).toBe(0);
    });
    test("Given 'abcdefg', return 0", () => {
        const packet = "abcdefg";
        expect(quicksum(packet)).toBe(0);
    });
    test("Given 'A C M', return 75", () => {
        const packet = "A C M";
        expect(quicksum(packet)).toBe(75);
    });
    test("Given 'axg', return 0", () => {
        const packet = "axg";
        expect(quicksum(packet)).toBe(0);
    });
    test("Given 'MID CENTRAL', return 650", () => {
        const packet = "MID CENTRAL";
        expect(quicksum(packet)).toBe(650);
    });
    test("Given '???', return 0", () => {
        const packet = "???";
        expect(quicksum(packet)).toBe(0);
    });
});

//https://www.codewars.com/kata/569924899aa8541eb200003f/train/javascript