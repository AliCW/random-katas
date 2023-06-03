const { solution } = require('../decode-roman-numerals')

describe('decodes the roman numeral string into a number', () => {
    test('decodes I into 1', () => {
        const string = 'I'
        expect(solution(string)).toBe(1)
    })
    test('decodes VI into 5', () => {
        const string = 'VI'
        expect(solution(string)).toBe(6)
    })
    test('decodes XXII into 22', () => {
        const string = 'XXII'
        expect(solution(string)).toBe(22)
    })
    test('decodes MMVIII into 2008', () => {
        const string = 'MMVIII'
        expect(solution(string)).toBe(2008)
    })
    test('decodes IV into 4 - four numeral', () => {
        const string = 'IV'
        expect(solution(string)).toBe(4)
    })
    test('decodes IX into 9 - nine numeral', () => {
        const string = 'IX'
        expect(solution(string)).toBe(9)
    })
    test('decodes XCII into 92 - contains a 90 numeral', () => {
        const string = 'XCII'
        expect(solution(string)).toBe(92)
    })
    test('decodes XLVI into 46 - contains a 40 numeral', () => {
        const string = 'XLVI'
        expect(solution(string)).toBe(46)
    })
    test('decodes MCDXXXIX into 1439 - contains a 400 & 9 numeral', () => {
        const string = 'MCDXXXIX';
        expect(solution(string)).toBe(1439)
    })
    test('decodes MMCMLXXXIII into 2983 - contains a 900 numeral', () => {
        const string = 'MMCMLXXXIII'
        expect(solution(string)).toBe(2983)
    })
})

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000


// 1 = I
// 2 = II
// 3 = III
// 4 = IV
// 5 = V
// 6 = VI
// 7 = VII
// 8 = VIII
// 9 = IX
// 10 = X
// 11 = XI
// 12 = XII
// 13 = XIII
// 14 = XIV
// 15 = XV
// 16 = XVI
// 17 = XVII
// 18 = XVIII
// 19 = XIX
// 20 = XX
// 30 = XXX
// 40 = XL
// 50 = L
// 60 = LX
// 70 = LXX
// 80 = LXXX
// 90 = XC
// 100 = C
// 150 = CL
// 200 = CC
// 300 = CCC
// 400 = CD
// 500 = D
// 600 = DC
// 700 = DCC
// 800 = DCCC
// 900 = CM
// 1000 = M
// 1600 = MDC
// 1700 = MDCC
// 1900 = MCM
