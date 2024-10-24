const { deadfish } = require('../deadfish');

describe('Write a parser that will parse & run deadfish: i=+1 d=-1 s=sqaure o=output', () => {
    test('Given "iiisdoso", return [8, 64]', () => {
        const string = 'iiisdoso';
        expect(deadfish(string)).toEqual([8, 64]);
    });
    test('Given "io", return [1]', () => {
        const string = 'io';
        expect(deadfish(string)).toEqual([1]);
    });
    test('Given "do", return [-1]', () => {
        const string = 'do';
        expect(deadfish(string)).toEqual([-1]);
    });
    test('Given "iiso", return [4]', () => {
        const string = 'iiso';
        expect(deadfish(string)).toEqual([4]);
    });
    test('Given "", return []', () => {
        const string = '';
        expect(deadfish(string)).toEqual([]);
    });
    test('Given "disc", return []', () => {
        const string = 'disc';
        expect(deadfish(string)).toEqual([]);
    });
    test('Given "infinitesimal o distance o destination", return [10, 100, 9803]', () => {
        const string = 'infinitesimal o distance o destination';
        expect(deadfish(string)).toEqual([10, 100, 9803]);
    });
});

//https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript