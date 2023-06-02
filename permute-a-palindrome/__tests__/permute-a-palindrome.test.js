const { permuteAPalindrome } = require('../permute-a-palindrome')

describe('check if any of the permutations of the given string are a palindrome', () => {
    test('responds true for single letters, no permutation is possible', () => {
        const string = 'x'
        expect(permuteAPalindrome(string)).toBe(true)
    })
    test('responds true for two letter strings of the same character', () => {
        const string = 'xx'
        expect(permuteAPalindrome(string)).toBe(true)
    })
    test('responds false for two letter strings of the different characters', () => {
        const string = 'xy'
        expect(permuteAPalindrome(string)).toBe(false)
    })
    test('responds true for three letter strings of two characters', () => {
        const string = 'baa'
        expect(permuteAPalindrome(string)).toBe(true)
    })
    test('responds false for a three letter string of different characters', () => {
        const string = 'abc'
        expect(permuteAPalindrome(string)).toBe(false)
    })
    test('responds true for a palindrome of a longer odd string (7 characters)', () => {
        const string = 'Racecar'
        expect(permuteAPalindrome(string)).toBe(true)
    })
    test('responds true for a palindrome of a longer even string (8 characters)', () => {
        const string = 'Snedden'
        expect(permuteAPalindrome(string)).toBe(true)
    })
    test('responds false for a random even string', () => {
        const string = 'hkgjqpozcgumsthjmskp'
        expect(permuteAPalindrome(string)).toBe(false)
    })
    test('responds false for a random odd string', () => {
        const string = 'hkgjqpozcgumsthjmskpq'
        expect(permuteAPalindrome(string)).toBe(false)
    })
})

//https://www.codewars.com/kata/58ae6ae22c3aaafc58000079/train/javascript