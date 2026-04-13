const { bot } = require("../string-manipulation");

describe(`Siri needs you to code some new features: addition, subtraction and a weather checker. There's no need to implement the speech recognition, that's taken care of...
        Examples: "Add 7 to 15." -> 22 "Subtract 7 from 15." -> 8 "What is the weather at 5:30pm?" -> "sunny"
        According to the weather API, it is "sunny" from (including) 6am to 6pm (including), and "raining" the rest of the day.
        For the purposes of this kata, 12:00am is midnight and 12:00pm is noon.`, () => {
    test("Given 'Add 5 to 20', return 25", () => {
        const prompt = "Add 5 to 20";
        expect(bot.message(prompt)).toBe(25);
    });
    test("Given 'Add 56 to 52', return 108", () => {
        const prompt = "Add 56 to 52";
        expect(bot.message(prompt)).toBe(108);
    });
    test("Given 'Add 1064 to 3', return 1067", () => {
        const prompt = "Add 1064 to 3";
        expect(bot.message(prompt)).toBe(1067);
    });
    test("Given 'Subtract 15 from 20', return 5", () => {
        const prompt = "Subtract 15 from 20";
        expect(bot.message(prompt)).toBe(5);
    });
    test("Given 'Subtract 32 from 64', return 32", () => {
        const prompt = "Subtract 32 from 64";
        expect(bot.message(prompt)).toBe(32);
    });
    test("Given 'Subtract 2 from 10', return 10", () => {
        const prompt = "Subtract 2 from 10";
        expect(bot.message(prompt)).toBe(8);
    });
    test("Given 'What is the weather at 4:30pm?', return 'sunny'", () => {
        const prompt = "What is the weather at 4:30pm?";
        expect(bot.message(prompt)).toBe("sunny");
    });
    test("Given 'What is the weather at 10:30pm?', return 'raining'", () => {
        const prompt = "What is the weather at 10:30pm?";
        expect(bot.message(prompt)).toBe("raining");
    });
    test("Given 'What is the weather at 6:00pm?' return 'sunny'", () => {
        const prompt = "What is the weather at 6:00pm?";
        expect(bot.message(prompt)).toBe("sunny");
    });
    test("Given 'What is the weather at 12:53pm?' return 'sunny'", () => {
        const prompt = "What is the weather at 12:53pm?";
        expect(bot.message(prompt)).toBe("sunny");
    });
    test("Given 'What is the weather at 2:30am?', return 'raining'", () => {
        const prompt = "What is the weather at 2:30am?";
        expect(bot.message(prompt)).toBe("raining");
    });
    test("Given 'What is the weather at 12:53am?', return 'raining'", () => {
        const prompt = "What is the weather at 12:53am?";
        expect(bot.message(prompt)).toBe("raining");
    });
    test("Given 'What is the weather at 6:54am?', return 'sunny'", () => {
        const prompt = "What is the weather at 6:54am?";
        expect(bot.message(prompt)).toBe("sunny");
    });
});

//https://www.codewars.com/kata/5817c0148e74302c4800039c/train/javascript