const { encrypt, decrypt } = require('../simpleEncryptionQwerty');

describe(`Given a string & number key, encrypt the given string (attach rules )
    The crypting-regions are these 3 lines from your keyboard:
    1. "qwertyuiop"
    2. "asdfghjkl"
    3. "zxcvbnm,."

    If a char of the string is not in any of these regions, take the char direct in the output.
    If a char of the string is in one of these regions: Move it by the part of the key in the 
    region and take this char at the position from the region. 
    If the movement is over the length of the region, continue at the beginning.
    The encrypted char must have the same case like the decrypted char! 
    So for upperCase-chars the regions are the same, but with pressed "SHIFT"!

    The Encryption-Key is an integer number from 000 to 999. E.g.: 127

    The first digit of the key (e.g. 1) is the movement for the first line.
    The second digit of the key (e.g. 2) is the movement for the second line.
    The third digit of the key (e.g. 7) is the movement for the third line.`, () => {
    test('Encrypt test - Given "A" & 111, return "S"', () => {
        const string = 'A';
        const key = 111;
        expect(encrypt(string, key)).toBe('S');
    });
    test('Encrypt test - Given "Abc" & 212, return "Smb"', () => {
        const string = 'Abc';
        const key = 212;
        expect(encrypt(string, key)).toBe('Smb');
    });
    test('Encrypt test - Given "Wave" & 0, return "Wave"', () => {
        const string = 'Wave';
        const key = 0;
        expect(encrypt(string, key)).toBe('Wave');
    });
    test('Encrypt test - Given "Wave" & 345, return "Tg.y"', () => {
        const string = 'Wave';
        const key = 345;
        expect(encrypt(string, key)).toBe('Tg.y');
    });
    test('Encrypt test - Given "Ball" & 134, return ">fdd"', () => {
        const string = 'Ball';
        const key = 134;
        expect(encrypt(string, key)).toBe('>fdd');
    });
    test('Encrypt test - Given "Ball" & 444, return ">gff"', () => {
        const string = 'Ball';
        const key = 444;
        expect(encrypt(string, key)).toBe('>gff');
    });
    test('Encrypt test - Given "This is a test." & 348, return "Iaqh qh g iyhi,"', () => {
        const string = 'This is a test.';
        const key = 348;
        expect(encrypt(string, key)).toBe('Iaqh qh g iyhi,');
    });
    test(`Encrypt test - Given "Do the kata Kobayashi Maru Test. Endless fun and excitement when finding a solution." & 583
            return "Sr pgi jlpl Jr,lqlage Zlow Piapc I.skiaa dw. l.s ibnepizi.p ugi. de.se.f l arkwper.c"`, () => {
        const string = 'Do the kata Kobayashi Maru Test. Endless fun and excitement when finding a solution.';
        const key = 583;
        expect(encrypt(string, key)).toBe('Sr pgi jlpl Jr,lqlage Zlow Piapc I.skiaa dw. l.s ibnepizi.p ugi. de.se.f l arkwper.c');
    });
    test('Decrypt test - Given "S" & 111, return "A"', () => {
        const string = 'S';
        const key = 111;
        expect(decrypt(string, key)).toBe('A');
    });
    test('Decrypt test - Given "Smb" & 212, return "Abc"', () => {
        const string = 'Smb';
        const key = 212;
        expect(decrypt(string, key)).toBe('Abc');
    });
    test('Decrypt test - Given "Wave" & 000, return "Wave"', () => {
        const string = 'Wave';
        const key = 0;
        expect(decrypt(string, key)).toBe('Wave');
    });
    test('Decrypt test - Given "Tg.y" & 345, return "Wave"', () => {
        const string = 'Tg.y';
        const key = 345;
        expect(decrypt(string, key)).toBe('Wave');
    });
    test('Decrypt test - Given ">fdd" & 134, return "Ball"', () => {
        const string = ">fdd";
        const key = 134;
        expect(decrypt(string, key)).toBe('Ball');
    });
    test('Given "vM{Gwj bmec" & 958, return "b<{Les n,rv"', () => {
        const string = 'vM{Gwj bmec';
        const key = 958;
        expect(decrypt(string, key)).toBe('b<{Les n,rv');
    });
    test('Given "Iaqh qh g iyhi," & 348, return "This is a test."', () => {
        const string = "Iaqh qh g iyhi,";
        const key = 348;
        expect(decrypt(string, key)).toBe('This is a test.');
    });
});

//https://www.codewars.com/kata/57f14afa5f2f226d7d0000f4/train/javascript
