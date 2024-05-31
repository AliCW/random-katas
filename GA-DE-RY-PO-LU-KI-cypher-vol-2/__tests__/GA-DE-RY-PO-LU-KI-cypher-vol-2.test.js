const { encode, decode } = require('../GA-DE-RY-PO-LU-KI-cypher-vol-2');

describe('Given a string and cypher, create encode & decode functions to correctly process the string', () => {
    test('Encode function: Given "Ala has a cat" & "gaderypoluki"(cypher), return "Gug hgs g cgt"', () => {
        const string = "Ala has a cat";
        const cypher = "gaderypoluki";
        expect(encode(string, cypher)).toBe("Gug hgs g cgt");
    });
    test('Decode function: Given "Gug hgs g cgt" & "gaderypoluki" (cypher), return "Ala has a cat"', () => {
        const string = "Gug hgs g cgt";
        const cypher = "gaderypoluki";
        expect(decode(string, cypher)).toBe("Ala has a cat");
    });
    test('Encode function: Given "ABCD" & "gaderypoluki" (cypher), return "GBCE"', () => {
        const string = "ABCD";
        const cypher = "gaderypoluki";
        expect(encode(string, cypher)).toBe("GBCE");
    });
    test('Encode function: Given "Dkucr pu yhr ykbir" & "politykarenu" (cypher), return "Dance on the table"', () => {
        const string = "Dkucr pu yhr ykbir";
        const cypher = "politykarenu";
        expect(encode(string, cypher)).toBe("Dance on the table");
    });
    test('Decode function: Given "agedyropulik" & "gaderypoluki" (cypher), return "gaderypoluki"', () => {
        const string = "agedyropulik";
        const cypher = "gaderypoluki";
        expect(decode(string, cypher)).toBe("gaderypoluki");
    });
    test('Decode function: Given "Hmdr nge brres" & "regulaminowy" (cypher), return "Hide our beers"', () => {
        const string = "Hmdr nge brres";
        const cypher = "regulaminowy";
        expect(decode(string, cypher)).toBe("Hide our beers");
    });
    test('Encode function: Given "QtNHbDWgMcPjAzqGW" & "kaceminutowy"(cypher), return ""', () => {
        const string = "QtNHbDWgMcPjAzqGW";
        const cypher = "kaceminutowy";
        expect(encode(string, cypher)).toBe("QoUHbDYgIePjKzqGY");
    });
    test('Decode function: Given " Tu kZaUzJnBiD" & "koniecmatury"(cypher), return ""', () => {
        const string = " Tu kZaUzJnBiD ";
        const cypher = "koniecmatury";
        expect(decode(string, cypher)).toBe(" Ut oZmTzJiBnD ");
    });
    test('Encode function: Given "LlLduOPJ" & "koniecmatury", return "LlLdtKPJ"', () => {
        const string = "LlLduOPJ";
        const cypher = "koniecmatury";
        expect(encode(string, cypher)).toBe("LlLdtKPJ");
    });
    test('Decode function: Given "rVIHHNtWviUu" & "regulaminowy", return "eVMHHOtYvmGg"', () => {
        const string = "rVIHHNtWviUu";
        const cypher = "regulaminowy";
        expect(decode(string, cypher)).toBe("eVMHHOtYvmGg");
    });
});

//https://www.codewars.com/kata/592b7b16281da94068000107/train/javascript