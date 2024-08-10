const { vectorAffinity } = require('../vectorAffrinity');

describe(`Calculate the number of items in a vector that appear at the same index in each vector, with the same value.
    Affinity value should be realized on a scale of 0.0 to 1.0, with 1.0 being absolutely identical. Two identical sets should always be evaluated as having an affinity of 1.0.`, () => {
    test('Given [1, 2, 3, 4, 5] & [1, 2, 2, 4, 3], return 0.6', () => {
        const xs = [1, 2, 3, 4, 5];
        const ys = [1, 2, 2, 4, 3];
        expect(vectorAffinity(xs, ys)).toBe(0.6);
    });
    test('Given [1, 2, 3] & [1, 2, 3], return 1', () => {
        const xs = [1, 2, 3];
        const ys = [1, 2, 3];
        expect(vectorAffinity(xs, ys)).toBe(1);
    });
    test('Given [1, 2, 3] & [1, 2, 3, 4, 5], return 0.6', () => {
        const xs = [1, 2, 3];
        const ys = [1, 2, 3, 4, 5];
        expect(vectorAffinity(xs, ys)).toBe(0.6);
    });
    test('Given [1, 2, 3, 4] & [1, 2, 3, 5], return 0.75', () => {
        const xs = [1, 2, 3, 4];
        const ys = [1, 2, 3, 5];
        expect(vectorAffinity(xs, ys)).toBe(0.75);
    });
    test('Given [6, 6, 6, 6, 6, 6] & [6], return 0.16666666666666663', () => {
        const xs = [6, 6, 6, 6, 6, 6];
        const ys = [6];
        expect(vectorAffinity(xs, ys)).toBe(0.16666666666666663);
    });
    test('Given [null], & [], return 0', () => {
        const xs = [null];
        const ys = [];
        expect(vectorAffinity(xs, ys)).toBe(0);
    });
    test('Given [null] & [null], return 1', () => {
        const xs = [null];
        const ys = [null];
        expect(vectorAffinity(xs, ys)).toBe(1);
    });
    test('Given [null] & [null, null], return 0.5', () => {
        const xs = [null];
        const ys = [null, null];
        expect(vectorAffinity(xs, ys)).toBe(0.5);
    });
    test('Given [] & [], return 1', () => {
        const xs = [];
        const ys = [];
        expect(vectorAffinity(xs, ys)).toBe(1);
    });
    test(`Given [45, 11, 26, 27, 25, 14, 34, 64, 30, 43, 43, 63, 15, 30, 29, 15, 63, 56, 48, 35, 37, 10, 11, 45, 10, 35, 51, 63,  5, 28, 16, 56,  9, 25, 29, 64, 6, 22, 39, 15, 35, 54, 27, 18, 49, 63, 59, 44, 15, 66, 65, 49, 62, 29, 35, 60, 48,  9, 54, 57, 16, 55, 45, 16, 12] 
    & [56, 34, 29, 27, 12, 44,  1, 47, 23, 62, 50, 25, 40, 42, 40, 19, 18, 50, 32,  7, 43, 61, 34,  0, 34, 60, 39, 38, 14, 50, 50, 30, 39,  7, 49, 30, 10, 60, 52, 65, 22, 53, 34, 60,  8, 64, 23, 54, 1, 52, 28, 66, 25, 34, 20, 19, 38, 15,  3, 47]
    return 0.01538461538461533`, () => {
        const xs = [45, 11, 26, 27, 25, 14, 34, 64, 30, 43, 43, 63, 15, 30, 29, 15, 63, 56, 48, 35, 37, 10, 11, 45, 10, 35, 51, 63, 5, 28, 16, 56, 9, 25, 29, 64, 6, 22, 39, 15, 35, 54, 27, 18, 49, 63, 59, 44, 15, 66, 65, 49, 62, 29, 35, 60, 48, 9, 54, 57, 16, 55, 45, 16, 12];
        const ys = [56, 34, 29, 27, 12, 44, 1, 47, 23, 62, 50, 25, 40, 42, 40, 19, 18, 50, 32, 7, 43, 61, 34, 0, 34, 60, 39, 38, 14, 50, 50, 30, 39, 7, 49, 30, 10, 60, 52, 65, 22, 53, 34, 60, 8, 64, 23, 54, 1, 52, 28, 66, 25, 34, 20, 19, 38, 15, 3, 47];
        expect(vectorAffinity(xs, ys)).toBe(0.01538461538461533);
    });
});

//https://www.codewars.com/kata/5498505a43e0fd83620010a9/train/javascript