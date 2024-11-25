const { calc } = require('../calc');

describe('Given a string representing numbers & symbols, split the string & return the accumilation', () => {
    test('Given "1+1", return 2 - single sum, single digit (addition)', () => {
        const string = '1+1';
        expect(calc(string)).toBe(2);
    });
    test('Given "2-1", return 1 - single sum, single digit (subtraction)', () => {
        const string = '2-1';
        expect(calc(string)).toBe(1);
    });
    test('Given "2*2", return 4 - single sum, single digit (multiplication)', () => {
        const string = '2*2';
        expect(calc(string)).toBe(4);
    });
    test('Given "9/3", return 3 - single sum, single digit (division)', () => {
        const string = '9/3';
        expect(calc(string)).toBe(3);
    });
    test('Given "10+10", return 20 - single sum, two digits (addition)', () => {
        const string = '10+10';
        expect(calc(string)).toBe(20);
    });
    test('Given "30-20", return 10 - single sum, two digits (subtraction)', () => {
        const string = '30-20';
        expect(calc(string)).toBe(10);
    });
    test('Given "10*10", return 100 - single sum, two digits (multiplication)', () => {
        const string = "10*10";
        expect(calc(string)).toBe(100);
    });
    test('Given "10/10", return 1 - single sum, two digits (division)', () => {
        const string = '10/10';
        expect(calc(string)).toBe(1);
    });
    test('Given "1+1+1", return 3 - two sums, single digit (addition)', () => {
        const string = '1+1+1';
        expect(calc(string)).toBe(3);
    });
    test('Given "8-2-2", return 4 - two sums, single digit (subtraction)', () => {
        const string = '8-2-2';
        expect(calc(string)).toBe(4);
    });
    test('Given "2*2*2", return 8 - two sums, single digit (multiplication)', () => {
        const string = '2*2*2';
        expect(calc(string)).toBe(8);
    });
    test('Given "8/2/2", return 2 - two sums, single digit (division)', () => {
        const string = '8/2/2';
        expect(calc(string)).toBe(2);
    });
    test('Given "80+120-90", return 2 - two sums, many digits (addition & subtraction)', () => {
        const string = '80+120-90';
        expect(calc(string)).toBe(110);
    });
    test('Given "105+5*11", return 160 - two sums, many digits (addition & multiplication)', () => {
        const string = '105+5*11';
        expect(calc(string)).toBe(1210);
    });
    test('Given "100+20/12", return 10 - two sums, many digits (addition & division)', () => {
        const string = '100+20/12';
        expect(calc(string)).toBe(10);
    });
    test('Given "90*10/450", return 2, - two sums, many digits (multiplication & division)', () => {
        const string = '90*10/450';
        expect(calc(string)).toBe(2);
    });
    test('Given "1.1+1.9", return 3 - single sum, decimals (addition)', () => {
        const string = "1.1+1.9";
        expect(calc(string)).toBe(3);
    });
});