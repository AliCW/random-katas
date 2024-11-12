const { consecutive } = require("../consecutiveItems");

describe("check the input array (arr) contains the given numbers (a, b) in consecutive order", () => {
    test("Tests the input array is not mutated", () => {
        const arr = [1, 3, 5, 7];
        const a = 3;
        const b = 7;
        consecutive(arr, a, b);
        expect(arr).toEqual([1, 3, 5, 7]);
    });
    test("Given [1, 3, 5, 7], 3, 7 - return false", () => {
        const arr = [1, 3, 5, 7];
        const a = 3;
        const b = 7;
        expect(consecutive(arr, a, b)).toBe(false);
    });
    test("Given [1, 3, 5, 7], 5, 3 - return true", () => {
        const arr = [1, 3, 5, 7];
        const a = 5;
        const b = 3;
        expect(consecutive(arr, a, b)).toBe(true);
    });
    test("Given [1, 6, 9, -3, 4, -78, 0], -3, 4 - return true", () => {
        const arr = [1, 6, 9, -3, 4, -78, 0];
        const a = -3;
        const b = 4;
        expect(consecutive(arr, a, b)).toBe(true);
    });
    test(`Given [
        773196,   -1835, -135148,
       -850827,  -34512, -420717,
        203367,  810215, -739214,
        -48726,  752441, -269073,
        997606, -177226, -370667,
        302434,  732964, -281774,
       -201718
     ], -135148 -420717 - return false`, () => {
        const arr = [
            773196,   -1835, -135148,
           -850827,  -34512, -420717,
            203367,  810215, -739214,
            -48726,  752441, -269073,
            997606, -177226, -370667,
            302434,  732964, -281774,
           -201718
         ];
         const a = -135148;
         const b = -420717;
         expect(consecutive(arr, a, b)).toBe(false);
     });
     test(`Given [
        243738,   25489, 646297,
        342873,  946628, 364586,
        159863, -848615, 907258,
        105267, -188723, 689037,
       -641562,  919720, -24900,
        862797, -594212, 123866,
       -983929, -937466
     ], 25489, 646297 - return true`, () => {
        const arr = [
            243738,   25489, 646297,
            342873,  946628, 364586,
            159863, -848615, 907258,
            105267, -188723, 689037,
           -641562,  919720, -24900,
            862797, -594212, 123866,
           -983929, -937466
         ];
         const a = 25489;
         const b = 646297;
         expect(consecutive(arr, a, b)).toBe(true);
     });
});

//https://www.codewars.com/kata/5f6d533e1475f30001e47514/train/javascript