const { isIntArray } = require('../isIntergerArray');

describe("Return true if the array is empty or if array contains only whole numbers", () => {
    test("Given [null], return false", () => {
        const arr = [ null] ;
        expect(isIntArray(arr)).toBe(false);
    });
    test("Given null, return false", () => {
        const arr = null;
        expect(isIntArray(arr)).toBe(false);
    });
    test("Given [undefined], return false", () => {
        const arr = [ undefined ];
        expect(isIntArray(arr)).toBe(false);
    });
    test("Given undefined, return false", () => {
        const arr = undefined;
        expect(isIntArray(arr)).toBe(false);
    });
    test("Given NaN, return false", () => {
        const arr = NaN;
        expect(isIntArray(arr)).toBe(false);
    });
    test("Given an empty array, returns true", () => {
        const arr = [];
        expect(isIntArray(arr)).toBe(true);
    });
    test("Given [1, 2, 3], returns true", () => {
        const arr = [1, 2, 3];
        expect(isIntArray(arr)).toBe(true);
    });
    test("Given [1, 2, 3, NaN], return false", () => {
        const arr = [1, 2, 3, NaN];
        expect(isIntArray(arr)).toBe(false);
    });
    test("Given [ 1, 2, 3.0001 ], return false", () => {
        const arr = [ 1, 2, 3.0001 ];
        expect(isIntArray(arr)).toBe(false);
    });
    test("Given [ 1.23e-7, 2 ], return false", () => {
        const arr = [ 1.23e-7, 2 ];
        expect(isIntArray(arr)).toBe(false);
    });
    test("Givem [1, 2, 3, '-1'], return false", () => {
        const arr = [ 1, 2, 3, '-1'];
        expect(isIntArray(arr)).toBe(false);
    });
});

//https://www.codewars.com/kata/52a112d9488f506ae7000b95/train/javascript