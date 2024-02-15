const { arrayProduct } = require('../arrayProduct');

describe("Find the product of the array minus the index number & return an array with the products", () => {
    test("Given input is not mutated", () => {
        const numbers = [1, 2, 3, 4];
        arrayProduct(numbers);
        expect(numbers).toEqual([1, 2, 3, 4]);
    });
    test("Given [1, 0], return [0n, 1n]", () => {
        const numbers = [1, 0];
        expect(arrayProduct(numbers)).toEqual([0n, 1n]);
    });
    test("Given [1, 2, 3, 4], return [24n, 12n, 8n, 6n]", () => {
        const numbers = [1, 2, 3, 4];
        expect(arrayProduct(numbers)).toEqual([24n, 12n, 8n, 6n]);
    });
    test("Given [0, -99, 0], return [0n, 0n, 0n]", () => {
        const numbers = [0, -99, 0];
        expect(arrayProduct(numbers)).toEqual([0n, 0n, 0n]);
    });
    test("Given [9, 0, -2], return [0n, -18n, 0n]", () => {
        const numbers = [9, 0, -2];
        expect(arrayProduct(numbers)).toEqual([0n, -18n, 0n]);
    });
});