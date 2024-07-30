const { breakCamelCase } = require('../breakCamelCase');

describe('Given a string with CamelCase string, seperate these with a space & return the string', () => {
    test('Given "test", return "test"', () => {
        const string = "test";
        expect(breakCamelCase(string)).toBe("test");
    });
    test('Given "goodOwn", return "good Own"', () => {
        const string = "goodOwn";
        expect(breakCamelCase(string)).toBe("good Own");
    });
    test('Given "helloWorld", return "hello World"', () => {
        const string = "helloWorld";
        expect(breakCamelCase(string)).toBe("hello World");
    });
    test('Given "This Is camelCase", return "this is camel Case"', () => {
        const string = "This Is camelCase";
        expect(breakCamelCase(string)).toBe("This Is camel Case");
    });
    test('Given "camelCasingTest", return "camel Casing Test"', () => {
        const string = "camelCasingTest";
        expect(breakCamelCase(string)).toBe("camel Casing Test");
    });
    test('Given "lookNounsFewDayWork", return "look Nouns Few Day Work"', () => {
        const string = "lookNounsFewDayWork";
        expect(breakCamelCase(string)).toBe("look Nouns Few Day Work");
    });
    test('Given "placeProblemProblemLongOld", return "place Problem Problem Long Old"', () => {
        const string = "placeProblemProblemLongOld";
        expect(breakCamelCase(string)).toBe("place Problem Problem Long Old");
    });
    test('Given "childHaveBadProblemOwnGreatOldSmall", return "child Have Bad Problem Own Great Old Small"', () => {
        const string = "childHaveBadProblemOwnGreatOldSmall";
        expect(breakCamelCase(string)).toBe("child Have Bad Problem Own Great Old Small");
    });
    test('Given "numberOldFewLeavePointRightLifeFact", return "number Old Few Leave Point Right Life Fact"', () => {
        const string = "numberOldFewLeavePointRightLifeFact";
        expect(breakCamelCase(string)).toBe("number Old Few Leave Point Right Life Fact");
    });
});


//https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript