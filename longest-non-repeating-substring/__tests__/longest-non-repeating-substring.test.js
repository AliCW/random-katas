const { lengthOfLongestSubstring } = require('../longest-non-repeating-substring');

describe('return the length of the longest number of non-repeating characters', () => {
    test('first case "abcabcbb" - output of 3', () => {
        const s = 'abcabcbb';
        expect(lengthOfLongestSubstring(s)).toBe(3);
    });
    test('second case "bbbbb" - output of 3', () => {
        const s = 'bbbbb';
        expect(lengthOfLongestSubstring(s)).toBe(1);
    });
    test('third case "pwwkew" - output of 3', () => {
        const s = 'pwwkew';
        expect(lengthOfLongestSubstring(s)).toBe(3);
    });
    test('fourth case "cdd" - output of 2', () => {
        const s = 'cdd';
        expect(lengthOfLongestSubstring(s)).toBe(2);
    });
    test('fifth case "ckilbkd" - output of 5', () => {
        const s = 'ckilbkd';
        expect(lengthOfLongestSubstring(s)).toBe(5);
    });
    test('sixth case "dvdf" - output of 3', () => {
        const s = 'dvdf';
        expect(lengthOfLongestSubstring(s)).toBe(3);
    });
});