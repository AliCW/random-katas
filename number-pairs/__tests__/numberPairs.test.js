const { getLargeNumbers } = require('../numberPairs');

describe('Given two arrays, compare each element in turn and return a new array of the largest numbers', () => {
    test('Confirm both input arrays are not mutated', () => {
        const array1 = [13, 64, 15, 17, 88];
        const array2 = [23, 14, 53, 17, 80];
        getLargeNumbers(array1, array2);
        expect(array1).toEqual([13, 64, 15, 17, 88]);
        expect(array2).toEqual([23, 14, 53, 17, 80]);
    });
    test('Given [13, 64, 15, 17, 88] & [23, 14, 53, 17, 80], return [23, 64, 53, 17, 88]', () => {
        const array1 = [13, 64, 15, 17, 88];
        const array2 = [23, 14, 53, 17, 80];
        expect(getLargeNumbers(array1, array2)).toEqual([23, 64, 53, 17, 88]);
    });
    test('Given [-2, -92] & [79, 99], return [79, 99]', () => {
        const array1 = [-2, -92];
        const array2 = [79, 99];
        expect(getLargeNumbers(array1, array2)).toEqual([79, 99]);
    });
    test('Given [72, 89, -86, -13, 72] & [-22, -49, 79, 66, 21], return [72, 89, 79, 66, 72]', () => {
        const array1 = [72, 89, -86, -13, 72];
        const array2 = [-22, -49, 79, 66, 21];
        expect(getLargeNumbers(array1, array2)).toEqual([72, 89, 79, 66, 72]);
    });
    test('Given [-87, 60, 41, 55, -69] & [71, -94, -23, 22, -20], return [71, 60, 41, 55, -20]', () => {
        const array1 = [-87, 60, 41, 55, -69];
        const array2 = [71, -94, -23, 22, -20];
        expect(getLargeNumbers(array1, array2)).toEqual([71, 60, 41, 55, -20]);
    });
    test('Given [-30, -81, -69, -66, 90] & [-48, 74, -77, -34, -7], return [-30, 74, -69, -34, 90]', () => {
        const array1 = [-30, -81, -69, -66, 90];
        const array2 = [-48, 74, -77, -34, -7];
        expect(getLargeNumbers(array1, array2)).toEqual([-30, 74, -69, -34, 90]);
    });
    test('Given [-34, 59, -58, -31, -8] & [9, -40, -22, -3, 67], return [9, 59, -22, -3, 67]', () => {
        const array1 = [-34, 59, -58, -31, -8];
        const array2 = [9, -40, -22, -3, 67];
        expect(getLargeNumbers(array1, array2)).toEqual([9, 59, -22, -3, 67]);
    });
    test('Given [-30, -94, -19, 95, 78, -74] & [96, 72, 66, -73, 9, -45], return [96, 72, 66, 95, 78, -45]', () => {
        const array1 = [-30, -94, -19, 95, 78, -74];
        const array2 = [96, 72, 66, -73, 9, -45];
        expect(getLargeNumbers(array1, array2)).toEqual([96, 72, 66, 95, 78, -45]);
    });
});

//https://www.codewars.com/kata/563b1f55a5f2079dc100008a/train/javascript