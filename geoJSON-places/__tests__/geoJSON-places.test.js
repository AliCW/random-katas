const { findContinents } = require("../geoJSON-place");

describe("Given the eclipse type & index, display a list of continents the eclipse passes through", () => {
    test("Given a JSON type & index number (total eclipse 1940-10-01) - return an array with length of 2 (SA & AF)", () => {
        const JSON = 'total';
        const index = 27;
        expect(findContinents(JSON, index)).toHaveLength(2);
        expect(findContinents(JSON, index)).toBeInstanceOf(Array);
    });
    test("Given 'total' & '27' (total eclipse 1940-10-01) - return ['South America', 'Afica']", () => {
        const JSON = 'total';
        const index = 27;
        expect(findContinents(JSON, index)).toEqual(['South America', 'Africa']);
    });
    test("Given 'total' & '1' (total eclipse 1903-09-21) - return ['Antarctica']", () => {
        const JSON = 'total';
        const index = 1;
        expect(findContinents(JSON, index)).toEqual(['Antarctica']);
    });
    test("Given 'annular' & '0' (1901-11-11), return ['Afica', 'Asia']", () => {
        const JSON = 'annular';
        const index = 0;
        expect(findContinents(JSON, index)).toEqual(['Africa', 'Asia']);
    });
    test("Given 'hybrid' & '8' (2023-04-20), return ['Oceania']", () => {
        const JSON = 'hybrid';
        const index = 8;
        expect(findContinents(JSON, index)).toEqual(['Oceania', 'Asia']);
    });
});