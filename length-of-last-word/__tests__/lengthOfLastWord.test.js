const { lengthOfLastWord } = require('../lengthOfLastWord');

describe('return the length of the last word in the given string', () => {
    test('first case - s = "Hello world", return 5', () => {
        const s = 'Hello world';
        expect(lengthOfLastWord(s)).toBe(5);
    });
    test('second case - s = "   fly me   to   the moon  ", return 4', () => {
        const s = '   fly me   to   the moon  ';
        expect(lengthOfLastWord(s)).toBe(4);
    });
    test('third case - s = "luffy is still joyboy", return 6', () => {
        const s = 'luffy is still joyboy'
        expect(lengthOfLastWord(s)).toBe(6);
    });
});

//https://leetcode.com/problems/length-of-last-word/description/