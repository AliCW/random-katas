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
});

