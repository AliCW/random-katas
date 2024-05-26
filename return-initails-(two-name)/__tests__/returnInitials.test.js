const { returnInitials } = require('../returnInitials');

describe('Return the initials of the given name', () => {
    test('Given "Sam Harris", return "S.H"', () => {
        const name = "Sam Harris";
        expect(returnInitials(name)).toBe("S.H");
    });
    test('Given "Evan Cole", return "E.C"', () => {
        const name = "Evan Cole";
        expect(returnInitials(name)).toBe("E.C");
    });
    test('Given "Patrick Feenan", return "P.F"', () => {
        const name = "Patrick Feenan";
        expect(returnInitials(name)).toBe("P.F");
    });
    test('Given "P Favuzzi", return "P.F"', () => {
        const name = "P Favuzzi";
        expect(returnInitials(name)).toBe("P.F");
    });
    test('Given "David Mendieta", return "D.M"', () => {
        const name = "David Mendieta";
        expect(returnInitials(name)).toBe("D.M");
    });
    test('Given "hugh Man", return "H.M"', () => {
        const name = "hugh Man";
        expect(returnInitials(name)).toBe("H.M");
    });
    test('Given "hugh man", return "H.M"', () => {
        const name = "hugh man";
        expect(returnInitials(name)).toBe("H.M");
    });
});

//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript