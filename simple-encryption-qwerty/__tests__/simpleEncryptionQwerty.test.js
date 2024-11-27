const { encrypt, decrypt } = require('../simpleEncryptionQwerty');

describe('Given a string & number key, encrypt the given string (attach rules )', () => {
    test('Given "A" & 111, return "S"', () => {
        const string = 'A';
        const key = 111;
        expect(encrypt(string, key)).toBe('S');
    });
    test('Given "Abc" & 212, return "Smb"', () => {
        const string = 'Abc';
        const key = 212
        expect(encrypt(string, key)).toBe('Smb');
    });
    test('Given "Wave" & 0, return "Wave"', () => {
        const string = 'Wave';
        const key = 0
        expect(encrypt(string, key)).toBe('Wave');
    });
    test('Given "Wave" & 345, return "Tg.y"', () => {
        const string = 'Wave';
        const key = 345
        expect(encrypt(string, key)).toBe('Tg.y');
    });
    test('Given "Ball" & 134, return ">fdd"', () => {
        const string = "Ball";
        const key = 134
        expect(encrypt(string, key)).toBe('>fdd');
    });
    test('Given "Ball" & 444, return ">gff"', () => {
        const string = "Ball";
        const key = 444;
        expect(encrypt(string, key)).toBe('>gff');
    });
});

//https://www.codewars.com/kata/57f14afa5f2f226d7d0000f4/train/javascript


// 1. "qwertyuiop"
// 2. "asdfghjkl"
// 3. "zxcvbnm,."
