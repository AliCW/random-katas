const { splitString } = require('../splitStrings');

describe("Split the given string into pairs of two characters, append with '_' in case of odd split", () => {
    test("Given '', return []", () => {
        const str = "";
        expect(splitString(str)).toEqual([]);
    });
    test("Given 'abcdef', return ['ab', 'cd', 'ef']", () => {
        const str = "abcdef";
        expect(splitString(str)).toEqual(['ab', 'cd', 'ef']);
    });
    test("Given 'abcdefg', return ['ab', 'cd', 'ef', 'g_']", () => {
        const str = "abcdefg";
        expect(splitString(str)).toEqual(['ab', 'cd', 'ef', 'g_']);
    });
    test(`Given 'EYAsEFDNlbaJlosxxqMleXPzFGiSiowVFKqZgLUaoBGEaixyu', return [
        'EY', 'As', 'EF', 'DN', 'lb',
        'aJ', 'lo', 'sx', 'xq', 'Ml',
        'eX', 'Pz', 'FG', 'iS', 'io',
        'wV', 'FK', 'qZ', 'gL', 'Ua',
        'oB', 'GE', 'ai', 'xy', 'u'
      ]`, () => {
        const str = "EYAsEFDNlbaJlosxxqMleXPzFGiSiowVFKqZgLUaoBGEaixyu";
        expect(splitString(str)).toEqual([
            'EY', 'As', 'EF', 'DN', 'lb',
            'aJ', 'lo', 'sx', 'xq', 'Ml',
            'eX', 'Pz', 'FG', 'iS', 'io',
            'wV', 'FK', 'qZ', 'gL', 'Ua',
            'oB', 'GE', 'ai', 'xy', 'u_'
          ]);
      });
    test(`Given cMewsVjfeQXStgFDmRyoeGTIKhTG, return [
        'cM', 'ew', 'sV',
        'jf', 'eQ', 'XS',
        'tg', 'FD', 'mR',
        'yo', 'eG', 'TI',
        'Kh', 'TG'
      ]`, () => {
        const str =  "cMewsVjfeQXStgFDmRyoeGTIKhTG";
        expect(splitString(str)).toEqual([
            'cM', 'ew', 'sV',
            'jf', 'eQ', 'XS',
            'tg', 'FD', 'mR',
            'yo', 'eG', 'TI',
            'Kh', 'TG'
          ]);
      });
});

//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
