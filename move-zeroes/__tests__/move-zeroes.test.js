const { moveZeroes } = require('../move-zeroes')

describe('Move all zeroes to the end of the array', () => {
    test('returns an array' , () => {
       const array = [1, 0, 2, 3, 0, 4, 0, 5] 
       expect(typeof moveZeroes(array)).toBe('object')
    })
    test('return zeroes at the end - given array has three zeroes seperated by one digit', () => {
        const array = [1, 0, 2, 3, 0, 4, 0, 5] 
        expect(moveZeroes(array)).toEqual([1, 2, 3, 4, 5, 0, 0, 0])
     })
    test('returns zeroes at the end - given an array of random numbers', () => {
        const array = [9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9] 
        expect(moveZeroes(array)).toEqual([9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
     })
     test('returns zeroes at the end - given an array of random elements', () => {
        const array = [0, '0', 9, '7', '3', true, null, null, 3, null, null, 9, 8, [], '0', '9', '0', 2, 7, {}, 2, 4, [], null, '9', 0, 0, 0] 
        expect(moveZeroes(array)).toEqual(['0', 9, '7', '3', true, null, null, 3, null, null, 9, 8, [], '0', '9', '0', 2, 7, {}, 2, 4, [], null, '9', 0, 0, 0, 0])
     })
})


//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

