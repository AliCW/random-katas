const { checkThreeAndTwo } = require('../checkTwoAndThree');

describe('Given an array, return true if it contains two & three elements repeated', () => {
    test('Confirm the input array is not mutated', () => {
        const array = ["a", "a", "a", "b", "b"];
        checkThreeAndTwo(array);
        expect(array).toEqual(["a", "a", "a", "b", "b"]);
    });
    test('Given ["a", "a", "a", "b", "b"], return true', () => {
        const array = ["a", "a", "a", "b", "b"];
        expect(checkThreeAndTwo(array)).toBe(true);
    });
    test('Given ["a", "c", "a", "c", "b"], return false', () => {
        const array = ["a", "c", "a", "c", "b"];
        expect(checkThreeAndTwo(array)).toBe(false);
    });
    test('Given ["a", "a", "a", "a", "a"], return false', () => {
        const array = ["a", "a", "a", "a", "a"];
        expect(checkThreeAndTwo(array)).toBe(false);
    });
    test('Given ["a", "a", "a", "a", "b"], return false', () => {
        const array = ["a", "a", "a", "a", "b"];
        expect(checkThreeAndTwo(array)).toBe(false);
    });
    test('Given ["a", "a", "c", "a", "b"], return false', () => {
        const array = ["a", "a", "c", "a", "b"];
        expect(checkThreeAndTwo(array)).toBe(false);
    });
    test('Given ["b", "b", "c", "b", "c"], return true', () => {
        const array = ["b", "b", "c", "b", "c"];
        expect(checkThreeAndTwo(array)).toBe(true);
    });
});

//https://www.codewars.com/kata/5a9e86705ee396d6be000091/train/javascript
