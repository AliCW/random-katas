const { count } = require('../countCharacters');

describe('Given a string, return a count of each character in an object', () => {
    test('Given "", return {}', () => {
        const string = '';
        expect(count(string)).toEqual({});
    });
    test('Given "a", return { "a" : 1 }', () => {
        const string = 'a';
        expect(count(string)).toEqual({"a": 1});
    });
    test('Given "ABC", return {"A": 1, "B": 1, "C": 1}', () => {
        const string = 'ABC';
        expect(count(string)).toEqual({"A": 1, "B": 1, "C": 1});
    });
    test('Given "aba", return {"a": 2, "b": 1}', () => {
        const string = 'aba';
        expect(count(string)).toEqual({"a": 2, "b": 1});
    });
    test('Given "tvghj", return {"g": 1, "h": 1, "j": 1, "t": 1, "v": 1}', () => {
        const string = 'tvghj';
        expect(count(string)).toEqual({"g": 1, "h": 1, "j": 1, "t": 1, "v": 1});
    });
    test(`Given "IUClAlfJDdgPnkVKJZpPfIslGQIMpueCkLyvpXQszjRnVxFFwcLSx", return {"A": 1,
            "C": 2,
            "D": 1,
            "F": 2,
            "G": 1,
            "I": 3,
            "J": 2,
            "K": 1,
            "L": 2,
            "M": 1,
            "P": 2,
            "Q": 2,
            "R": 1,
            "S": 1,
            "U": 1,
            "V": 2,
            "X": 1,
            "Z": 1,
            "c": 1,
            "d": 1,
            "e": 1,
            "f": 2,
            "g": 1,
            "j": 1,
            "k": 2,
            "l": 3,
            "n": 2,
            "p": 3,
            "s": 2,
            "u": 1,
            "v": 1,
            "w": 1,
            "x": 2,
            "y": 1,
            "z": 1,
            }`, () => {
        const string = 'IUClAlfJDdgPnkVKJZpPfIslGQIMpueCkLyvpXQszjRnVxFFwcLSx';
        expect(count(string)).toEqual({"A": 1,
            "C": 2,
            "D": 1,
            "F": 2,
            "G": 1,
            "I": 3,
            "J": 2,
            "K": 1,
            "L": 2,
            "M": 1,
            "P": 2,
            "Q": 2,
            "R": 1,
            "S": 1,
            "U": 1,
            "V": 2,
            "X": 1,
            "Z": 1,
            "c": 1,
            "d": 1,
            "e": 1,
            "f": 2,
            "g": 1,
            "j": 1,
            "k": 2,
            "l": 3,
            "n": 2,
            "p": 3,
            "s": 2,
            "u": 1,
            "v": 1,
            "w": 1,
            "x": 2,
            "y": 1,
            "z": 1,
            }
        );
    });
    test(`Given "FGjOlskgzeGDTxloRbAmvlpJPRtEEIePZlYxtWwU", return {"A": 1,
            "D": 1,
            "E": 2,
            "F": 1,
            "G": 2,
            "I": 1,
            "J": 1,
            "O": 1,
            "P": 2,
            "R": 2,
            "T": 1,
            "U": 1,
            "W": 1,
            "Y": 1,
            "Z": 1,
            "b": 1,
            "e": 2,
            "g": 1,
            "j": 1,
            "k": 1,
            "l": 4,
            "m": 1,
            "o": 1,
            "p": 1,
            "s": 1,
            "t": 2,
            "v": 1,
            "w": 1,
            "x": 2,
            "z": 1,`, () => {
        const string = 'FGjOlskgzeGDTxloRbAmvlpJPRtEEIePZlYxtWwU';
        expect(count(string)).toEqual({"A": 1,
            "D": 1,
            "E": 2,
            "F": 1,
            "G": 2,
            "I": 1,
            "J": 1,
            "O": 1,
            "P": 2,
            "R": 2,
            "T": 1,
            "U": 1,
            "W": 1,
            "Y": 1,
            "Z": 1,
            "b": 1,
            "e": 2,
            "g": 1,
            "j": 1,
            "k": 1,
            "l": 4,
            "m": 1,
            "o": 1,
            "p": 1,
            "s": 1,
            "t": 2,
            "v": 1,
            "w": 1,
            "x": 2,
            "z": 1,
        })
    })
});


//https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript