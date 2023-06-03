const { countLines } = require('../count-lines');

describe('Count the line number for the given string element, the line number is the order in which is appears in the array', () => {
    test('checks the input array is not mutated', () => {
        const array = ['a', 'b', 'c'];
        countLines(array);
        expect(array).toEqual(['a', 'b', 'c']);
    });
    test('returns an empty array if given an empty array', () => {
        const array = [];
        expect(countLines(array)).toEqual([]);
    });
    test('returns a count up to three for an a,b,c array', () => {
        const array = ['a', 'b', 'c'];
        expect(countLines(array)).toEqual(['1: a', '2: b', '3: c']);
    });
    test('returns a count up to 10 for an array', () => {
        const array = ['a', 'b', 'c', 'k', 'l', 'p', 'w', 'V', 'O', 'x'];
        expect(countLines(array)).toEqual(['1: a', '2: b', '3: c', '4: k', '5: l', '6: p', '7: w', '8: V', '9: O', '10: x']);
    });
});

//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript