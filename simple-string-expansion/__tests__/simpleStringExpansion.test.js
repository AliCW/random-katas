const { stringExpansion } = require('../simpleStringExpansion');

describe('Expand the alphanumeric string as per the digits given, the return argument should have no digits', () => {
    test('Given "3abc", return "aaabbbccc"', () => {
        const s = '3abc';
        expect(stringExpansion(s)).toBe('aaabbbccc');
    });
    test('Given "", return ""', () => {
        const s = '';
        expect(stringExpansion(s)).toBe('');
    });
    test('Given "3D2a5d2f", return DDDaadddddff', () => {
        const s = '3D2a5d2f';
        expect(stringExpansion(s)).toBe('DDDaadddddff');
    });
    test('Given "0d0a0v0t0y", return ""', () => {
        const s = '0d0a0v0t0y';
        expect(stringExpansion(s)).toBe('');
    });
    test('Given "3d332f2a", return dddffaa', () => {
        const s = '3d332f2a';
        expect(stringExpansion(s)).toBe('dddffaa');
    });
    test('Given "abcde", return "abcde"', () => {
        const s = 'abcde';
        expect(stringExpansion(s)).toBe('abcde');
    });
    test('Given "a2bcde", return "abbccddee"', () => {
        const s = 'a2bcde';
        expect(stringExpansion(s)).toBe('abbccddee');
    });
    test('Given "5YQ7A28r8Cr6m5Kq", return YYYYYQQQQQAAAAAAArrrrrrrrCCCCCCCCrrrrrrrrmmmmmmKKKKKqqqqq', () => {
        const s = '5YQ7A28r8Cr6m5Kq';
        expect(stringExpansion(s)).toBe('YYYYYQQQQQAAAAAAArrrrrrrrCCCCCCCCrrrrrrrrmmmmmmKKKKKqqqqq');
    });
    test('Given "0Qj3ok34vK8DYWDs", return oookkkvvvvKKKKDDDDDDDDYYYYYYYYWWWWWWWWDDDDDDDDssssssss', () => {
        const s = '0Qj3ok34vK8DYWDs';
        expect(stringExpansion(s)).toBe('oookkkvvvvKKKKDDDDDDDDYYYYYYYYWWWWWWWWDDDDDDDDssssssss');
    });
    test('Given "S1OnbiNh47qn1Q56", return SOnbiNhqqqqqqqnnnnnnnQ', () => {
        const s = 'S1OnbiNh47qn1Q56';
        expect(stringExpansion(s)).toBe('SOnbiNhqqqqqqqnnnnnnnQ');
    });
    test('Given "A3IkANV0U0bR51nW", return AIIIkkkAAANNNVVVnW', () => {
        const s = 'A3IkANV0U0bR51nW';
        expect(stringExpansion(s)).toBe('AIIIkkkAAANNNVVVnW');
    });
    test('Given "OlbG97skvn04hM81", return OlbGssssssskkkkkkkvvvvvvvnnnnnnnhhhhMMMM', () => {
        const s = 'OlbG97skvn04hM81';
        expect(stringExpansion(s)).toBe('OlbGssssssskkkkkkkvvvvvvvnnnnnnnhhhhMMMM');
    });
});

//https://www.codewars.com/kata/5ae326342f8cbc72220000d2/javascript