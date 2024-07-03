const { searchArray } = require('../indexOfArrayInArray');

describe('Given an array of arrays (search) & a query array (query), return the index of the query within the search or -1 if it cannot be found. Return an error if the search terms are invalid', () => {
    test('Confirm initial inputs are not mutated', () => {
        const arrays = [[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]];
        const search = [9, 20];
        searchArray(arrays, search);
        expect(arrays).toEqual([[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]]);
        expect(search).toEqual([9, 20]);
    });
    test('Given [[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]] & [9, 20], return 2 - basic test, third element', () => {
        const arrays = [[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]];
        const search = [9, 20];
        expect(searchArray(arrays, search)).toBe(2);
    });
    test('Given [[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]] & [7, 2], return 1 (basic test, first element)', () => {
        const arrays = [[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]];
        const search = [7, 2];
        expect(searchArray(arrays, search)).toBe(1);
    });
    test('Given [[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]] & [7, 87], return 6 (basic test, sixth element', () => {
        const arrays = [[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]];
        const search = [7, 87];
        expect(searchArray(arrays, search)).toBe(6);
    });
    test('Given [[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]] & [1, 12], return -1 (query is not in the list of given arrays', () => {
        const arrays = [[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]];
        const search = [1, 12];
        expect(searchArray(arrays, search)).toBe(-1);
    });
    test('Given [[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]] & 7, expect an error (query is a number not an array)', () => {
        const arrays = [[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]];
        const search = 7;
        expect(() => searchArray(arrays, search)).toThrow(Error);
        expect(() => searchArray(arrays, search)).toThrow("Invalid Query");
    });
    test('Given [[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]] & [3, 4, 5], expect an error (query is an incorrect length)', () => {
        const arrays = [[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]];
        const search = [3, 4, 5];
        expect(() => searchArray(arrays, search)).toThrow(Error);
        expect(() => searchArray(arrays, search)).toThrow("Invalid Query");
    });
    test('Given [[1, 2], [3, 4], [5, 6, 7], [8, 9]], & [9, 20], expect an error (an array in the list is an incorrect length)', () => {
        const arrays = [[1, 2], [3, 4], [5, 6, 7], [8, 9]];
        const search = [9, 20];
        expect(() => searchArray(arrays, search)).toThrow(Error);
        expect(() => searchArray(arrays, search)).toThrow("Invalid Length Of Array In Array List");
    });
});



//https://www.codewars.com/kata/5783ef69202c0ee4cb000265/train/javascript