const { diff } = require('../differenceBetweenArrays');

describe('Given two arrays, return the unique elements from each', () => {
    test('Confirm the input array is not mutated', () => {
        const array1 = ["a", "b"];
        const array2 = ["c", "d"];
        diff(array1, array2);
        expect(array1).toEqual(["a", "b"]);
        expect(array2).toEqual(["c", "d"]);
    });
    test('Given ["a", "b"] & [], return ["a", "b"] - all different, second array is empty', () => {
        const array1 = ["a", "b"];
        const array2 = [];
        expect(diff(array1, array2)).toEqual(["a", "b"]);
    });
    test('Given [] & ["a", "b"], return ["a", "b"] - all different, first array is empty', () => {
        const array1 = [];
        const array2 = ["a", "b"];
        expect(diff(array1, array2)).toEqual(["a", "b"]);
    });
    test('Given ["a","b","z","d","e","d"] & ["u"]. return [] - no matches', () => {
        const array1 = ["a","b","z","d","e","d"];
        const array2 = ["u"];
        expect(diff(array1, array2)).toEqual(["a","b","d","e","u","z"]);
    });
    test('Given ["a","b","z"] & ["a", "b"], return ["z"] - two matches, one difference', () => {
        const array1 = ["a","b","z"];
        const array2 = ["a", "b"];
        expect(diff(array1, array2)).toEqual(["z"]);
    });
    test('Given ["a","b","z","d","e","d"] & ["a","b", "j","j"], return ["d","e","j","z"] - numerous differences & matches', () => {
        const array1 = ["a","b","z","d","e","d"];
        const array2 = ["a","b", "j","j"];
        expect(diff(array1, array2)).toEqual(["d","e","j","z"]);
    });
    test('Given ["a","b","z","d","e","d"] & ["g","i","r","m","p","e"], return [] - numerous differences & matches', () => {
        const array1 = ["a","b","z","d","e","d"];
        const array2 = ["g","i","r","m","p","e"];
        expect(diff(array1, array2)).toEqual(["a","b", "d", "g", "i", "m", "p", "r", "z"]);
    });
});