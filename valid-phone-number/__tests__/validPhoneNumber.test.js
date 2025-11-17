const { validPhoneNumber } = require('../validPhoneNumber');

describe('Given a string, return a boolean depending on if the string is a valid phone number: (000) 000-0000', () => {
    test('Given "(1111)555 2345", return false', () => {
        const string = '(1111)555 2345';
        expect(validPhoneNumber(string)).toBe(false);
    });
    test('Given "(123) 456-7890", return true', () => {
        const string = '(123) 456-7890';
        expect(validPhoneNumber(string)).toBe(true);
    });
    test('Given "(098) 123 4567", return false', () => {
        const string = '(098) 123 4567';
        expect(validPhoneNumber(string)).toBe(false);
    });
    test('Given "(123)456-7890", return false', () => {
        const string = '(123)456-7890';
        expect(validPhoneNumber(string)).toBe(false);
    });
    test('Given "z(413) 605-7458aps", return false', () => {
        const string = 'z(413) 605-7458aps';
        expect(validPhoneNumber(string)).toBe(false);
    });
});


//https://www.codewars.com/kata/525f47c79f2f25a4db000025/train/javascript