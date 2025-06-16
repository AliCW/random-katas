const { encode, decode } = require('../vowelCode');

describe(`Create encode & decode functions for the given pattern: 
    a -> 1
    e -> 2
    i -> 3
    o -> 4
    u -> 5`, () => {
        test('Encode: Given "hello", return "h2ll4"', () => {
            const string = 'hello';
            expect(encode(string)).toBe('h2ll4');
        });
        test('Encode: Given "How are you today?", return "H4w 1r2 y45 t4d1y?"', () => {
            const string = 'How are you today?';
            expect(encode(string)).toBe('H4w 1r2 y45 t4d1y?')
        });
        test('Encode: Given "This is an encoding test.", return "Th3s 3s 1n 2nc4d3ng t2st."', () => {
            const string = 'This is an encoding test.';
            expect(encode(string)).toBe('Th3s 3s 1n 2nc4d3ng t2st.');
        });
        test('Decode: Given "h2ll4", return "hello"', () => {
            const string = 'h2ll4';
            expect(decode(string)).toBe('hello')
        });
        test('Decode: Given "H4w 1r2 y45 t4d1y?", return "How are you today?"', () => {
            const string = 'H4w 1r2 y45 t4d1y?';
            expect(decode(string)).toBe('How are you today?');
        });
        test('Decode: Given "Th3s 3s 1n d2c4d3ng t2st.", return "This is an decoding test."', () => {
            const string = 'Th3s 3s 1n d2c4d3ng t2st.';
            expect(decode(string)).toBe('This is an decoding test.');
        });
});

//https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript