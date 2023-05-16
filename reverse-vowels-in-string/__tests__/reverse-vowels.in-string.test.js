const { reverseVowels } = require('../reverse-vowels.in-string')

describe('Reverse vowels function in given string', () => {
    test('returns a string' , () => {
        const string = 'hello'
        expect(typeof reverseVowels(string)).toBe('string')
    })
    test('reverses the two vowels from a single string', () => {
        const string = 'hello'
        expect(reverseVowels(string)).toBe('holle')
    })
    test('reverses the two vowels from a single string in caps', () => {
        const string = 'HELLO'
        expect(reverseVowels(string)).toBe('HOLLE')
    })
    test('reverses multiple vowels from multiple strings in multiple cases', () => {
        const string = 'Reverse Vowels In A String'
        expect(reverseVowels(string)).toBe('RivArsI Vewols en e Streng')
    })
})


//https://www.codewars.com/kata/585db3e8eec141ce9a00008f/train/javascript