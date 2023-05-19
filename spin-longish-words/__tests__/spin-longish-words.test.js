const { spinLongishWords } = require('../spin-longish-words')

describe('reverse words in the given string that are five or more characters long', () => {
    test('returns a string', () => {
        const string = '';
        expect(typeof spinLongishWords(string)).toBe('string')
    })
    test('returns a string with no words reversed when none are longer than five characters', () => {
        const string = 'the ball is red?';
        expect(spinLongishWords(string)).toBe('the ball is red?')
    })
    test('returns a string with one word reversed when over five characters long', () => {
        const string = 'the ball is purple';
        expect(spinLongishWords(string)).toBe('the ball is elprup')
    })
    test('returns a string with two words reversed when over five characters long', () => {
        const string = 'the ball is somehow purple';
        expect(spinLongishWords(string)).toBe('the ball is wohemos elprup')
    })
    test('returns a string with multiple words reversed when over five characters long', () => {
        const string = 'the ball is somehow purple yet the colour should be red obviously';
        expect(spinLongishWords(string)).toBe('the ball is wohemos elprup yet the ruoloc dluohs be red ylsuoivbo')
    })
})

//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript