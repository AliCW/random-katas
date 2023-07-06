const { findIndex } = require('../findIndex');

describe('Find the first index of the first argument (needle) in the second argument (haystack), return -1 if not present', () => {
    test('First case - sad - sadbutsad', () => {
        const needle = 'sad';
        const haystack = 'sadbutsad';
        expect(findIndex(needle, haystack)).toBe(0);
    });
    test('Second case - leeto - leetcode', () => {
        const needle = 'leeto';
        const haystack = 'leetcode';
        expect(findIndex(needle, haystack)).toBe(-1);
    });
    test('Third case - smcmsdckss', () => {
        const needle = 'm';
        const haystack = 'smcmsdckss';
        expect(findIndex(needle, haystack)).toBe(1);
    });
});

//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/