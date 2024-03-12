const { repeatAdjacent } = require('../repeatAdjacent');

describe('Count the blocks of repeating adjacent characters in the given string', () => {
    test('Given "ccccoodeffffiiighhhhhhhhhhttttttts", return 3', () => {
        const s = 'ccccoodeffffiiighhhhhhhhhhttttttts';
        expect(repeatAdjacent(s)).toBe(3);
    });
    test('Given "soooooldieeeeeer", return 1', () => {
        const s = 'soooooldieeeeeer';
        expect(repeatAdjacent(s)).toBe(0);
    });
    test('Given "", return 0', () => {
        const s = '';
        expect(repeatAdjacent(s)).toBe(0);
    });
    test('Given "aaaa", return 0', () => {
        const s = 'aaaa';
        expect(repeatAdjacent(s)).toBe(0);
    });
    test('Given "ccccoooooooooooooooooooooooddee", return 1', () => {
        const s = 'ccccoooooooooooooooooooooooddee';
        expect(repeatAdjacent(s)).toBe(1);
    });
    test('Given "chaaallengee", return 1', () => {
        const s = 'chaaallengee';
        expect(repeatAdjacent(s)).toBe(1);
    });
    test('Given "wwwwaaaarrioooorrrrr", return 2', () => {
        const s = 'wwwwaaaarrioooorrrrr';
        expect(repeatAdjacent(s)).toBe(2);
    });
    test('Given "gztxxxxxggggggggggggsssssssbbbbbeeeeeeehhhmmmmmmmitttttttlllllhkppppp", return 2', () => {
        const s = 'gztxxxxxggggggggggggsssssssbbbbbeeeeeeehhhmmmmmmmitttttttlllllhkppppp';
        expect(repeatAdjacent(s)).toBe(2);
    });
    test('Given "mfukklllllgalllllliuuuuxyyooollllllbbrjssssoooooqwwwnnnonnnnnnndddd", return 5', () => {
        const s = 'mqukklllllgalllllliuuuuxyyooollllllbbrjssssoooooqwwwnnnonnnnnnndddd';
        expect(repeatAdjacent(s)).toBe(5);
    });
    test('Given "wbbbbbpp", return 1', () => {
        const s = 'wbbbbbpp';
        expect(repeatAdjacent(s)).toBe(1);
    });
});