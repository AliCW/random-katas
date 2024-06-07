const { spot } = require('../spotTheDifference');

describe('Given two strings, return an array containing the indices of the different character', () => {
    test("Given 'abcdefg' & 'abcqetg'), return [3, 5]", () => {
        const string1 = 'abcdefg';
        const string2 = 'abcqetg';
        expect(spot(string1, string2)).toEqual([3, 5]);
    });
    test("Given 'Hello World!' & 'hello world.', return [0, 6, 11]", () => {
        const string1 = 'Hello World!';
        const string2 = 'hello world.';
        expect(spot(string1, string2)).toEqual([0, 6, 11]);
    });
    test("Given 'FixedGrey' & 'FixedGrey', return []", () => {
        const string1 = 'FixedGrey';
        const string2 = 'FixedGrey';
        expect(spot(string1, string2)).toEqual([]);
    });
    test("Given 'bD B' & 'BD B', return [0]", () => {
        const string1 = 'bD B';
        const string2 = 'BD B';
        expect(spot(string1, string2)).toEqual([0]);
    });
    test("Given 's/LrQ TiVXDlhnSeWnieGp' & 's/LrQ TiVXDlHnSeWNieGp', return [12, 17]", () => {
        const string1 = 's/LrQ TiVXDlhnSeWnieGp';
        const string2 = 's/LrQ TiVXDlHnSeWNieGp';
        expect(spot(string1, string2)).toEqual([12, 17]);
    });
    test("Given 'SXExDWf BBd id HU lZl s' & 'SXExDWf BBd ID HU LZl S', return [ 12, 13, 18, 22 ]", () => {
        const string1 = 'SXExDWf BBd id HU lZl s';
        const string2 = 'SXExDWf BBd ID HU LZl S';
        expect(spot(string1, string2)).toEqual([12, 13, 18, 22]);
    });
    test("Given 'G.L    Wj e .mpWozP  !Gh Z' & 'G.L    Wj e .mpWoZP  !Gh Z', return [ 17 ]", () => {
        const string1 = 'G.L    Wj e .mpWozP  !Gh Z';
        const string2 = 'G.L    Wj e .mpWoZP  !Gh Z';
        expect(spot(string1, string2)).toEqual([17]);
    });
    test("Given 's/LrQ TiVXDlhnSeWnieGp' & 's/LrQ TiVXDlHnSeWNieGp', return [12, 17]", () => {
        const string1 = 's/LrQ TiVXDlhnSeWnieGp';
        const string2 = 's/LrQ TiVXDlHnSeWNieGp';
        expect(spot(string1, string2)).toEqual([12, 17]);
    });
});



//  bD B  BD B  [ 0 ]

//https://www.codewars.com/kata/5881460c780e0dd207000084/train/javascript