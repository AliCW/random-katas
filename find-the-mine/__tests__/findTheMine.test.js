const { mineLocation } = require('../findTheMine');

describe('Given a 2D array, return the location of the mine (1) in an array representing the mines index [rowIndex, columnIndex]', () => {
    test('Confirm the input array is not mutated', () => {
        const array = [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ];
        mineLocation(array);
        expect(array).toEqual([ [1, 0, 0], [0, 0, 0], [0, 0, 0] ]);
    });
    test('Given [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ], return [0, 0]', () => {
        const array = [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ];
        expect(mineLocation(array)).toEqual([0, 0]);
    });
    test('Given [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ], return [1, 1]', () => {
        const array = [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ];
        expect(mineLocation(array)).toEqual([1, 1]);
    })
    test('Given [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] , return [2, 1]', () => {
        const array = [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ];
        expect(mineLocation(array)).toEqual([2, 1]);
    });
    test(`Given [
        [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0
        ],
        [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0
        ],
        [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0
        ],
        [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0
        ],
        [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0
        ],
        [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0
        ],
        [
            1, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0
        ],
        [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0
        ],
        [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0
        ],
        [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0
        ],
        [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0
        ]], return [6, 0]`, () => {
            
            const array = [
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0
            ],
            [
                1, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0
            ]
            ]
            expect(mineLocation(array)).toEqual([6, 0]);
        });
});

//https://www.codewars.com/kata/528d9adf0e03778b9e00067e/train/javascript
