const { uniq } = require('../uniq');

describe('uniq takes as input a sequence and returns a sequence in which all duplicate elements following each other have been reduced to one instance', () => {
    test('Confirm the given array is not mutated', () => {
        const array = ['a','a','b','b','c','a','b','c','c'];
        uniq(array);
        expect(array).toEqual(['a','a','b','b','c','a','b','c','c']);
    });
    test("Given ['a','a','b','b','c','a','b','c','c'], return ['a','b','c','a','b','c']", () => {
        const array = ['a','a','b','b','c','a','b','c','c'];
        expect(uniq(array)).toEqual(['a','b','c','a','b','c']);
    });
    test("Given ['a','a','a','b','b','b','c','c','c'], return ['a', 'b', 'c']", () => {
        const array = ['a','a','a','b','b','b','c','c','c'];
        expect(uniq(array)).toEqual(['a', 'b', 'c']);
    });
    test("Given [null, 'a', 'a'], return ['a']", () => {
        const array = [null, 'a', 'a'];
        expect(uniq(array)).toEqual([null, 'a'])
    });
    test("Given [''], return ['']", () => {
        const array = [''];
        expect(uniq(array)).toEqual(['']);
    });
    test("Given ['w', 'w', 'w'], ['w']", () => {
        const array = ['w', 'w', 'w'];
        expect(uniq(array)).toEqual(['w']);
    });
    test("Given ['fk', 'hey', 'hey', 'hey', 'z', 'z', 'z', 'dy', 'rew', 'rew', 'rew', 'rew', 'jah', 'jah', 'jah', 'vso', 'yt'], return ['fk', 'hey', 'z', 'dy', 'rew', 'jah', 'vso', 'yt']", () => {
        const array = ['fk', 'hey', 'hey', 'hey', 'z', 'z', 'z', 'dy', 'rew', 'rew', 'rew', 'rew', 'jah', 'jah', 'jah', 'vso', 'yt'];
        expect(uniq(array)).toEqual(['fk', 'hey', 'z', 'dy', 'rew', 'jah', 'vso', 'yt']);
    });
    test('Given [], return []', () => {
        const array = [];
        expect(uniq(array)).toEqual([]);
    });
    test("Given ['n', 'n',  'z', 'z', 'z', 'jd', 'jd', 'jd', 'j', 'j', 'h',  'h', 'h', 'x', 'x'], return ['n', 'z', 'jd', 'j', 'h', 'x']", () => {
        const array = ['n', 'n',  'z', 'z', 'z', 'jd', 'jd', 'jd', 'j', 'j', 'h',  'h', 'h', 'x', 'x'];
        expect(uniq(array)).toEqual(['n', 'z', 'jd', 'j', 'h', 'x']);
    });
});



//https://www.codewars.com/kata/52249faee9abb9cefa0001ee/train/javascript