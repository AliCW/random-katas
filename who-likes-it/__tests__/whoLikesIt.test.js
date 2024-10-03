const { likes } = require('../whoLikesIt');

describe(`Given an array of names, return a string as below:
        [] = "no one likes this"
        ["Peter"] = "Peter likes this"
        ["Jacob, "Alez"] = "Jacob and Alex like this"
        ["Max", "John", "Mark"] = "Max, John and Mark like this"
        ["Alex", "Jacob", "Mark", "Max"] = "Alex, Jacob and 2 others like this"`, () => {
    test('Given [], return "no one likes this"', () => {
        const array = [];
        expect(likes(array)).toBe('no one likes this');
    });
    test('Given ["Peter"], return "Peter likes this"', () => {
        const array = ['Peter'];
        expect(likes(array)).toBe('Peter likes this');
    });
    test('Given ["Jacob", "Alex"], return "Jacob and Alex like this"', () => {
        const array = ['Jacob', 'Alex'];
        expect(likes(array)).toBe('Jacob and Alex like this');
    });
    test('Given ["Max", "John", "Mark"], return "Max, John and Mark like this"', () => {
        const array = ['Max', 'John', 'Mark'];
        expect(likes(array)).toBe('Max, John and Mark like this');
    });
    test('Given ["Alex", "Jacob", "Mark", "Max"], return "Alex, Jacob and 2 others like this"', () => {
        const array = ["Alex", "Jacob", "Mark", "Max"];
        expect(likes(array)).toBe('Alex, Jacob and 2 others like this');
    });
    test('Given ["Max", "John", "Mark", "Jacob", "Hugh", "Peter"], return "Max, John and 4 others like this"', () => {
        const array = ["Max", "John", "Mark", "Jacob", "Hugh", "Peter"];
        expect(likes(array)).toBe("Max, John and 4 others like this");
    });
    test('Given ["Hugh", "Peter", "Max", "John", "Mark", "Jacob", "Another", "Name", "Here"], return "Hugh, Peter and 7 others like this"', () => {
        const array = ["Hugh", "Peter", "Max", "John", "Mark", "Jacob", "Another", "Name", "Here"];
        expect(likes(array)).toBe("Hugh, Peter and 7 others like this");
    });
});

//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript