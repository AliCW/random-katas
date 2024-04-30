const { stonePick } = require('../stonePickaxes');

describe('Given an array of materials of 1-200 length, return the total number of cobblestone pickaxes that can be created (wood makes 4 sticks)', () => {
    test('Confirm the input array is not mutated', () => {
        const array = [1, 2, 3, 4, 5];
        stonePick(array);
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });
    test(`Given [], return 0`, () => {
        const array = [];
        expect(stonePick(array)).toBe(0);
    });
    test(`Given ['Sticks', 'Sticks', 'Sticks', 'Sticks', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone']`, () => {
        const array = ['Sticks', 'Sticks', 'Sticks', 'Sticks', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone'];
        expect(stonePick(array)).toBe(2);
    });
    test(`Given ['Sticks', 'Sticks', 'Sticks', 'Sticks', 'Wool',   'Wool', 'Wool', 'Dirt', 'Dirt', 'Dirt', 'Dirt', 'Dirt', 'Dirt'], return 0`, () => {
        const array = ['Sticks', 'Sticks', 'Sticks', 'Sticks', 'Wool',   'Wool', 'Wool', 'Dirt', 'Dirt', 'Dirt', 'Dirt', 'Dirt', 'Dirt'];
        expect(stonePick(array)).toBe(0);
    });
    test(`Given ['Wood', 'Wood', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone'], return 4`, () => {
        const array = ['Wood', 'Wood', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone'];
        expect(stonePick(array)).toBe(4);
    });
    test(`Given ['Sticks', 'Sticks', 'Sticks', 'Sticks', 'Cobblestone', 'Cobblestone', 'Cobblestone'], return 1`, () => {
        const array = ['Sticks', 'Sticks', 'Sticks', 'Sticks', 'Cobblestone', 'Cobblestone', 'Cobblestone'];
        expect(stonePick(array)).toBe(1);
    });
    test(`Given ['Dirt'x(51), 'Cobblestone'x(21), 'Sticks'x(1), 'Wool'x(41), 'Diamond'x(12)], return 0`, () => {
        const array = [];
        for(let i = 0; i < 51; i++){array.push('Dirt')};
        for(let i = 0; i < 21; i++){array.push('Cobblestone')};
        array.push('Sticks');
        for(let i = 0; i < 41; i++){array.push('Wool')};
        for(let i = 0; i < 12; i++){array.push('Diamond')};
        expect(stonePick(array)).toBe(0);
    });
    test(`Given ['Wool'x(21), 'Sticks'x(11), 'Stone'x(31), 'Cobblestone'x(41), 'Diamond'x(8)], return 5`, () => {
        const array = [];
        for(let i = 0; i < 21; i++){array.push('Wool')};
        for(let i = 0; i < 11; i++){array.push('Sticks')};
        for(let i = 0; i < 31; i++){array.push('Stone')};
        for(let i = 0; i < 41; i++){array.push('Cobblestone')};
        for(let i = 0; i < 8; i++){array.push('Diamond')};
        expect(stonePick(array)).toBe(5);
    });
    test(`Given ['Wood'x(21), 'Cobblestone'x(91)], return 30`, () => {
        const array = [];
        for(let i = 0; i < 21; i++){array.push('Wood')};
        for(let i = 0; i < 91; i++){array.push('Cobblestone')};
        expect(stonePick(array)).toBe(30);
    });
    test(`Given ['Wood'x(12), 'Cobblestone'x(120)], return 24`, () => {
        const array = [];
        for(let i = 0; i < 12; i++){array.push('Wood')};
        for(let i = 0; i < 120; i++){array.push('Cobblestone')};
        expect(stonePick(array)).toBe(24);
    });
});

//https://www.codewars.com/kata/65c0161a2380ae78052e5731/train/javascript