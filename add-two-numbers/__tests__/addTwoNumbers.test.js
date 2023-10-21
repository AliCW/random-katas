const { addTwoNumbers } = require('../addTwoNumbers');

describe('Args represent numbers in reverse order, add them together in the given array format', () => {
    test('Tests input arrays are not mutated', () => {
        const l1 = [2, 4, 3]
        const l2 = [5, 6, 4]
        addTwoNumbers(l1, l2)
        expect(l1).toEqual([2, 4, 3]);
        expect(l2).toEqual([5, 6, 4]);
    })
    
    test('First case: [2, 4, 3] & [5, 6, 4] = [7, 0, 8] (342 + 465 = 807)', () => {
        const l1 = [2, 4, 3];
        const l2 = [5, 6, 4];
        expect(addTwoNumbers(l1, l2)).toEqual([7, 0, 8]);
    });
    test('Second case', () => {
        const l1 = [0];
        const l2 = [0];
        expect(addTwoNumbers(l1, l2)).toEqual([0])
    });
    test('Third case', () => {
        const l1 = [9, 9, 9, 9, 9, 9, 9];
        const l2 = [9, 9, 9, 9];
        expect(addTwoNumbers(l1, l2)).toEqual([8, 9, 9, 9, 0, 0, 0, 1])
    });
    test('Fourth case', () => {
        const l1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
        const l2 = [5,6,4];
        expect(addTwoNumbers(l1, l2)).toEqual([6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])
    });
});

//https://leetcode.com/problems/add-two-numbers/solutions/