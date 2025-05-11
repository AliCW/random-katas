const { invertedRanges } = require('../invertedRanges');

describe(`A range of numbers is represented as a tuple of two numbers, for example [0, 10] would indicate a range between 0 and 10 inclusively.
        The inverse of a range between some bounds are the ranges from the lower bound, to the lowest part of the range and the upper part of the range to the upper bound.

        For example:

            Given the range [25, 75]
            And the lower bound 0
            And the upper bound 100

        The inverse ranges would be [[0, 24], [76, 100]].

        Write a function invertedRanges which when given a list of ranges, returns the inverse of those ranges with a lower bound of 0 and an upper bound of 100.

        All ranges will be between 0 and 100, they will be given in order and will not overlap`, () => {
    test('Confirm the input array is not mutated', () => {
        const array = [[0, 100]];
        invertedRanges(array);
        expect(array).toEqual([[0, 100]]);
    });
    test('Given [], return [0, 100]', () => {
        const array = [];
        expect(invertedRanges(array)).toEqual([[0, 100]]);
    });
    test('Given [[0, 100]], return []', () => {
        const array = [[0, 100]];
        expect(invertedRanges(array)).toEqual([]);
    });
    test('Given [[0, 50], [51, 100]], return []', () => {
        const array = [[0, 50], [51, 100]];
        expect(invertedRanges(array)).toEqual([]);
    });
    test('Given [[25, 75]], return [[0, 24], [76, 100]]', () => {
        const array = [[25, 75]];
        expect(invertedRanges(array)).toEqual([[0, 24], [76, 100]]);
    });
    test('Given [[0, 25], [51, 75]], return [[26, 50], [76, 100]]', () => {
        const array = [[0, 25], [51, 75]];
        expect(invertedRanges(array)).toEqual([[26, 50], [76, 100]]);
    });
    test('Given [[40, 46], [48, 52], [62, 63]], return [[0, 39], [47, 47], [53, 61], [64, 100]]', () => {
        const array = [[40, 46], [48, 52], [62, 63]];
        expect(invertedRanges(array)).toEqual([[0, 39], [47, 47], [53, 61], [64, 100]]);
    });
});

//https://www.codewars.com/kata/60db06ded6c39e002ee35910/train/javascript