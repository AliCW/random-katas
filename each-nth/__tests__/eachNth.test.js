const { each } = require('../eachNth');

describe('Given a string & array, determine a new array based upon the given doubling index number', () => {
    test('Check the given array is not mutated', () => {
        const number = 1;
        const array = [1, 2, 3, 4];
        each(number, array)
        expect(array).toEqual([1, 2, 3, 4]);
    });
    test('Given 0 & [1, 2, 3, 4], return []', () => {
        const number = 0;
        const array = [1, 2, 3, 4];
        expect(each(number, array)).toEqual([]);
    });
    test('Given 3 & [], return []', () => {
        const number = 3;
        const array = [];
        expect(each(number, array)).toEqual([]);
    });
    test('Given 1 & [1,2,3,4,5,6], return [1,2,3,4,5,6]', () => {
        const number = 1;
        const array = [1, 2, 3, 4, 5, 6];
        expect(each(number, array)).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test('Given 2 & [1,2,3,4,5,6], return [2,4,6]', () => {
        const number = 2;
        const array = [1, 2, 3, 4, 5, 6];
        expect(each(number, array)).toEqual([2, 4, 6]);
    });
    test('Given 3 & [1, 2], return []', () => {
        const number = 3;
        const array = [1, 2];
        expect(each(number, array)).toEqual([]);
    });
    test('Given -1 & [1,2,3,4,5,6], return [6,5,4,3,2,1]', () => {
        const number = -1;
        const array = [1, 2, 3, 4, 5, 6];
        expect(each(number, array)).toEqual([6, 5, 4, 3, 2, 1]);
    });
    test('Given -2 & [1,2,3,4,5,6], return [5,3,1]', () => {
        const number = -2;
        const array = [1, 2, 3, 4, 5, 6];
        expect(each(number, array)).toEqual([5, 3, 1]);
    });
    test('Given -5 & [1,2,3,4,5,6,7] return [3]', () => {
        const number = -5;
        const array = [1, 2, 3, 4, 5, 6, 7];
        expect(each(number, array)).toEqual([3]);
    });
    test('Given 5 & [1,2,3,4,5,6,7], return [5]', () => {
        const number = 5;
        const array = [1, 2, 3, 4, 5, 6, 7];
        expect(each(number, array)).toEqual([5]);
    });
});

//https://www.codewars.com/kata/5a077e8106d5b654b800004f/train/javascript