const { GADERYPOLUKIcypher } = require('../GA-DE-RY-PO-LU-KI-cypher');

describe(`Create encode & decode functions for the given cypher:
    G => A
    g => a
    a => g
    A => G
    D => E`, () => {
    test('Encode function: Given "Ala has a cat", return "Gug hgs g cgt"', () => {
        const cypher = new GADERYPOLUKIcypher();
        const string = "Ala has a cat";
        expect(cypher.encode(string)).toBe("Gug hgs g cgt");
    });
    test('Encode function: Given "ABCD", return "GBCE"', () => {
        const cypher = new GADERYPOLUKIcypher();
        const string = "ABCD";
        expect(cypher.encode(string)).toBe("GBCE");
    });
    test('Encode function: Given "gaderypoluki", return "agedyropulik"', () => {
        const cypher = new GADERYPOLUKIcypher();
        const string = "gaderypoluki";
        expect(cypher.encode(string)).toBe("agedyropulik");
    });
    test('Encode function: Given "wJG4vhz6BvVDCZlDdfeOr", return "wJA4vhz6BvVECZuEefdPy"', () => {
        const cypher = new GADERYPOLUKIcypher();
        const string = "wJG4vhz6BvVDCZlDdfeOr";
        expect(cypher.encode(string)).toBe("wJA4vhz6BvVECZuEefdPy");
    });
    test('Encode function: Given "Iy5rgUVckbq", return "Kr5yaLVcibq"', () => {
        const cypher = new GADERYPOLUKIcypher();
        const string = "Iy5rgUVckbq";
        expect(cypher.encode(string)).toBe("Kr5yaLVcibq");
    });
    test('Decode function: Given "Gug hgs g cgt", return "Ala has a cat"', () => {
        const cypher = new GADERYPOLUKIcypher();
        const string = "Gug hgs g cgt";
        expect(cypher.decode(string)).toBe("Ala has a cat");
    });
    test('Decode function: Given "agedyropulik", return "gaderypoluki"', () => {
        const cypher = new GADERYPOLUKIcypher();
        const string = "agedyropulik";
        expect(cypher.decode(string)).toBe("gaderypoluki");
    });
    test('Decode function: Given "GBCE", return "ABCD"', () => {
        const cypher = new GADERYPOLUKIcypher();
        const string = "GBCE";
        expect(cypher.decode(string)).toBe("ABCD");
    });
    test('Decode function: Given "QWKmvkb ekE wdkwdmsdkgfn djg", return "QWImvib diD weiwemseiafn eja"', () => {
        const cypher = new GADERYPOLUKIcypher();
        const string = "QWKmvkb ekE wdkwdmsdkgfn djg";
        expect(cypher.decode(string)).toBe("QWImvib diD weiwemseiafn eja");
    });
    test('Decode function: Given "", return ""', () => {
        const cypher = new GADERYPOLUKIcypher();
        const string = "FVNjknvj sjc js csd"
        expect(cypher.decode(string)).toBe("FVNjinvj sjc js cse");
    });
});


//https://www.codewars.com/kata/592a6ad46d6c5a62b600003f/train/javascript
