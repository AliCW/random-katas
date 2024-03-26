const { generateHashtag } = require('../hashtagGenerator');

describe('Check if the input string is a valid hashtag, must; start with "#" & an uppercase letter, and be no longer than 140 characters long', () => {
    test('Given "", return false', () => {
        const string = "";
        expect(generateHashtag(string)).toBe(false);
    });
    test('Given " ".repeat(200), return false', () => {
        const string = " ".repeat(200);
        expect(generateHashtag(string)).toBe(false);
    });
    test('Given "Do We have A Hashtag", return "#DoWeHaveAHashtag"', () => {
        const string = "Do We have A Hashtag";
        expect(generateHashtag(string)).toBe("#DoWeHaveAHashtag");
    });
    test('Given "Codewars", return #Codewars', () => {
        const string = "Codewars";
        expect(generateHashtag(string)).toBe("#Codewars");
    });
    test('Given "Codewars Is Nice", return #CodewarsIsNice', () => {
        const string = "Codewars Is Nice";
        expect(generateHashtag(string)).toBe("#CodewarsIsNice");
    });
    test('Given "code" + " ".repeat(140) + "wars", return #CodeWars', () => {
        const string = "code" + " ".repeat(140) + "wars";
        expect(generateHashtag(string)).toBe("#CodeWars");
    });
    test('Given "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat", return false', () => {
        const string = "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat";
        expect(generateHashtag(string)).toBe(false);
    });
    test('Given "a".repeat(139), "#A" + "a".repeat(138)', () => {
        const string = "a".repeat(139);
        expect(generateHashtag(string)).toBe("#A" + "a".repeat(138));
    });
    test('Given "a".repeat(140), return false', () => {
        const string = "a".repeat(140);
        expect(generateHashtag(string)).toBe(false);
    });
    test('Given " wi wkt  nyviu  cseg file", return #WiWktNyviuCsegFile', () => {
        const string = "  wi wkt  nyviu  cseg file";
        expect(generateHashtag(string)).toBe("#WiWktNyviuCsegFile");
    });
});

//https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
