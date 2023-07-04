const { longestCommonPrefix } = require('../longest-common-prefix');

describe('return the longest common prefix from the array of string, return empty if none is found', () => {
    test('check input is not mutated', () => {
        const array = ["pigs","piggy","pigeons"];
        longestCommonPrefix(array);
        expect(array).toEqual(["pigs","piggy","pigeons"]);
    });
    test('first case: ["flower","flow","flight"]', () => {
        const array = ["flower","flow","flight"];
        expect(longestCommonPrefix(array)).toBe("fl");
    });
    test('second case: ["dog","racecar","car"]', () => {
        const array = ["dog","racecar","car"];
        expect(longestCommonPrefix(array)).toBe("")
    })
    test('third case: [""]', () => {
        const array = [""];
        expect(longestCommonPrefix(array)).toBe("");
    })
    test('fourth case: ["a", "b"]', () => {
        const array = ["a","b"];
        expect(longestCommonPrefix(array)).toBe("");
    })
    test('fifth case: ["ab", "b"]', () => {
        const array = ["ab","b"];
        expect(longestCommonPrefix(array)).toBe("");
    });
    test('sixth case: ["", "b"]', () => {
        const array = ["","b"];
        expect(longestCommonPrefix(array)).toBe("");
    });
    test('seventh case: ["flower","flower","flower","flower"]', () => {
        const array = ["flower","flower","flower","flower"];
        expect(longestCommonPrefix(array)).toBe("flower");
    })
    test('eigth case: ["", "", ""]', () => {
        const array = ["", "", ""];
        expect(longestCommonPrefix(array)).toBe("");
    });
    test('ninth case: ["a", "a", "a"]', () => {
        const array = ["a", "a", "a"];
        expect(longestCommonPrefix(array)).toBe("a");
    });
    test('tenth case: ["aaa", "aa", "aaa"]', () => {
        const array = ["aaa", "aa", "aaa"];
        expect(longestCommonPrefix(array)).toBe("aa");
    });
    test('elenventh case: ["abab", "aba", ""]', () => {
        const array = ["abab", "aba", ""];
        expect(longestCommonPrefix(array)).toBe("");
    });
    test('twelfth case: ["a", "cc"', () => {
        const array = ["a", "cc"];
        expect(longestCommonPrefix(array)).toBe("");
    });
    test('thirteenth case: ["b","cb","cab"]', () => {
        const array = ["b","cb","cab"]
        expect(longestCommonPrefix(array)).toBe("");
    })
    test('fourteenth case: ["baab","bacb","b","cbc"]', () => {
        const array = ["baab","bacb","b","cbc"]
        expect(longestCommonPrefix(array)).toBe("");
    })
    test('fifteenth case: ["abca","aba","aaab"]', () => {
        const array = ["abca","aba","aaab"]
        expect(longestCommonPrefix(array)).toBe("a");
    })
    test('sixteenth case: ["ab","abcc"]', () => {
        const array = ["ab","abcc"]
        expect(longestCommonPrefix(array)).toBe("ab");
    })
    test('seventeenth case: ["aaba","aaa","aa","aa","aa"]', () => {
        const array = ["aaba","aaa","aa","aa","aa"]
        expect(longestCommonPrefix(array)).toBe("aa");
    })
    test('eighteenth case: ["aa","aa","aa","aaba","aaa"]', () => {
        const array = ["aa","aa","aa","aaba","aaa"]
        expect(longestCommonPrefix(array)).toBe("aa");
    })
    test('ninteenth case: ["acc","aaa","aaba"]', () => {
        const array = ["acc","aaa","aaba"];
        expect(longestCommonPrefix(array)).toBe("a");
    })
    test('this is soul destroying: ["aa","aabc","aac","aac","aa"]', () => {
        const array = ["aa","aabc","aac","aac","aa"];
        expect(longestCommonPrefix(array)).toBe("aa");
    })
    test('lamest solution ever: ["aa","aaaa","aab","aaa","aab"]', () => {
        const array = ["aa","aaaa","aab","aaa","aab"];
        expect(longestCommonPrefix(array)).toBe("aa");
    })
});

//edge cases for this problem are a bit ridiculous, they are too long to be tokenized by default


