const { sortAnimal } = require('../sortAnimals');

describe('Given and array of animals sorted by number of legs, the the name alphabetically', () => {
    test('Confirm the input argument has not been mutated', () => {
        const input = 
        [{ name: "Snake", numberOfLegs: 0 },
        { name: "Dog", numberOfLegs: 4 },
        { name: "Centipede", numberOfLegs: 100 },];
        sortAnimal(input);
        expect(input).toEqual([
            { name: "Snake", numberOfLegs: 0 },
            { name: "Dog", numberOfLegs: 4 },
            { name: "Centipede", numberOfLegs: 100 },]);
    });
    test('Given an [] return and []', () => {
        const input = [];
        expect(sortAnimal(input)).toEqual([]);
    });
    test('Given an array of three different animals, sort by number of legs', () => {
        const input = 
        [{ name: "Snake", numberOfLegs: +0 },
        { name: "Centipede", numberOfLegs: 100 },
        { name: "Dog", numberOfLegs: 4 },];
        expect(sortAnimal(input)).toEqual([
            { name: "Snake", numberOfLegs: +0 },
            { name: "Dog", numberOfLegs: 4 },
            { name: "Centipede", numberOfLegs: 100 },
        ]);
    });
    test('Given an array of five different animals, sort by leg number & names alphabetically', () => {
        const input = 
        [{ name: "Snake", numberOfLegs: 0 },
        { name: "Centipede", numberOfLegs: 100 },
        { name: "Dog", numberOfLegs: 4 },
        { name: 'Human', numberOfLegs: 2 },
        { name: 'Bird', numberOfLegs: 2 },];
        expect(sortAnimal(input)).toEqual([
            { name: "Snake", numberOfLegs: 0 },
            { name: 'Bird', numberOfLegs: 2 },
            { name: 'Human', numberOfLegs: 2 },
            { name: "Dog", numberOfLegs: 4 },
            { name: "Centipede", numberOfLegs: 100 },
        ]);
    });
    test('Given an array of seven different animals, sort by leg number & names alphabetically', () => {
        const input = 
        [{ name: "Snake", numberOfLegs: 0 },
        { name: "Centipede", numberOfLegs: 100 },
        { name: "Dog", numberOfLegs: 4 },
        { name: 'Human', numberOfLegs: 2 },
        { name: 'Bird', numberOfLegs: 2 },
        { name: "Lizard", numberOfLegs: 4 },
        { name: "Spider", numberOfLegs: 8},];
        expect(sortAnimal(input)).toEqual([
            { name: "Snake", numberOfLegs: 0 },
            { name: 'Bird', numberOfLegs: 2 },
            { name: 'Human', numberOfLegs: 2 },
            { name: "Dog", numberOfLegs: 4 },
            { name: "Lizard", numberOfLegs: 4 },
            { name: "Spider", numberOfLegs: 8},
            { name: "Centipede", numberOfLegs: 100 },
        ]);
    });
    test('Edge Case - Given an array of "Monsters" with number id, sort by leg number, id order & alphabetical order', () => {
        const input = 
        [{ name: 'Monster1', numberOfLegs: 64 }, 
        { name: 'Monster6', numberOfLegs: 64 }, 
        { name: 'Monster0', numberOfLegs: 64 }, 
        { name: 'Monster8', numberOfLegs: 64 }, 
        { name: 'Monster7', numberOfLegs: 64 }, 
        { name: 'Monster3', numberOfLegs: 65 }, 
        { name: 'Monster2', numberOfLegs: 67 }, 
        { name: 'Monster4', numberOfLegs: 67 }, 
        { name: 'Monster5', numberOfLegs: 69 }];
        expect(sortAnimal(input)).toEqual([ 
            { name: 'Monster0', numberOfLegs: 64 }, 
            { name: 'Monster1', numberOfLegs: 64 }, 
            { name: 'Monster6', numberOfLegs: 64 }, 
            { name: 'Monster7', numberOfLegs: 64 }, 
            { name: 'Monster8', numberOfLegs: 64 }, 
            { name: 'Monster3', numberOfLegs: 65 }, 
            { name: 'Monster2', numberOfLegs: 67 }, 
            { name: 'Monster4', numberOfLegs: 67 }, 
            { name: 'Monster5', numberOfLegs: 69 }]);
    });
});

//https://www.codewars.com/kata/58ff1c8b13b001a5a50005b4/train/javascript
