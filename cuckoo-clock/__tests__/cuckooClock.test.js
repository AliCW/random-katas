const { cuckooClock } = require('../cuckooClock');

describe(`Given the current time & a number of chimes, return what the time will be following the number of chimes
The cuckoo bird pops out of the cuckoo clock and chimes once on the quarter hour, half hour, and three-quarter hour. At the beginning of each hour (1-12), it chimes out the hour.`, () => {
    test('Given "03:38" & 19, return "06:00"', () => {
        const time = "03:38";
        const chimes = 19;
        expect(cuckooClock(time, chimes)).toBe("06:00");
    });
    test('Given "08:17" & 113, return "08:00"', () => {
        const time = "08:17";
        const chimes = 113;
        expect(cuckooClock(time, chimes)).toBe("08:00");
    });
    test('Given "08:17" & 150, return "11:00"', () => {
        const time = "08:17";
        const chimes = 150;
        expect(cuckooClock(time, chimes)).toBe("11:00");
    });
    test('Given "08:17" & 114, return "08:15"', () => {
        const time = "08:17";
        const chimes = 114;
        expect(cuckooClock(time, chimes)).toBe("08:15");
    });
    test('Given "07:22" & 1, return "07:30"', () => {
        const time = "07:22";
        const chimes = 1;
        expect(cuckooClock(time, chimes)).toBe("07:30");
    });
    test('Given "12:22" & 2, return "12:45"', () => {
        const time = "12:22";
        const chimes = 2;
        expect(cuckooClock(time, chimes)).toBe("12:45");
    });
    test('Given "10:00" & 10, return "10:00"', () => {
        const time = "10:00";
        const chimes = 10;
        expect(cuckooClock(time, chimes)).toBe("10:00");
    });
    test('Given "01:30 & 2, return 01:45"', () => {
        const time = "01:30";
        const chimes = 2;
        expect(cuckooClock(time, chimes)).toBe("01:45");
    });
    test('Given "12:30" & 4, return "01:15"', () => {
        const time = "12:30";
        const chimes = 4;
        expect(cuckooClock(time, chimes)).toBe("01:15");
    });
    test('Given "09:53" & 50, return "02:30"', () => {
        const time = "09:53";
        const chimes = 50;
        expect(cuckooClock(time, chimes)).toBe("02:30");
    });
});

//https://www.codewars.com/kata/656e4602ee72af0017e37e82/train/javascript