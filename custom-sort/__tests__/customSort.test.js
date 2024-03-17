const { sort } = require('../customSort');

describe('Sort the given array in alpha-numeric order without using the .sort() function', () => {
    test('Confirm the given array is not mutated', () => {
        const arr = [1, 2, 3, 4, 5];
        sort(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });
    test('Given [1, 3, 2], return [1, 2, 3]', () => {
        const arr = [1, 3, 2];
        expect(sort(arr)).toEqual([1, 2, 3]);
    });
    test('Given [1,3,2,3,4,1], return [1,1,2,3,3,4]', () => {
        const arr = [1,3,2,3,4,1];
        expect(sort(arr)).toEqual([1,1,2,3,3,4]);
    });
    test('Given [4,1,3,2,2,3,4,1], return [1,1,2,2,3,3,4,4]', () => {
        const arr = [4,1,3,2,2,3,4,1];
        expect(sort(arr)).toEqual([1,1,2,2,3,3,4,4]);
    });
    test('Given [1], return [1]', () => {
        const arr = [1];
        expect(sort(arr)).toEqual([1]);
    });
    test('Given [10, 11, 9], return [9, 10, 11]', () => {
        const arr = [10, 11, 9];
        expect(sort(arr)).toEqual([9, 10, 11]);
    });
    test('Given ["abc", "adc", "acc"], return ["abc","acc","adc"]', () => {
        const arr = ["abc", "adc", "acc"];
        expect(sort(arr)).toEqual(["abc","acc","adc"]);
    });
    test('Given [88,8,9,75,34,26,45,81,13,79,7,90], return [7, 8, 9, 13, 26, 34, 45, 75, 79, 81, 88, 90]', () => {
        const arr = [88,8,9,75,34,26,45,81,13,79,7,90];
        expect(sort(arr)).toEqual([7, 8, 9, 13, 26, 34, 45, 75, 79, 81, 88, 90]);
    });
    test(`Given [62,31,100,19,25,18,24,11,29,8,95,11,57,73,32,21,67,79,11,68,53,58,34,81,57,27,64,75,7,60,68,66,97,85,71,1,4,14,96,46]
            return [ 1, 4, 7, 8, 11, 11, 11, 14, 18, 19, 21, 24, 25, 27, 29, 31, 32, 34, 46, 53, 57, 57, 58, 60, 62, 64, 66, 67, 68, 68, 71, 73, 75, 79, 81, 85, 95, 96, 97, 100 ]`, () => {
        const arr = [62,31,100,19,25,18,24,11,29,8,95,11,57,73,32,21,67,79,11,68,53,58,34,81,57,27,64,75,7,60,68,66,97,85,71,1,4,14,96,46];
        expect(sort(arr)).toEqual([ 1, 4, 7, 8, 11, 11, 11, 14, 18, 19, 21, 24, 25, 27, 29, 31, 32, 34, 46, 53, 57, 57, 58, 60, 62, 64, 66, 67, 68, 68, 71, 73, 75, 79, 81, 85, 95, 96, 97, 100 ]);
    });
    test(`Given [72,70,99,54,75,34,10,26,99,16,57,80,89,92,90,39,72,49,77,18,96,64,4,2,59,11,69,3,30,77,42,79,64,75,84,60,31], 
            return [ 2, 3, 4, 10, 11, 16, 18, 26, 30, 31, 34, 39, 42, 49, 54, 57, 59, 60, 64, 64, 69, 70, 72, 72, 75, 75, 77, 77, 79, 80, 84, 89, 90, 92, 96, 99, 99 ]`, () => {
        const arr = [72,70,99,54,75,34,10,26,99,16,57,80,89,92,90,39,72,49,77,18,96,64,4,2,59,11,69,3,30,77,42,79,64,75,84,60,31];
        expect(sort(arr)).toEqual([ 2, 3, 4, 10, 11, 16, 18, 26, 30, 31, 34, 39, 42, 49, 54, 57, 59, 60, 64, 64, 69, 70, 72, 72, 75, 75, 77, 77, 79, 80, 84, 89, 90, 92, 96, 99, 99 ]);
    });
    test(`Given ["l","ajrmfb","lnd","rvjpxx","cavmig","vwwxch","z","yxyogg","vo","eoryx","riy","svi","b","tvbndk","exdr","ixtvkf","qzngi","molkt","oux","r","nmucdb","bwjki","vs","bfssrc"],
            return [ 'ajrmfb', 'b', 'bfssrc', 'bwjki', 'cavmig', 'eoryx', 'exdr', 'ixtvkf', 'l', 'lnd', 'molkt', 'nmucdb', 'oux', 'qzngi', 'r', 'riy', 'rvjpxx', 'svi', 'tvbndk', 'vo', 'vs', 'vwwxch', 'yxyogg', 'z' ]`, () => {
        const arr = ["l","ajrmfb","lnd","rvjpxx","cavmig","vwwxch","z","yxyogg","vo","eoryx","riy","svi","b","tvbndk","exdr","ixtvkf","qzngi","molkt","oux","r","nmucdb","bwjki","vs","bfssrc"];
        expect(sort(arr)).toEqual([ 'ajrmfb', 'b', 'bfssrc', 'bwjki', 'cavmig', 'eoryx', 'exdr', 'ixtvkf', 'l', 'lnd', 'molkt', 'nmucdb', 'oux', 'qzngi', 'r', 'riy', 'rvjpxx', 'svi', 'tvbndk', 'vo', 'vs', 'vwwxch', 'yxyogg', 'z' ]);
    });
});

//https://www.codewars.com/kata/52105fab0bd0ce9dd00000fe/train/javascript