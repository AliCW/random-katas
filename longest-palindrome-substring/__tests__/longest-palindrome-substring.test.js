const { longestPalindromeSubstring } = require('../longest-palindrome-substring');

describe('return the longest palindrome substring from the given string', () => {
    test('first case - babad', () => {
        const s = 'babad';
        expect(longestPalindromeSubstring(s)).toBeOneOf(['bab', 'aba'])
    });
    test('second case - cbbd', () => {
        const s = 'cbbd';
        expect(longestPalindromeSubstring(s)).toBe('bb')
    });
    test('third case - a', () => {
        const s = 'a';
        expect(longestPalindromeSubstring(s)).toBe('a')
    });
    test('fourth case - ac', () => {
        const s = 'ac';
        expect(longestPalindromeSubstring(s)).toBeOneOf(['a', 'c'])
    });
    test.only('fifth case = abbcccbbbcaaccbababcbcabca', () => {
        const s = 'abbcccbbbcaaccbababcbcabca';
        expect(longestPalindromeSubstring(s)).toBe('bbcccbb')
    })
});