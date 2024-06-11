const { hungrySeven } = require('../sevenAteNine');

describe(`Seven is a hungry number and its favourite food is number 9. 
        Whenever it spots 9 through the hoops of 8, it eats it!
        Well, not anymore, because you are going to help the 9 by locating that particular sequence (7,8,9) in an array of digits and tell 7 to come after 9 instead. 
        Seven "ate" nine, no more! (If 9 is not in danger, just return the same array)`, () => {
    test('Confirm the given array is not mutated', () => {
        const array = [7, 8, 9];
        hungrySeven(array);
        expect(array).toEqual([7, 8, 9]);
    });    
    test('Given [7, 8, 9], return [8, 7, 9]', () => {
        const array = [7, 8, 9];
        expect(hungrySeven(array)).toEqual([8, 9, 7]);
    });
    test('Given [7, 7, 7, 8, 9], return [8, 9, 7, 7, 7]', () => {
        const array = [7, 7, 7, 8, 9];
        expect(hungrySeven(array)).toEqual([8, 9, 7, 7, 7]);
    });
    test('Given [8,7,8,9,8,9,7,8], return [8,8,9,8,9,7,7,8]', () => {
        const array = [8,7,8,9,8,9,7,8];
        expect(hungrySeven(array)).toEqual([8,8,9,8,9,7,7,8]);
    });//i=1 + 4
    test('Given [8,7,8,7,9,8], return [8,7,8,7,9,8]', () => {
        const array = [8,7,8,7,9,8];
        expect(hungrySeven(array)).toEqual([8,7,8,7,9,8]);
    });
    test('Given [7, 9, 7, 8, 7, 8, 7, 8, 7, 7, 7, 9, 7, 8, 8, 8, 7, 8, 9, 8], return [7, 9, 7, 8, 7, 8, 7, 8, 7, 7, 7, 9, 7, 8, 8, 8, 8, 9, 7, 8]', () => {
        const array = [7, 9, 7, 8, 7, 8, 7, 8, 7, 7, 7, 9, 7, 8, 8, 8, 7, 8, 9, 8];
        expect(hungrySeven(array)).toEqual([7, 9, 7, 8, 7, 8, 7, 8, 7, 7, 7, 9, 7, 8, 8, 8, 8, 9, 7, 8]);
    });//i=16 + 2
});

//  [ 7, 9, 7, 8, 7, 8, 7,8, 7, 7, 7, 9, 7, 8,8, 8, 8, 9, 8, 7]

//https://www.codewars.com/kata/59e61c577905df540000016b/train/javascript