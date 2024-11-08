const { deleteNth } = require('../delete-Nth');

describe('Given an array & number, delete the duplicate numbers in the array as the N specifies', () => {
    test('Given array is not mutated', () => {
        const array = [1, 2, 2, 3, 4];
        const number = 1;
        deleteNth(array, number);
        expect(array).toEqual([1, 2, 2, 3, 4]);
    });
    test('Given an array with one duplicate, remove in order', () => {
        const array = [1, 2, 2, 3, 4];
        const number = 1;
        expect(deleteNth(array, number)).toEqual([1, 2, 3, 4]);
    });
    test('Given an array with multiple duplicates, remove them as specified by N', () => {
        const array = [1,1,3,3,7,2,2,2,2];
        const number = 3;
        expect(deleteNth(array, number)).toEqual([1, 1, 3, 3, 7, 2, 2, 2]);
    });
    test('Given an array with multiple duplicates exceeding N, remove them as specified by N', () => {
        const array = [1,1,1,2,3,5,5,5,5,5,6,8,8,8,8,8,8,8,0,2,4];
        const number = 4;
        expect(deleteNth(array, number)).toEqual([1,1,1,2,3,5,5,5,5,6,8,8,8,8,0,2,4])
    });
    test('Given [33, 33, 33, 40, 33, 40, 40, 33, 40, 40, 33, 40, 40, 40, 33, 40, 33, 40, 33] & 10, return [33, 33, 33, 40, 33, 40, 40, 33, 40, 40, 33, 40, 40, 40, 33, 40, 33, 40, 33]', () => {
        const array = [33, 33, 33, 40, 33, 40, 40, 33, 40, 40, 33, 40, 40, 40, 33, 40, 33, 40, 33];
        const number = 10;
        expect(deleteNth(array, number)).toEqual([33, 33, 33, 40, 33, 40, 40, 33, 40, 40, 33, 40, 40, 40, 33, 40, 33, 40, 33]);
    });
    test('Given [50, 29, 42, 50, 40, 40, 42, 29, 50, 40, 40, 40, 29, 29, 40, 42, 40, 50, 40, 50, 40, 50, 42, 50, 42, 50, 40, 50, 42] & 6, return [50, 29, 42, 50, 40, 40, 42, 29, 50, 40, 40, 40, 29, 29, 40, 42, 50, 50, 50, 42, 42, 42]', () => {
        const array = [50, 29, 42, 50, 40, 40, 42, 29, 50, 40, 40, 40, 29, 29, 40, 42, 40, 50, 40, 50, 40, 50, 42, 50, 42, 50, 40, 50, 42];
        const number = 6;
        expect(deleteNth(array, number)).toEqual([50, 29, 42, 50, 40, 40, 42, 29, 50, 40, 40, 40, 29, 29, 40, 42, 50, 50, 50, 42, 42, 42]);
    });
    test('Given [24, 44, 44, 24, 46, 46, 46, 46, 46, 46, 24, 24, 24, 46, 44, 46] & 7, return [24, 44, 44, 24, 46, 46, 46, 46, 46, 46, 24, 24, 24, 46, 44]', () => {
        const array = [24, 44, 44, 24, 46, 46, 46, 46, 46, 46, 24, 24, 24, 46, 44, 46];
        const number = 7;
        expect(deleteNth(array, number)).toEqual([24, 44, 44, 24, 46, 46, 46, 46, 46, 46, 24, 24, 24, 46, 44]);
    });
    test('Given [42, 12, 42, 42, 42, 42, 12, 12, 42, 12, 16, 1, 42, 42, 43, 12, 42, 12, 42, 16] & 9, return [42, 12, 42, 42, 42, 42, 12, 12, 42, 12, 16, 1, 42, 42, 43, 12, 42, 12, 16]', () => {
        const array = [42, 12, 42, 42, 42, 42, 12, 12, 42, 12, 16, 1, 42, 42, 43, 12, 42, 12, 42, 16];
        const number = 9;
        expect(deleteNth(array, number)).toEqual([42, 12, 42, 42, 42, 42, 12, 12, 42, 12, 16, 1, 42, 42, 43, 12, 42, 12, 16]);
    });
});


//https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript