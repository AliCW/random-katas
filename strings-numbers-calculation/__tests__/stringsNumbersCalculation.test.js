const { calculateString } = require('../stringsNumbersCalculation');

describe('Given a string of alphanumerical characters seperated by a + - * / - return the result of the numbers on each side to the nearest whole number as a string', () => {
    test('Given ";$%§fsdfsd235??df/sdfgf5gh.000kk0000", return 47 (235 / 5.0)', () => {
        const str = ';$%§fsdfsd235??df/sdfgf5gh.000kk0000.';
        expect(calculateString(str)).toBe("47");
    });
    test('Given "sdfsd23454sdf*2342", return 54929268 (23454 * 2342)', () => {
        const str = "sdfsd23454sdf*2342";
        expect(calculateString(str)).toBe("54929268");
    });
    test('Given "fsdfsd235???34.4554s4234df-sdfgf2g3h4j442", return -210908', () => {
        const str = 'fsdfsd235???34.4554s4234df-sdfgf2g3h4j442';
        expect(calculateString(str)).toBe("-210908");
    });
    test('Given "fsdfsd234.4554s4234df+sf234442", return 234676', () => {
        const str = 'fsdfsd234.4554s4234df+sf234442';
        expect(calculateString(str)).toBe("234676");
    });
    test('Given "a1a2b3c.c0c/a1a0b.cc00c", return 12', () => {
        const str = "a1a2b3c.c0c/a1a0b.cc00c";
        expect(calculateString(str)).toBe("12");
    });
    test('Given "2cy06d.13m4t4-234x6nl.wf18", return -2140', () => {
        const str = "2cy06d.13m4t4-234x6nl.wf18";
        expect(calculateString(str)).toBe("-2140");
    });
    test('Given "7m95jc.w85331/3a97i0b.k4r2y55j5w", return 0', () => {
        const str = "7m95jc.w85331/3a97i0b.k4r2y55j5w";
        expect(calculateString(str)).toBe("0");
    });
    test('Given "4f06172u.e5ijl5v/4yj94mlfe.2z0", return 822', () => {
        const str = "4f06172u.e5ijl5v/4yj94mlfe.2z0";
        expect(calculateString(str)).toBe("822");
    });
    test('Given "57g6m7r9j.yl86h321*930z5m51on.112", return 53674060850', () => {
        const str = "57g6m7r9j.yl86h321*930z5m51on.112";
        expect(calculateString(str)).toBe("53674060850");
    });
    test('Given "41t6pa71.085js9u*3zc0kv4r1.l70qb", return 126750942', () => {
        const str = "41t6pa71.085js9u*3zc0kv4r1.l70qb";
        expect(calculateString(str)).toBe("126750942");
    });
    test('Given "989869.0fc7l/84y3mr2.262a0pi9.", return 117', () => {
        const str = "989869.0fc7l/84y3mr2.262a0pi9.";
        expect(calculateString(str)).toBe("117");
    });
});

//https://www.codewars.com/kata/56b5dc75d362eac53d000bc8/train/javascript