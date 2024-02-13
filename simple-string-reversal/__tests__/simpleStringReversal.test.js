const { solve } = require('../simpleStringReversal');

describe('Reverse the given string with spaces retained (if any)', () => {
    test('Given "test", return "tset"', () => {
        const str = 'test';
        expect(solve(str)).toBe('tset');
    });
    test('Given "your code", return ""', () => {
        const str = 'your code';
        expect(solve(str)).toBe('edoc ruoy');
    });
    test('Given "your code rocks", return "skco redo cruoy"', () => {
        const str = 'your code rocks';
        expect(solve(str)).toBe('skco redo cruoy');
    });
    test('Given "kcgpo ik gzbsuno s bi ligyxfbm nj g v ju u py lxr z", return "zrxly pu ujvgjnm b fx ygilibso nu s b zg k io pgc k"', () => {
        const str = 'kcgpo ik gzbsuno s bi ligyxfbm nj g v ju u py lxr z';
        expect(solve(str)).toBe('zrxly pu ujvgjnm b fx ygilibso nu s b zg k io pgc k');
    });
});

//https://www.codewars.com/kata/5a71939d373c2e634200008e/javascript