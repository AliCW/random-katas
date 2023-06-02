const { twoOldestAges } = require('../twoOldestAges')

describe('find the two highest ages numbers', () => {
    test('tests the input array has not mutated', () => {
        const array = [1, 2, 3, 4, 5]
        twoOldestAges(array)
        expect(array).toBe[1, 2, 3, 4, 5];
    })
    test('returns the two highest ages numbers from an array of set positive numbers', () => {
        const array = [4, 8, 19, 45, 89, 60, 0]
        expect(twoOldestAges(array)).toEqual([60, 89])
    })
    test('returns the two highest ages numbers from an array of random positive numbers', () => {
        const age1 = Math.floor(Math.random() * 10) + 1
        const age2 = Math.floor(Math.random() * 10) + 1
        const age3 = Math.floor(Math.random() * 40) + 35
        const age4 = Math.floor(Math.random() * 90) + 50
        const age5 = Math.floor(Math.random() * 10) + 1
        const array = [age1, age2, age3, age4, age5]
        expect(twoOldestAges(array)).toEqual([age3, age4])
    })
})