const { ipToInt32 } = require('../IPv4ToInt32');

describe('Return the 32 bit integer number for the binary of the given IPv4 address string', () => {
    test('Given "128.32.10.1", return 2149583361 (simple IP address test)', () => {
        const addressString = "128.32.10.1";
        expect(ipToInt32(addressString)).toBe(2149583361);
    });
    test('Given "128.114.17.104", return 2154959208 (simple IP address test)', () => {
        const addressString = "128.114.17.104";
        expect(ipToInt32(addressString)).toBe(2154959208);
    });
    test('Given "240.55.15.68", return 4030140228', () => {
        const addressString = "240.55.15.68";
        expect(ipToInt32(addressString)).toBe(4030140228);
    });
    test('Given "40.164.200.192", return 681887936', () => {
        const addressString = "40.164.200.192";
        expect(ipToInt32(addressString)).toBe(681887936);
    });
    test('Given "244.91.92.246", return 4099628278', () => {
        const addressString = "244.91.92.246";
        expect(ipToInt32(addressString)).toBe(4099628278);
    });
    test('Given "0.0.0.0", return 0 (minimal valued IP address test)', () => {
        const addressString = "0.0.0.0";
        expect(ipToInt32(addressString)).toBe(0);
    });
    test('Given "255.255.255.255", return 4294967295 (maximum valued IP address test)', () => {
        const addressString = "255.255.255.255";
        expect(ipToInt32(addressString)).toBe(4294967295);
    });
});

//https://www.codewars.com/kata/52ea928a1ef5cfec800003ee/train/javascript