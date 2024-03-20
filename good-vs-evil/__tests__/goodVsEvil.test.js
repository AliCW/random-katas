const { goodVsEvil } = require('../goodVsEvil');

describe(`Given two strings to denote each side, calculate the victor by numbers - 
    Quality Index: 
    Hobbits: 1
    Men: 2
    Elves: 3
    Dwarves: 3
    Eagles: 4
    Wizards: 10
    
    Orcs: 1
    Men: 2
    Wargs: 2
    Goblins: 2
    Uruk Hai: 3
    Trolls: 5
    Wizards: 10`, () => {
    test('Given "1 1 1 1 1 1" & "1 1 1 1 1 1 1", return "Battle Result: Evil eradicates all trace of Good"', () => {
        const good = "1 1 1 1 1 1";
        const evil = "1 1 1 1 1 1 1";
        expect(goodVsEvil(good, evil)).toBe("Battle Result: Evil eradicates all trace of Good");
    });
    test('Given "0 0 0 0 0 10" & "0 1 1 1 1 0 0", return "Battle Result: Good triumphs over Evil"', () => {
        const good = "0 0 0 0 0 10";
        const evil = "0 1 1 1 1 0 0";
        expect(goodVsEvil(good, evil)).toBe("Battle Result: Good triumphs over Evil");
    });
    test('Given "1 0 0 0 0 0" & "1 0 0 0 0 0 0", return "Battle Result: No victor on this battle field"', () => {
        const good = "1 0 0 0 0 0";
        const evil = "1 0 0 0 0 0 0";
        expect(goodVsEvil(good, evil)).toBe("Battle Result: No victor on this battle field");
    });
    test('Given "1 0 0 0 1 0" & "0 0 0 0 0 1 0", return "Battle Result: No victor on this battle field"', () => {
        const good = "1 0 0 0 1 0";
        const evil = "0 0 0 0 0 1 0";
        expect(goodVsEvil(good, evil)).toBe("Battle Result: No victor on this battle field");
    });
    test('Given "0 1 0 0 0 0" & "1 0 0 0 0 0 0", return "Battle Result: Good triumphs over Evil"', () => {
        const good = "0 1 0 0 0 0";
        const evil = "1 0 0 0 0 0 0";
        expect(goodVsEvil(good, evil)).toBe("Battle Result: Good triumphs over Evil");
    });
    test('Given "1 1 1 1 1 1" & "0 1 1 1 1 1 1", return "Battle Result: Evil eradicates all trace of Good"', () => {
        const good = "1 1 1 1 1 1";
        const evil = "0 1 1 1 1 1 1";
        expect(goodVsEvil(good, evil)).toBe("Battle Result: Evil eradicates all trace of Good");
    });
    test('Given "0 0 0 0 0 1" & "0 1 1 1 1 0 0", return "Battle Result: Good triumphs over Evil"', () => {
        const good = "0 0 0 0 0 1";
        const evil = "0 1 1 1 1 0 0";
        expect(goodVsEvil(good, evil)).toBe("Battle Result: Good triumphs over Evil");
    });
    test('Given "0 1 0 0 0 0" & "0 0 0 1 0 0 0", return "Battle Result: No victor on this battle field"', () => {
        const good = "0 1 0 0 0 0";
        const evil = "0 0 0 1 0 0 0";
        expect(goodVsEvil(good, evil)).toBe("Battle Result: No victor on this battle field");
    });
});

//'', '
//https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript

//worth: - multiply the below valuesby that of in inpt strings and its respective index 


