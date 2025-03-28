const { password } = require('../passwordValidator');

describe('Given a string as a password, check its validitity & return a bool (atleast 1 uppercase & lowercase letter, 1 number & 8 chars long)', () => {
    test('Given "Abcd1234", return true', () => {
        const pass = 'Abcd1234';
        expect(password(pass)).toBe(true);
    });
    test('Given "Abcd123", return false', () => {
        const pass = 'Abcd123';
        expect(password(pass)).toBe(false);
    });
    test('Given "abcd1234", return false', () => {
        const pass = 'abcd1234';
        expect(password(pass)).toBe(false);
    });
    test('Given "AbcdefGhijKlmnopQRsTuvwxyZ1234567890", return true', () => {
        const pass = 'AbcdefGhijKlmnopQRsTuvwxyZ1234567890';
        expect(password(pass)).toBe(true);
    });
    test('Given "ABCD1234", return false', () => {
        const pass = 'ABCD1234';
        expect(password(pass)).toBe(false);
    });
    test('Given "Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,", return true', () => {
        const pass = 'Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,';
        expect(password(pass)).toBe(true);
    });
    test('Given "!@#$%^&*()-_+={}[]|\:;?/>.<,", return false', () => {
        const pass = '!@#$%^&*()-_+={}[]|\:;?/>.<,';
        expect(password(pass)).toBe(false);
    });
});

//https://www.codewars.com/kata/56a921fa8c5167d8e7000053/train/javascript