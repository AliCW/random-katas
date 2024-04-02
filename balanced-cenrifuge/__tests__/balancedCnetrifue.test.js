const { balanced } = require('../balancedCentrifuge');

describe('Check if the given centrifuge array is balanced - return a boolean', () => {
    test('Check the given array is not mutated by the function', () => {
        const array = [1, 0, 1, 0];
        balanced(array);
        expect(array).toEqual([1, 0, 1, 0]);
    });
    test('Given [1, 1], return true', () => {
        const array = [1, 1];
        expect(balanced(array)).toBe(true);
    });
    test('Given [1, 0], return false', () => {
        const array = [1, 0];
        expect(balanced(array)).toBe(false);
    });
    test('Given [1, 0, 1], return false', () => {
        const array = [1, 0, 1];
        expect(balanced(array)).toBe(false);
    });
    test('Given [1, 0, 0, 1, 0], return false', () => {
        const array = [1, 0, 0, 1, 0, 1];
        expect(balanced(array)).toBe(false);
    });
    test('Given [1, 0, 1, 0, 1, 0, 1, 0, 1, 0], return true', () => {
        const array = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
        expect(balanced(array)).toBe(true);
    });
    test('Given [1, 0, 0, 1, 0], return false', () => {
        const array = [1, 0, 0, 1, 0];
        expect(balanced(array)).toBe(false);
    });
    test('Given [1, 0, 1, 0, 1, 0, 1], return true', () => {
        const array = [1, 0, 1, 0, 1, 0, 1];
        expect(balanced(array)).toBe(true);
    });
    test('Given [1, 0, 1, 0, 1, 0, 1], return true', () => {
        const array = [1, 0, 1, 1, 1, 0, 1];
        expect(balanced(array)).toBe(true);
    });
    test('Given [1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0], return true', () => {
        const array = [1,0,0,0,0,1,1,0,0
                      ,0,0,0,1,0,1,0,0,0];
        expect(balanced(array)).toBe(true);
    });
});