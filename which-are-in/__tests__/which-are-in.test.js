const { whichAreIn } = require('../which-are-in')

describe('find if the first array entries are contained in that of the second array', () => {
    test('returns an array', () => {
        array1 = [];
        array2 = [];
        expect(typeof whichAreIn(array1, array2)).toBe('object')
    })
    test('given a single entry in array 1, function finds a single element in common with array 2', () => {
        array1 = ['arp'];
        array2 = ['carp'];
        expect(whichAreIn(array1, array2)).toEqual(['arp'])
    })
    test('given multiple entries in array1, functions finds a single element in common with array 2', () => {
        array1 = ['arp', 'stuff', 'words', 'things'];
        array2 = ['carp', 'birds', 'perch', 'tweet', 'sing'];
        expect(whichAreIn(array1, array2)).toEqual(['arp'])
    })
    test('given multiple identical entries in array1, functions finds a single element in common removing duplicates', () => {
        array1 = ['arp']
        array2 = ['carp', 'tarp', 'larp']
        expect(whichAreIn(array1, array2)).toEqual(['arp'])
    })
    test('given multiple indentical & non-identical entries in array1, function returns unique matches in array2', () => {
        array1 = ['arp', 'ope', 'uff', 'things', 'leh']
        array2 = ['carp', 'tarp', 'dope', 'inga', 'em pleh', 'stuff', 'nuff said']
        expect(whichAreIn(array1, array2)).toEqual(['arp', 'leh', 'ope', 'uff'])
    })

})

//https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript