const { twoOldestAges } = require('../twoOldestAges')

describe('Given an array of age numbers, return the two highest ages', () => {
    test('Confirm the input array is not mutated', () => {
        const array = [1, 2, 3, 4, 5];
        twoOldestAges(array);
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });
    test('Given [4, 8, 19, 45, 89, 60, 0], return [60, 89] or [89, 60]', () => {
        const array = [4, 8, 19, 45, 89, 60, 0];
        expect(twoOldestAges(array)).toContain(60);
        expect(twoOldestAges(array)).toContain(89);
        expect(twoOldestAges(array)).toHaveLength(2);
        expect(twoOldestAges(array)).toBeInstanceOf(Array);
    });
    test('Given [6, 34, 90, 21, 2, 46, 22], return [90, 46] or [46, 90]', () => {
        const array = [6, 34, 90, 21, 2, 46, 22];
        expect(twoOldestAges(array)).toContain(90);
        expect(twoOldestAges(array)).toContain(46);
        expect(twoOldestAges(array)).toHaveLength(2);
        expect(twoOldestAges(array)).toBeInstanceOf(Array);
    });
    test('Given [85, 86, 87, 88], return [88, 87] or [87, 88]', () => {
        const array = [85, 86, 87, 88];
        expect(twoOldestAges(array)).toContain(88);
        expect(twoOldestAges(array)).toContain(87);
        expect(twoOldestAges(array)).toHaveLength(2);
        expect(twoOldestAges(array)).toBeInstanceOf(Array);
    });
    test('Given [90, 89, 87, 56, 32, 12], return [90, 89] or [89, 90]', () => {
        const array = [90, 89, 87, 56, 32, 12];
        expect(twoOldestAges(array)).toContain(90);
        expect(twoOldestAges(array)).toContain(89);
        expect(twoOldestAges(array)).toHaveLength(2);
        expect(twoOldestAges(array)).toBeInstanceOf(Array);
    });
    test('Given [12, 13, 14], return [14, 13] or [13, 14]', () => {
        const array = [12, 13, 14];
        expect(twoOldestAges(array)).toContain(14);
        expect(twoOldestAges(array)).toContain(13);
        expect(twoOldestAges(array)).toHaveLength(2);
        expect(twoOldestAges(array)).toBeInstanceOf(Array);
    });
    test('Given an array of randomized numbers, return the highest ages (index 2 & 3) in either order', () => {
        const age1 = Math.floor(Math.random() * 10) + 1;
        const age2 = Math.floor(Math.random() * 10) + 1;
        const age3 = Math.floor(Math.random() * 40) + 35;
        const age4 = Math.floor(Math.random() * 90) + 50;
        const age5 = Math.floor(Math.random() * 10) + 1;
        const array = [age1, age2, age3, age4, age5];
        expect(twoOldestAges(array)).toContain(age3);
        expect(twoOldestAges(array)).toContain(age4);
        expect(twoOldestAges(array)).toHaveLength(2);
        expect(twoOldestAges(array)).toBeInstanceOf(Array);
    });
});


//https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript