const { duplicateCount } = require('../countDuplicateLetters');

describe('Count the duplicate letter in the given argument & return the number', () => {
    test('Given a string with no duplicate letters, return 0', () => {
        const text = 'abcdefg';
        expect(duplicateCount(text)).toBe(0);
    });
    test('Given a string with a single duplicate letter, return 1', () => {
        const text = 'aabedfj';
        expect(duplicateCount(text)).toBe(1);
    });
    test('Given a string with two duplicate letters ignoring case, return 2', () => {
        const text = 'aadDegjn047';
        expect(duplicateCount(text)).toBe(2);
    });
    test('Given a string with four duplicate characters', () => {
        const text = 'bb00fghyylmoopqw';
        expect(duplicateCount(text)).toBe(4);
    });
});

//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript