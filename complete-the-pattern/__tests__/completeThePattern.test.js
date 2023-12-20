const { pattern } = require('../completeThePattern');

describe('Given a number. create a pattern of recinding numbers with a new line after each number pattern line', () => {
    test('Given the number 1, return 1', () => {
        const number = 1;
        expect(pattern(number)).toBe("1");
    });
    test('Given the number 0, return an empty string', () => {
        const number = 0;
        expect(pattern(number)).toBe("");
    });
    test('Given a negative number, return an empty string', () => {
        const number = -24;
        expect(pattern(number)).toBe("");
    });
    test('Given the number 2, return "22\n21"', () => {
        const number = 2;
        expect(pattern(number)).toBe("22\n21");
    });
    test('Given the number 7, return 7777777\n7666666\n7655555\n7654444\n7654333\n7654322\n7654321', () => {
        const number = 7;
        expect(pattern(number)).toBe("7777777\n7666666\n7655555\n7654444\n7654333\n7654322\n7654321");
    });
    test("Given 17, return 777777777777777777777777777\n766666666666666666666666666\n765555555555555555555555555\n765444444444444444444444444\n765433333333333333333333333\n765432222222222222222222222\n765432111111111111111111111\n765432100000000000000000000\n765432109999999999999999999\n765432109888888888888888888\n765432109877777777777777777\n765432109876666666666666666\n765432109876555555555555555\n765432109876544444444444444\n765432109876543333333333333\n765432109876543222222222222\n765432109876543211111111111\n765432109876543210000000000\n765432109876543210999999999\n765432109876543210988888888\n765432109876543210987777777\n765432109876543210987666666\n765432109876543210987655555\n765432109876543210987654444\n765432109876543210987654333\n765432109876543210987654322\n765432109876543210987654321", () => {
        const number = 27;
        expect(pattern(number)).toBe("777777777777777777777777777\n766666666666666666666666666\n765555555555555555555555555\n765444444444444444444444444\n765433333333333333333333333\n765432222222222222222222222\n765432111111111111111111111\n765432100000000000000000000\n765432109999999999999999999\n765432109888888888888888888\n765432109877777777777777777\n765432109876666666666666666\n765432109876555555555555555\n765432109876544444444444444\n765432109876543333333333333\n765432109876543222222222222\n765432109876543211111111111\n765432109876543210000000000\n765432109876543210999999999\n765432109876543210988888888\n765432109876543210987777777\n765432109876543210987666666\n765432109876543210987655555\n765432109876543210987654444\n765432109876543210987654333\n765432109876543210987654322\n765432109876543210987654321")
    });
});

//https://www.codewars.com/kata/55ae997d1c40a199e6000018/train/javascript