const { findRoutes } = require('../followThatSpy');

describe(`You've been provided with an array of itinerary routes, decipher the precise destinations he will visit in the correct sequence according to his meticulously planned itineraries.`, () => {
    test('Confirm the input array is not mutated', () => {
        const array = [["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]];
        findRoutes(array);
        expect(array).toEqual([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]]);
    });
    test('Given [["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]], return "MNL, TAG, CEB, TAC, BOR"', () => {
        const array = [["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]];
        expect(findRoutes(array)).toBe("MNL, TAG, CEB, TAC, BOR");
    });
    test('Given [["UK", "GER"], ["GER", "BEL"], ["BEL", "CAN"]], return "UK, GER, BEL, CAN"', () => {
        const array = [["UK", "GER"], ["GER", "BEL"], ["BEL", "CAN"]];
        expect(findRoutes(array)).toBe("UK, GER, BEL, CAN");
    });
    test('Given [["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]], return  "Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle"', () => {
        const array = [["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]];
        expect(findRoutes(array)).toBe("Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle");
    });
    test('Given [["HQ", "SH"]], return "HQ, SH"', () => {
        const array = [["HQ", "SH"]];
        expect(findRoutes(array)).toBe("HQ, SH")
    })
    test(`Given [["ABC","ZZZ"],["ZZZ","III"],["JJJ","DPE"],["EFG","POI"],["QWE","EFG"],["OOO","DDD"],["III","VVV"],["VVV","OOO"],["DDD","JJJ"],["POI","ABC"]], return "QWE, EFG, POI, ABC, ZZZ, III, VVV, OOO, DDD, JJJ, DPE"`, () => {
        const array = [["ABC","ZZZ"],["ZZZ","III"],["JJJ","DPE"],["EFG","POI"],["QWE","EFG"],["OOO","DDD"],["III","VVV"],["VVV","OOO"],["DDD","JJJ"],["POI","ABC"]]
        expect(findRoutes(array)).toBe("QWE, EFG, POI, ABC, ZZZ, III, VVV, OOO, DDD, JJJ, DPE");
    });
});




//https://www.codewars.com/kata/5899a4b1a6648906fe000113/train/javascript


