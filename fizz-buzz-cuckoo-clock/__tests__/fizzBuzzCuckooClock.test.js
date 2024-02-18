const { fizzBuzzCuckooClock } = require('../fizzBuzzCuckooClock');

describe("Fizzbuzz test - cuckoo function upon the hour", () => {
    test("Returns 'tick' when the given time is not divisible by 3 or 5 and is not on the hour", () => {
        const time = "02:13";
        expect(fizzBuzzCuckooClock(time)).toBe('tick');
    });
    test("Returns 'Fizz' when the given time is divisible by 3", () => {
        const time = "11:12";
        expect(fizzBuzzCuckooClock(time)).toBe('Fizz');
    });
    test("Returns 'Buzz' when the given time is divisible by 5", () => {
        const time = "08:55";
        expect(fizzBuzzCuckooClock(time)).toBe('Buzz');
    });
    test("Returns 'Fizz Buzz' when given a time divisible by 3 and 5", () => {
        const time = "11:15";
        expect(fizzBuzzCuckooClock(time)).toBe('Fizz Buzz');
    });
    test("Returns 'Cuckoo Cuckoo' when given 2 o'clock", () => {
        const time = "02:00";
        expect(fizzBuzzCuckooClock(time)).toBe("Cuckoo Cuckoo");
    });
    test("Returns 'Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo' if the given time is 12 midnight", () => {
        const time = "00:00";
        expect(fizzBuzzCuckooClock(time)).toBe("Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo");
    });
    test("Returns 'Cuckoo' when given a ':00' minute mark", () => {
        const time = "00:30";
        expect(fizzBuzzCuckooClock(time)).toBe("Cuckoo");
    });
    test("Returns 'Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo' (9), when given '21:00'", () => {
        const time = "21:00";
        expect(fizzBuzzCuckooClock(time)).toBe("Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo")
    });
});

//https://www.codewars.com/kata/58485a43d750d23bad0000e6/train/javascript