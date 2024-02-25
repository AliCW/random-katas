const { toPretty } = require('../prettyDate');

describe('Given the time in seconds, return a pretty formatted date - show the highest measurement & round', () => {
    test('Given 0, return "just now"', () => {
        const seconds = 0;
        expect(toPretty(seconds)).toBe('just now');
    });
    test('Given 1, return "a second ago"', () => {
        const seconds = 1;
        expect(toPretty(seconds)).toBe('a second ago');
    });
    test('Given 30, return "30 seconds ago"', () => {
        const seconds = 30;
        expect(toPretty(seconds)).toBe('30 seconds ago');
    });
    test('Given 90, return "a minute ago"', () => {
        const seconds = 90;
        expect(toPretty(seconds)).toBe('a minute ago');
    });
    test('Given 180, return "3 minutes ago"', () => {
        const seconds = 180;
        expect(toPretty(seconds)).toBe('3 minutes ago');
    });
    test('Given 4000, return "an hour ago"', () => {
        const seconds = 4000;
        expect(toPretty(seconds)).toBe('an hour ago');
    });
    test('Given 40000, return "11 hours ago"', () => {
        const seconds = 40000;
        expect(toPretty(seconds)).toBe('11 hours ago');
    });
    test('Given 140000, return "a day ago"', () => {
        const seconds = 140000;
        expect(toPretty(seconds)).toBe('a day ago');
    });
    test('Given 400000, return "4 days ago"', () => {
        const seconds = 400000;
        expect(toPretty(seconds)).toBe('4 days ago');
    });
    test('Given 1000000, return "a week ago"', () => {
        const seconds = 1000000;
        expect(toPretty(seconds)).toBe('a week ago');
    });
    test('Given 10000000, return "16 weeks ago"', () => {
        const seconds = 10000000;
        expect(toPretty(seconds)).toBe('16 weeks ago');
    });
    test('Given 52 * 7 * 24 * 3600, return "52 weeks ago"', () => {
        const seconds = 52 * 7 * 24 * 3600;
        expect(toPretty(seconds)).toBe('52 weeks ago');
    });
});

//https://www.codewars.com/kata/53988ee02c2414dbad000baa/train/javascript