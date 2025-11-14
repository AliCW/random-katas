const { catchThief } = require('../catchThief');

describe(`Some people have long queues in front of the cash machine. Some people need to withdraw money. They are ordinary people; Some people want to steal other people's money, yes, they are thieves ;-) Some people are policemen. They are looking for thieves.

Given a queue in string format, like this: "X1X#2X#XX". # represents the ordinary people; "X" represents the thief; digit 1-9 represents the policeman. The numerical value represents the police's watching range. For example, 1 means the police could see 1 people in front of him and 1 people in the back.

All the thieves in the line of sight of the police will be caught!

Your task is to calculate the number of thieves who have been caught.`, () => {
    test('Given "X1X#2X#XX", return 3', () => {
        const string = 'X1X#2X#XX';
        expect(catchThief(string)).toBe(3);
    });
    test('Given "X5X#3X###XXXX##1#X1X", return 5', () => {
        const string = 'X5X#3X###XXXX##1#X1X';
        expect(catchThief(string)).toBe(5);
    });
    test('Given "X#X1#X9XX", return 5', () => {
        const string = 'X#X1#X9XX';
        expect(catchThief(string)).toBe(5);
    });
    test('Given "5#X#9###XX7XX", return 5', () => {
        const string = '5#X#9###XX7XX';
        expect(catchThief(string)).toBe(5);
    });
    test('Given "246X3X6XXXXXXXXX##3X44XXXXX##", return 14', () => {
        const string = '246X3X6XXXXXXXXX##3X44XXXXX##';
        expect(catchThief(string)).toBe(14);
    });
    test('Given "#1#5498####X#7####X56459#X2XXX#4#X#XX9#68X#X7XX59X", return 14', () => {
        const string = '#1#5498####X#7####X56459#X2XXX#4#X#XX9#68X#X7XX59X';
        expect(catchThief(string)).toBe(14);
    });
    test('Given "#1#5498####X#7####X56459#X2XXX#4#X#XX9#68X#X7XX59X", return 14', () => {
        const string = '#1#5498####X#7####X56459#X2XXX#4#X#XX9#68X#X7XX59X';
        expect(catchThief(string)).toBe(14);
    });
});

//https://www.codewars.com/kata/5954584610080b7252000003/train/javascript