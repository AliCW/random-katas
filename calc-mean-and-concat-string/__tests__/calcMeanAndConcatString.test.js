const { mean } = require('../calcMeanAndConcatString');

describe('Return an array with length of two - 0 = 10 integers mean as float & 1 as a string of the given chars', () => {
    test('Does not mutate the given array', () => {
        const array = ["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"];
        mean(array)
        expect(array).toEqual(["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]);
    });
    test('Returns an array with length of two', () => {
        const array = ["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"];
        expect(mean(array)).toBeInstanceOf(Array)
    });
    test('Returns [3.6, "udiwstagwo"] when given ["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]', () => {
        const array = ["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"];
        expect(mean(array)).toEqual([3.6, "udiwstagwo"]);
    });
    test('Returns [3.0, "cxwyvuhinu"] when given ["0", "c", "7", "x", "6", "2", "3", "5", "w", "7", "0", "y", "v", "u", "h", "i", "n", "u", "0", "0"]', () => {
        const array = ["0", "c", "7", "x", "6", "2", "3", "5", "w", "7", "0", "y", "v", "u", "h", "i", "n", "u", "0", "0"];
        expect(mean(array)).toEqual([3.0, "cxwyvuhinu"]);
    });
    test('Returns [0.9, "aaddgquvyy"] when given ["1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "a", "a", "d", "d", "g", "q", "u", "v", "y", "y"]', () => {
        const array = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "a", "a", "d", "d", "g", "q", "u", "v", "y", "y"];
        expect(mean(array)).toEqual([0.9, "aaddgquvyy"])
    });
});

//https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/train/javascript