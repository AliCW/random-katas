const { wordToBin } = require('../wordToBinary');

describe('Given a string, return an array with the binary values of each character', () => {
    test('Given "man", return "[ "01101101", "01100001", "01101110" ]"', () => {
        const str = "man";   
        expect(wordToBin(str)).toEqual(['01101101', '01100001', '01101110']);
    });
    test('Given "AB", return ["01000001", "01000010"]', () => {
        const str = "AB"; 
        expect(wordToBin(str)).toEqual(["01000001", "01000010"]);
    });
    test("Given 'wecking', return ['01110111', '01100101', '01100011', '01101011', '01101001', '01101110', '01100111']", () => {
        const str = "wecking";
        expect(wordToBin(str)).toEqual([ '01110111', '01100101', '01100011', '01101011', '01101001', '01101110', '01100111' ]);
    });
    test("Given 'Ruby', return ['01010010', '01110101', '01100010', '01111001']", () => {
        const str = "Ruby";
        expect(wordToBin(str)).toEqual([ '01010010', '01110101', '01100010', '01111001' ]);
    });
    test("Given 'Yosemite' , return [ '01011001', '01101111', '01110011', '01100101', '01101101', '01101001', '01110100', '01100101' ]", () => {
        const str = 'Yosemite';
        expect(wordToBin(str)).toEqual([ '01011001', '01101111', '01110011', '01100101', '01101101', '01101001', '01110100', '01100101' ]);
    });
});

//https://www.codewars.com/kata/59859f435f5d18ede7000050/train/javascript