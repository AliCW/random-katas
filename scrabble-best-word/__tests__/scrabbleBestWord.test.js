const { scrabbleBestWord } = require('../scrabbleBestWord');

describe('Given an array of words & points (representing A-Z - [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10] unless specified) - return the index of the highest scoring word', () => {
    test('Confirm the input arrays are not mutated', () => {
        const pointsArray = [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10];
        const wordsArray = ["WHO","IS","THE","BEST","OF","US"];
        scrabbleBestWord(pointsArray, wordsArray);
        expect(pointsArray).toEqual([1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10]);
        expect(wordsArray).toEqual(["WHO","IS","THE","BEST","OF","US"]);
    });
    test('Given ["WHO","IS","THE","BEST","OF","US"], return 0', () => {
        const pointsArray = [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10];
        const wordsArray = ["WHO","IS","THE","BEST","OF","US"];
        expect(scrabbleBestWord(pointsArray, wordsArray)).toBe(0);
    });
    test('Given ["AAA", "B", "A", "E", "I"], return 1', () => {
        const pointsArray = [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10];
        const wordsArray = ["AAA", "B", "A", "E", "I"];
        expect(scrabbleBestWord(pointsArray, wordsArray)).toBe(1);
    });
    test('Given ["AABCDEF", "WHO","IS","THE","BEST","OF","US"], return 1', () => {
        const pointsArray = [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10];
        const wordsArray = ["AABCDEF", "WHO","IS","THE","BEST","OF","US"];
        expect(scrabbleBestWord(pointsArray, wordsArray)).toBe(1);
    });
    test('Given ["NOQ","TXAY","S","OM","ESFT","CJUKQ","QL","QO","ASTK","Y"], return 5', () => {
        const pointsArray = [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10];
        const wordsArray = ["NOQ","TXAY","S","OM","ESFT","CJUKQ","QL","QO","ASTK","Y"];
        expect(scrabbleBestWord(pointsArray, wordsArray)).toBe(5);
    });
    test('Given ["SVWLIDP","FCPKTHW","EREMN","NFEF","PQ","FSC","ZYPOSXJ","BOR","YCGG","RC","DVPE","VAOE","OIGK","OTQE","REJFUFD","FVBCSSB","VHJ","BEC","MWZQ","WX","L","ZPCB","JKLHE","RYFTY","NKP","ID","O","KA","VRXX","NTDB","OERKPC","YFLUI","SKQCJ","PXDSW","ITYWD","TC","LOIDQEJ","NE","YND","VJHOCEC","RPRANZ","BQ","STM","RGVBFW","SMWUYLW","KT","SXHY","XCE","T","SC","UDJU","CHDR","UGXNQ","CQOOBA","O","NWW","V","L","BAQ","AZN","LBTR","N","QSURR","KADPH","M","LCBEAKM","ZHEVXS","F","TVAIQCY","MF","KCI","YQ","RCG","AKYPCP","WJXG","RQXOI","SJI","TWXZ","J","HIKCGHV","EAAXGG","AETSH","EO","BUET","TDIQCO","TKL","FJCRY","ZHAJLK","OLMCVA","F"], return 6', () => {
        const pointsArray = [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10];
        const wordsArray = ["SVWLIDP","FCPKTHW","EREMN","NFEF","PQ","FSC","ZYPOSXJ","BOR","YCGG","RC","DVPE","VAOE","OIGK","OTQE","REJFUFD","FVBCSSB","VHJ","BEC","MWZQ","WX","L","ZPCB","JKLHE","RYFTY","NKP","ID","O","KA","VRXX","NTDB","OERKPC","YFLUI","SKQCJ","PXDSW","ITYWD","TC","LOIDQEJ","NE","YND","VJHOCEC","RPRANZ","BQ","STM","RGVBFW","SMWUYLW","KT","SXHY","XCE","T","SC","UDJU","CHDR","UGXNQ","CQOOBA","O","NWW","V","L","BAQ","AZN","LBTR","N","QSURR","KADPH","M","LCBEAKM","ZHEVXS","F","TVAIQCY","MF","KCI","YQ","RCG","AKYPCP","WJXG","RQXOI","SJI","TWXZ","J","HIKCGHV","EAAXGG","AETSH","EO","BUET","TDIQCO","TKL","FJCRY","ZHAJLK","OLMCVA","F"];
        expect(scrabbleBestWord(pointsArray, wordsArray)).toBe(6);
    });
    test('Given ["RBBL","ZJ","ZOFXE","LMBFCFX","O","JG","SYRYE","VXG","EU","DAIFZR","BQUNZHH","WKO","TFPHPLX","SWLG","CY","JYQNDSM","ITPS","B","UVSDMWR","LCPS"], return 15', () => {
        const pointsArray = [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10];
        const wordsArray = ["RBBL","ZJ","ZOFXE","LMBFCFX","O","JG","SYRYE","VXG","EU","DAIFZR","BQUNZHH","WKO","TFPHPLX","SWLG","CY","JYQNDSM","ITPS","B","UVSDMWR","LCPS"];
        expect(scrabbleBestWord(pointsArray, wordsArray)).toBe(15);
    });
    test(`Given a points array of [8, 3, 5, 10, 5, 7, 6, 1, 1, 7, 4, 4, 5, 8, 10, 10, 1, 1, 6, 2, 1, 2, 9, 4, 5, 3] &
      ['FR', 'DJ', 'BNBHDYJRF', 'GGWUZ', 'BGCDRVFK', 'CHT', 'HHWZHER', 'NNT', 'CKMBIQEQP', 'OWA', 'XLBREBYUV', 'J', 'VDZLLJY', 'BRO', 'ELZQAB', 
      'QAQHCVO', 'D', 'JPQXPEC', 'KD', 'SOVEBWSI', 'KN', 'X', 'AYQFI', 'HJ', 'IPAXEEYHG', 'VTA', 'TPWK'], return 2`, () => {
        const pointArray = [8, 3, 5, 10, 5, 7,  6,  1, 1, 7, 4,  4, 5, 8, 10, 10, 1, 1, 6,  2, 1, 2,  9,  4, 5, 3];
        const wordArray = ['FR', 'DJ', 'BNBHDYJRF', 'GGWUZ', 'BGCDRVFK', 'CHT', 'HHWZHER', 'NNT', 'CKMBIQEQP', 'OWA', 'XLBREBYUV', 'J', 'VDZLLJY', 'BRO', 'ELZQAB', 
        'QAQHCVO', 'D', 'JPQXPEC', 'KD', 'SOVEBWSI', 'KN', 'X', 'AYQFI', 'HJ', 'IPAXEEYHG', 'VTA', 'TPWK'];
        expect(scrabbleBestWord(pointArray, wordArray)).toBe(2);
      });
});



//https://www.codewars.com/kata/563f960e3c73813942000015/train/javascript