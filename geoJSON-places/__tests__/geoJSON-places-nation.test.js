const { findNations } = require("../geoJSON-places-nation");

describe("Given a eclipse JSON type & index number, display the nations that will experience the eclipse", () => {
    test("Given a valid type & index number, return an array with length of 1 (Antartica)", () => {
        const JSON = "total";
        const index = 1;
        expect(findNations(JSON, index)).toBeInstanceOf(Array);
        expect(findNations(JSON, index)).toHaveLength(0);
    });
    test("Given a 'total' type & index 1, return an array empty array - no countries / domains in Antarctica (international & uninhabited by humans", () => {
        const JSON = "total";
        const index = 1;
        expect(findNations(JSON, index)).toEqual([]);
    });
    test("Given a 'total' type & index 0, return many countries", () => {
        const JSON = "total";
        const index = 0;
        expect(findNations(JSON, index)).toEqual([
        "Madagascar-Toliara",
        "France-La Réunion",
        "Indonesia-Sumatera Barat",
        "Indonesia-Riau",
        "Indonesia-Jambi",
        "Indonesia-Kalimantan Barat",
        "Indonesia-Kalimantan Tengah",
        "Indonesia-Kalimantan Timur",
        "Indonesia-Sulawesi Tengah",
        "Indonesia-Maluku",
        "Indonesia-Papua",
        "Papua New Guinea-Western",
        "Papua New Guinea-Central",
    ]);
    });
    test("Given a 'total' type & index 0, return many countries", () => {
        const JSON = "total";
        const index = 41;
        expect(findNations(JSON, index)).toEqual([           
        "France-Corrèze",
        "France-Ardèche",
        "France-Alpes-Maritimes",
        "Italy-Firenze",
        "Italy-Pesaro e Urbino",
        "Croatia-Splitsko-dalmatinska županija",
        "Bosnia and Herzegovina-Federacija Bosne i Hercegovine",
        "Bosnia and Herzegovina-Zlatiborski okrug",
        "Serbia-Raški okrug",
        "Serbia-Rasinski okrug",
        "Serbia-Nišavski okrug",
        "Serbia-Vidin",
        "Bulgaria-Montana",
        "Bulgaria-Pleven",
        "Bulgaria-Teleorman",
        "Romania-Ruse",
        "Bulgaria-Silistra",
        "Bulgaria-Constanţa",
        "Romania-Constanţa",
        "Romania-Krasnodarskij kraj",
        "Russia-Rostovskaja oblast'",
        "Russia-Volgogradskaja oblast'",
        "Russia-Saratovskaja oblast'",
        "Russia-Samarskaja oblast'",
        "Russia-Orenburgskaja oblast'",
        "Russia-Bashkortostan, Respublika",
        "Russia-Sverdlovskaja oblast'",
        "Russia-Hanty-Mansijskij avtonomnyj okrug",
        "Russia-Jamalo-Neneckij avtonomnyj okrug",
        "Russia-Krasnojarskij kraj",]);
    });
});