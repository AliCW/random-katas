const { door } = require('../killerGarageDoor');

describe('', () => {
    test('Given "P..............", return "123455555555555"', () => {
        const string = 'P..............';
        expect(door(string)).toBe('123455555555555');
    });
    test('Given "P......P......", return "12345554321000"', () => {
        const string = 'P......P......';
        expect(door(string)).toBe('12345554321000');
    });
    test('Given "P.P..", return "12222"', () => {
        const string = 'P.P..';
        expect(door(string)).toBe('12222');
    });
    test('Given "P.P.P....", return "122234555"', () => {
        const string = 'P.P.P....';
        expect(door(string)).toBe('122234555');
    });
    test('Given "P.O....", return "1210000"', () => {
        const string = 'P.O....';
        expect(door(string)).toBe('1210000');
    });
    test('Given "P..OP..P..", return "1232222100"', () => {
        const string = 'P..OP..P..';
        expect(door(string)).toBe('1232222100');
    });
    test('Given "..P...O.....", return "001234321000"', () => {
        const string = '..P...O.....';
        expect(door(string)).toBe('001234321000');
    });
    test('Given ".....P......P.P..P....", return "0000012345554333321000"', () => {
        const string = '.....P......P.P..P....';
        expect(door(string)).toBe('0000012345554333321000');
    });
    test('Given "P......P.O....", return "12345554345555"', () => {
        const string = 'P......P.O....';
        expect(door(string)).toBe('12345554345555');
    });
    test('Given "P......P..OP..P...", return "123455543233334555"', () => {
        const string = 'P......P..OP..P...';
        expect(door(string)).toBe('123455543233334555');
    });
});

//https://www.codewars.com/kata/58b1ae711fcffa34090000ea/train/javascript