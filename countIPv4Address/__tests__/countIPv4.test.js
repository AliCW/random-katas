const { countIPv4 } = require('../countIPv4');

describe('Given a starting & ending IPv4 address, return the total number of possible addresses between the two', () => {
    test('Given "150.0.0.0" & "150.0.0.1", return 1 (single address, fourth octet test)', () => {
        const start = "150.0.0.0";
        const end = "150.0.0.1";
        expect(countIPv4(start, end)).toBe(1);
    });
    test('Given "10.0.0.0" & "10.0.0.50", return 50 (multiple addresses, fourth octet)', () => {
        const start = "10.0.0.0";
        const end = "10.0.0.50";
        expect(countIPv4(start, end)).toBe(50);
    });
    test('Given "20.0.0.10" & "20.0.1.0", return 246 (multiple addresses, second & third octets)', () => {
        const start = "20.0.0.10";
        const end = "20.0.1.0";
        expect(countIPv4(start, end)).toBe(246);
    });
    test('Given "10.11.12.13" & "10.11.13.0", return 243 (multiple addresses, second & third octets)', () => {
        const start = "10.11.12.13";
        const end = "10.11.13.0";
        expect(countIPv4(start, end)).toBe(243);
    });
    test('Given "160.0.0.0" & "160.0.1.0", return 256 (multiple addresses, third octet)', () => {
        const start = "160.0.0.0";
        const end = "160.0.1.0";
        expect(countIPv4(start, end)).toBe(256);
    });
    test('Given "170.0.0.0" & "170.1.0.0", return 65536 (multiple addresses, second octet)',  () => {
        const start = "170.0.0.0";
        const end = "170.1.0.0";
        expect(countIPv4(start, end)).toBe(65536);
    });
    test('Given "50.0.0.0" & "50.1.1.1", return 65793 (multiple addresses, second, third & fourth octets)', () => {
        const start = "50.0.0.0";
        const end = "50.1.1.1";
        expect(countIPv4(start, end)).toBe(65793);
    });
    test('Given "180.0.0.0" & "181.0.0.0", return 16777216 (multiple addresses, first octet)', () => {
        const start = "180.0.0.0";
        const end = "181.0.0.0";
        expect(countIPv4(start, end)).toBe(16777216);
    });
    test('Given "1.2.3.4" & "5.6.7.8", return 67372036 (multiple addresses, all octets)', () => {
        const start = "1.2.3.4";
        const end = "5.6.7.8";
        expect(countIPv4(start, end)).toBe(67372036);
    });
    test('Given "22.11.81.172" & "230.248.212.106", return 3505226430 (multiple addresses, all octets)', () => {
        const start = "22.11.81.172";
        const end = "230.248.212.106";
        expect(countIPv4(start, end)).toBe(3505226430);
    });
    test('Given "3.5.194.170" & "142.194.110.92", return 2344397746 (multiple addresses, all octets)', () => {
        const start = "3.5.194.170";
        const end = "142.194.110.92";
        expect(countIPv4(start, end)).toBe(2344397746);
    });
});

//https://www.codewars.com/kata/526989a41034285187000de4/train/javascript