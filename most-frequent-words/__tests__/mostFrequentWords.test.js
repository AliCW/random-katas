const { topThreeWords } = require('../mostFrequentWords');

describe('Given a string, return the three most commonly used words in order of highest occurence', () => {
    test('Given "a a a  b  c c  d d d d  e e e e e", return ["e", "d", "a"]', () => {
        const string = "a a a  b  c c  d d d d  e e e e e";
        expect(topThreeWords(string)).toEqual(["e", "d", "a"]);
    });
    test('Given "a a a c b b", return ["a", "b", "c"]', () => {
        const string = "a a a c b b";
        expect(topThreeWords(string)).toEqual(["a", "b", "c"]);
    });
    test('Given "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e", return ["e","ddd","aa"]', () => {
        const string = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e";
        expect(topThreeWords(string)).toEqual(["e", "ddd", "aa"]);
    });
    test(`Given "  //wont won't won't ", return ["won't", "wont"]`, () => {
        const string = "  //wont won't won't ";
        expect(topThreeWords(string)).toEqual(["won't", "wont"]);
    });
    test(`Given "  , e   .. ", return ["e"]`, () => {
        const string = "  , e   .. ";
        expect(topThreeWords(string)).toEqual(["e"]);
    });
    test('Given ""  ...  ", return []', () => {
        const string = "  ...  ";
        expect(topThreeWords(string)).toEqual([]);
    });
    test(`Given "  '  ", return []`, () => {
        const string = "  '  ";
        expect(topThreeWords(string)).toEqual([]);
    });
    test('Given "A doll yelled in a CD in a blanket ", return ["a","in", (any of: "doll", "yelled", "cd", "blanket")]', () => {
        const string = "A doll yelled in a CD in a blanket ";
        expect(topThreeWords(string)).toEqual(["a", "in", "blanket"]);
    })
    test('Given "Blankets yelled against a doll to the frog of a poster to the rat", return ["a", "to", "the"]', () => {
        const string = "Blankets yelled against a doll to the frog of a poster to the rat";
        expect(topThreeWords(string)).toEqual(["the", "to", "a"]);
    });
});

//https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript