const { nexus } = require('../nexus');

describe('Given an object representing users rank & honour, return the rank that is closest to its honour', () => {
    test('Given {1: 3, 3: 3, 5: 3}, return 3', () => {
        const object = {1: 3, 3: 3, 5: 3};
        expect(nexus(object)).toBe(3);
    });
    test('Given {1: 12540, 2:12000, 6:7000, 20:4000, 100:1000, 273:750, 500:500}, return 500', () => {
        const object = {1: 12540, 2:12000, 6:7000, 20:4000, 100:1000, 273:750, 500:500};
        expect(nexus(object)).toBe(500);
    });
    test('Given {1: 12540, 2:12000, 6:8000, 20:6000, 100:5000, 273:4570, 500:800, 600:600, 800:450, 3193:278}, return 600', () => {
        const object = {1: 12540, 2:12000, 6:8000, 20:6000, 100:5000, 273:4570, 500:800, 600:600, 800:450, 3193:278};
        expect(nexus(object)).toBe(600);
    });
    test('Given {1: 12540, 2:12000, 6:7000, 20:4000, 100:1000, 273:750, 500:501}, return 500', () => {
        const object = {1: 12540, 2:12000, 6:7000, 20:4000, 100:1000, 273:750, 500:501};
        expect(nexus(object)).toBe(500);
    });
    test('Given {1: 12540, 2:12000,6:8000, 20: 6000, 100: 5000, 273: 4570, 500:800, 600:490, 800:450, 3193:278}, return 600', () => {
        const object = {1: 12540, 2:12000,6:8000, 20: 6000, 100: 5000, 273: 4570, 500:800, 600:490, 800:450, 3193:278};
        expect(nexus(object)).toBe(600);
    });
    test('Given {1:12540,2:12000,6:8000,20:6000,100:5000,273:4570,500:800,600:490,800:450,3193:278}, return 600', () => {
        const object = {1:12540, 2:12000, 6:8000, 20:6000, 100:5000, 273:4570, 500:800, 600:490, 800:450, 3193:278};
        expect(nexus(object)).toBe(600);
    });
    test('Given {5:30, 10:25, 15:20, 20:15, 25:10, 30:5}, return 15', () => {
        const object = {5:30, 10:25, 15:20, 20:15, 25:10, 30:5};
        expect(nexus(object)).toBe(15);
    });
    test('Given {30:5, 25:10, 20:15, 15:20, 10:25, 5:30}, return 15', () => {
        const object = {30:5, 25:10, 20:15, 15:20, 10:25, 5:30}
        expect(nexus(object)).toBe(15);
    });
});

//https://www.codewars.com/kata/5453dce502949307cf000bff/train/javascript