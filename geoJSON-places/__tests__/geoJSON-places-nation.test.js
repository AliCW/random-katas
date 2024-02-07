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
        "Madagascar - Toliara",
        "France - La Réunion",
        "Indonesia - Sumatera Barat",
        "Indonesia - Riau",
        "Indonesia - Jambi",
        "Indonesia - Kalimantan Barat",
        "Indonesia - Kalimantan Tengah",
        "Indonesia - Kalimantan Timur",
        "Indonesia - Sulawesi Tengah",
        "Indonesia - Maluku",
        "Indonesia - Papua",
        "Papua New Guinea - Western",
        "Papua New Guinea - Central",
        ]);
    });
    test("Given a 'total' type & index 0, return many countries", () => {
        const JSON = "total";
        const index = 41;
        expect(findNations(JSON, index)).toEqual([           
        "France - Corrèze",
        "France - Ardèche",
        "France - Alpes-Maritimes",
        "Italy - Firenze",
        "Italy - Pesaro e Urbino",
        "Croatia - Splitsko-dalmatinska županija",
        "Bosnia and Herzegovina - Federacija Bosne i Hercegovine",
        "Serbia - Zlatiborski okrug",
        "Serbia - Raški okrug",
        "Serbia - Rasinski okrug",
        "Serbia - Nišavski okrug",
        "Bulgaria - Vidin",
        "Bulgaria - Montana",
        "Bulgaria - Pleven",
        "Romania - Teleorman",
        "Bulgaria - Ruse",
        "Bulgaria - Silistra",
        "Romania - Constanţa",
        "Russia - Krasnodarskij kraj",
        "Russia - Rostovskaja oblast'",
        "Russia - Volgogradskaja oblast'",
        "Russia - Saratovskaja oblast'",
        "Russia - Samarskaja oblast'",
        "Russia - Orenburgskaja oblast'",
        "Russia - Bashkortostan, Respublika",
        "Russia - Sverdlovskaja oblast'",
        "Russia - Hanty-Mansijskij avtonomnyj okrug",
        "Russia - Jamalo-Neneckij avtonomnyj okrug",
        "Russia - Krasnojarskij kraj",]);
    });
    test("Given an 'annular' type and index of 1, return many countries - passing null iso3166 lookup", () => {
        const JSON = "annular";
        const index = 0;
        expect(findNations(JSON, index)).toEqual([
        "Egypt - Al Buḩayrah",
        "Egypt - Al Qāhirah",
        "Egypt - Janūb Sīnā'",
        "Saudi Arabia - Tabūk",
        "Saudi Arabia - Al Madīnah al Munawwarah",
        "Saudi Arabia - Ḩā'il",
        "Saudi Arabia - Al Qaşīm",
        "Saudi Arabia - Ar Riyāḑ",
        "Saudi Arabia - Ash Sharqīyah",
        "Oman - Z̧ufār",
        "India - Kerala",
        "India - Tamil Nadu",
        "Sri Lanka - Anuradhapura",
        "Sri Lanka - Tirukŏṇamalai",
        ]);
    });
    test("Given 'total' type & index of 9, return many countries - Gujarat is in India not Iran", () => {
        const JSON = "total";
        const index = 9;
        expect(findNations(JSON, index)).toEqual([
            "Canada - Nunavut",
            "Greenland - Qaasuitsup Kommunia",
            "Norway - Nordland",
            "Sweden - Jämtlands län",
            "Sweden - Västernorrlands län",
            "Estonia - Hiiumaa",
            "Estonia - Saaremaa",
            "Latvia - Ropažu novads",
            "Latvia - Jaunjelgavas novads",
            "Lithuania - Panevėžio apskritis",
            "Lithuania - Utenos apskritis",
            "Belarus - Minskaja oblast'",
            "Belarus - Mahilioŭskaja voblasć",
            "Belarus - Gomel'skaja oblast'",
            "Ukraine - Kyivska oblast",
            "Ukraine - Cherkaska oblast",
            "Ukraine - Kirovohradska oblast",
            "Ukraine - Dnipropetrovska oblast",
            "Ukraine - Khersonska oblast",
            "Turkey - Trabzon",
            "Turkey - Bayburt",
            "Turkey - Erzurum",
            "Turkey - Bingöl",
            "Turkey - Muş",
            "Turkey - Bitlis",
            "Turkey - Siirt",
            "Turkey - Şırnak",
            "Iraq - Nīnawá",
            "Iraq - Arbīl",
            "Iraq - As Sulaymānīyah",
            "Iran - Kermānshāh",
            "Iran - Lorestān",
            "Iran - Khūzestān",
            "Iran - Chahār Maḩāll va Bakhtīārī",
            "Iran - Eşfahān",
            "Iran - Fārs",
            "Iran - Kermān",
            "Iran - Sīstān va Balūchestān",
            "Pakistan - Balochistan",
            "India - Gujarat",
        ]);
    });
});