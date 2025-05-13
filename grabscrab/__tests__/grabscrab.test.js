const { grabscrab } = require('../grabscrab');

describe(`Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

        At long last, we need a way to unscramble what these pirates are saying.

        Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

        For example:

        grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )

        Should return ["sport", "ports"].

        Return matches in the same order as in the dictionary. Return an empty array if there are no matches.`, () => {
    test('Confirm the input array is not mutated', () => {
        const string = "trisf";
        const dict = ["first"];
        grabscrab(string, dict);
        expect(dict).toEqual(["first"]);
    });
    test('Given "trisf", ["first"], return ["first"]', () => {
        const string = "trisf";
        const dict = ["first"];
        expect(grabscrab(string, dict)).toEqual(["first"]);
    });
    test('Given "oob" & ["bob", "baobab"], return []', () => {
        const string = "oob";
        const dict = ["bob", "baobab"];
        expect(grabscrab(string, dict)).toEqual([]);
    });
    test('Given "ainstuomn" & ["mountains", "hills", "mesa"], return ["mountains"]', () => {
        const string = "ainstuomn";
        const dict = ["mountains", "hills", "mesa"];
        expect(grabscrab(string, dict)).toEqual(["mountains"]);
    });
    test('Given "oolp" & ["donkey", "pool", "horse", "loop"], return ["pool", "loop"]', () => {
        const string = "oolp";
        const dict = ["donkey", "pool", "horse", "loop"];
        expect(grabscrab(string, dict)).toEqual(["pool", "loop"]);
    });
    test('Given "ortsp" & ["sport", "parrot", "ports", "matey"], return ["sport", "ports"]', () => {
        const string = "ortsp";
        const dict = ["sport", "parrot", "ports", "matey"];
        expect(grabscrab(string, dict)).toEqual(["sport", "ports"]);
    });
    test('Given "ourf" & ["one","two","three"], return []', () => {
        const string = "ourf";
        const dict = ["one","two","three"];
        expect(grabscrab(string, dict)).toEqual([]);
    });
    test(`Given "ltfni" & ['ntifl', 'xvqhklst', 'xrewurva', 'bzhn', 'ntfli', 'ntlif', 'lseysoi', 'lftni', 'kaiszf', 'ifntl', 'dv', 'iftln', 'nlitf', 'lftin','gsmny', 'wvexjd']
            return ["ntifl", "ntfli", "ntlif", "lftni", "ifntl", "iftln", "nlitf", "lftin"]`, () => {
        const string = "ltfni";
        const dict = ['ntifl', 'xvqhklst', 'xrewurva', 'bzhn', 'ntfli', 'ntlif', 'lseysoi', 'lftni', 'kaiszf', 'ifntl', 'dv', 'iftln', 'nlitf', 'lftin','gsmny', 'wvexjd'];
        expect(grabscrab(string, dict)).toEqual(["ntifl", "ntfli", "ntlif", "lftni", "ifntl", "iftln", "nlitf", "lftin"]);
    });
});

//https://www.codewars.com/kata/52b305bec65ea40fe90007a7/train/javascript