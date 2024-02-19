const { validateNumber } = require('../validPhoneNumberUK');

describe("Check if input is a valid UK mobile number", () => {
    test("Given a valid number (07000000000), return 'In with a chance'", () => {
        const str = "07000000000";
        expect(validateNumber(str)).toBe("In with a chance");
    });
    test("Given an invalid number (0700000000 - not enough digits), return 'Plenty more fish in the sea', 'Number too short'", () => {
        const str = "0700000000";
        expect(validateNumber(str)).toBe("Plenty more fish in the sea");
    });
    test("Given a valid number (0745-487-61-20), return 'In with a chance'", () => {
        const str = "0745-487-61-20";
        expect(validateNumber(str)).toBe("In with a chance");
    });
    test("Given a valid number (+447535514555), return 'In with a chance'", () => {
        const str = "+447535514555";
        expect(validateNumber(str)).toBe("In with a chance");
    });
    test("Given a valid number (0745--487-61-20), return 'In with a chance'", () => {
        const str = "0745--487-61-20";
        expect(validateNumber(str)).toBe("In with a chance");
    });
    test("Given an invalid number, (+337535512555 - invalid prefix), return 'Plenty more fish in the sea'", () => {
        const str = "+337535512555";
        expect(validateNumber(str)).toBe("Plenty more fish in the sea");
    });
    test("Given an invalid number (08286033012 - not a valid prefix), return 'Plenty more fish in the sea'", () => {
        const str = "08286033012";
        expect(validateNumber(str)).toBe("Plenty more fish in the sea");
    });
});

//https://www.codewars.com/kata/581a52d305fe7756720002eb/train/javascript