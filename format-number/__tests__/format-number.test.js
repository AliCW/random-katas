const { formatNumber } = require('../format-number')

describe('alter numbers into readable format by adding "," after every three numbers', () => {
    test('returns a string when provided a number', () => {
        const number = 0
        expect(typeof formatNumber(number)).toBe('string')
    })
    test('returns a number without any commas when argument contains three digits', () => {
        const number = 123
        expect(formatNumber(number)).toBe('123')
    })
    test('returns a number with one comma when argument contains six digits', () => {
        const number = 123456
        expect(formatNumber(number)).toBe('123,456')
    })
    test('returns a number with one comma when argument contains six digits (negative number)', () => {
        const number = -123456
        expect(formatNumber(number)).toBe('-123,456')
    })
    test('returns a number with two commas when argument contains seven digits', () => {
        const number = 1234567
        expect(formatNumber(number)).toBe('1,234,567')
    })
    test('returns a number with two commas when argument contains seven digits (negative number)', () => {
        const number = -1234567
        expect(formatNumber(number)).toBe('-1,234,567')
    })
    test('returns a number with three commas when argument contains ten digits', () => {
        const number = 1234567890
        expect(formatNumber(number)).toBe('1,234,567,890')
    })
    test('returns a number with three commas when argument contains ten digits (negative number)', () => {
        const number = -1234567890
        expect(formatNumber(number)).toBe('-1,234,567,890')
    })
})


//https://www.codewars.com/kata/565c4e1303a0a006d7000127/train/javascript