const { sortMe } = require('../sortArrays');

describe('Sort the given array in alphabetical order, regalrdless of case sensitivity', () => {
    test('Test the input array is not mutated', () => {
        const names = ['a', 'b', 'c'];
        sortMe(names);
        expect(names).toEqual(['a', 'b', 'c']);
    });
    test('Test an array with a single element', () => {
        const names = ['name'];
        expect(sortMe(names)).toEqual(['name']);
    });
    test('Test the given array: ["C", "d", "a", "B"] - result should be: ["a", "B", "C", "d"]', () => {
        const names = ["C", "d", "a", "B"];
        expect(sortMe(names)).toEqual(["a", "B", "C", "d"]);
    });
    test('Test the given array: ["Hello","there","I\'m","fine"]', () => {
        const names = ["Hello","there","I'm","fine"];
        expect(sortMe(names)).toEqual(["fine", "Hello", "I'm", "there"])
    });
    test('Test the given array: (["part","Thing","The","see","with","Year","new","problem"])', () => {
        const names = ["part","Thing","The","see","with","Year","new","problem"]
        expect(sortMe(names)).toEqual(["new","part","problem","see","The","Thing","with","Year"])
    });
    test("Test the given array: ['first', 'With', 'was']", () => {
        const names = ["first", "With", "was"];
        expect(sortMe(names)).toEqual(['first', 'was', 'With']);
    });
});

//    https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9/train/javascript