const { disemvowel } = require('../disemvowel');

describe('Given a string, return a new string with all vowels removed', () => {
    test('Given "This website is for losers LOL!", return "Ths wbst s fr lsrs LL!"', () => {
        const string = "This website is for losers LOL!";
        expect(disemvowel(string)).toBe("Ths wbst s fr lsrs LL!");
    });
    test(`Given "No offense but,\nYour writing is among the worst I've ever read", return "N ffns bt,\nYr wrtng s mng th wrst 'v vr rdq"`, () => {
        const string = "No offense but,\nYour writing is among the worst I've ever read";
        expect(disemvowel(string)).toBe("N ffns bt,\nYr wrtng s mng th wrst 'v vr rd");
    });
    test('Given "What are you, a communist?", return "Wht r y,  cmmnst?"', () => {
        const string = "What are you, a communist?";
        expect(disemvowel(string)).toBe("Wht r y,  cmmnst?");
    });
    test('Given "PmoQkyWvjHU iy yaOG", return "PmQkyWvjH y yG"', () => {
        const string = "PmoQkyWvjHU iy yaOG";
        expect(disemvowel(string)).toBe("PmQkyWvjH y yG");
    });
    test('Given "jsIdkuGUcr lEoOlrvUjongFUlbjvvA", return "jsdkGcr llrvjngFlbjvv"', () => {
        const string = "jsIdkuGUcr lEoOlrvUjongFUlbjvvA";
        expect(disemvowel(string)).toBe("jsdkGcr llrvjngFlbjvv");
    });
    test('Given "GIueAhejb E KZPGaNzIiVUOT", return "Ghjb  KZPGNzVT"', () => {
        const string = "GIueAhejb E KZPGaNzIiVUOT";
        expect(disemvowel(string)).toBe("Ghjb  KZPGNzVT");
    });
    test('Given "OHid KKXYqDsYogqHcxofG eyin", return "Hd KKXYqDsYgqHcxfG yn"', () => {
        const string = "OHid KKXYqDsYogqHcxofG eyin";
        expect(disemvowel(string)).toBe("Hd KKXYqDsYgqHcxfG yn");
    });
    test('Given "mSiVAyBTLdCkR", return "mSVyBTLdCkR"', () => {
        const string = "mSiVAyBTLdCkR";
        expect(disemvowel(string)).toBe("mSVyBTLdCkR");
    });
});

//https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript