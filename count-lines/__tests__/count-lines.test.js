const { countLines } = require('../count-lines');

describe('Count the line number for the given string element, a new line is created for each element', () => {
    test('checks the input array is not mutated', () => {
        const array = ['a', 'b', 'c'];
        countLines(array);
        expect(array).toEqual(['a', 'b', 'c']);
    });
    test('Given [], return []', () => {
        const array = [];
        expect(countLines(array)).toEqual([]);
    });
    test('Given ["a", "b", "c"], return ["1: a", "2: b", "3: c"]', () => {
        const array = ['a', 'b', 'c'];
        expect(countLines(array)).toEqual(['1: a', '2: b', '3: c']);
    });
    test('Given ["a", "A"], return ["1: a", "2: A"]', () => {
        const array = ['a', 'A'];
        expect(countLines(array)).toEqual(['1: a', '2: A']);
    });
    test('Given ["a", "a", "a"], return ["1: a", "2: a", "3: a"]', () => {
        const array = ['a', 'a', 'a'];
        expect(countLines(array)).toEqual(['1: a', '2: a', '3: a']);
    });
    test('Given ["a", "b", "c", "a", "b, "c"], return ["1: a", "2: b", "3: c", "4: a", "5: b", "6: c"]', () => {
        const array = ['a', 'b', 'c', 'a', 'b', 'c'];
        expect(countLines(array)).toEqual(['1: a', '2: b', '3: c', '4: a', '5: b', '6: c']);
    });
    test('Given ["a", "b", "c", "k", "l", "p", "w", "V", "O", "x"], return ["1: a", "2: b", "3: c", "4: k", "5: l", "6: p", "7: w", "8: V", "9: O", "10: x"]', () => {
        const array = ['a', 'b', 'c', 'k', 'l', 'p', 'w', 'V', 'O', 'x'];
        expect(countLines(array)).toEqual(['1: a', '2: b', '3: c', '4: k', '5: l', '6: p', '7: w', '8: V', '9: O', '10: x']);
    });
});

//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript