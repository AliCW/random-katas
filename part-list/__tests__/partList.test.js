const { partList } = require('../partList');

describe('Find the possible variations of numerous elements within an array', () => {
    test('Checks the input array is not mutated', () => {
        const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        partList(arr);
        expect(arr).toEqual(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    });
    test('Given [], return []', () => {
        const arr = [];
        expect(partList(arr)).toEqual([]);
    });
    test('Given ["I", "wish", "I", "hadn\'t", "come"], return [["I", "wish I hadn\'t come"], ["I wish", "I hadn\'t come"], ["I wish I", "hadn\'t come"], ["I wish I hadn\'t", "come"]]', () => {
        const arr = ["I", "wish", "I", "hadn't", "come"];
        expect(partList(arr)).toEqual([["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])
    });
    test('Given ["cdIw", "tzIy", "xDu", "rThG"], return [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]];', () => {
        const arr = ["cdIw", "tzIy", "xDu", "rThG"];
        expect(partList(arr)).toEqual([["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]]);
    });
    test('Given ["vJQ", "anj", "mQDq", "sOZ"], return [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]]', () => {
        const arr = ["vJQ", "anj", "mQDq", "sOZ"];
        expect(partList(arr)).toEqual([["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]]);
    });
    test(`Given ['tzRk', 'WJWHwa', 'NjMZ', 'ODzCoh', 'CFjYLb', 'iiM', 'jYqIJm', 'ZuBNedZ'], return [
        [ 'tzRk', 'WJWHwa NjMZ ODzCoh CFjYLb iiM jYqIJm ZuBNedZ' ],
        [ 'tzRk WJWHwa', 'NjMZ ODzCoh CFjYLb iiM jYqIJm ZuBNedZ' ],
        [ 'tzRk WJWHwa NjMZ', 'ODzCoh CFjYLb iiM jYqIJm ZuBNedZ' ],
        [ 'tzRk WJWHwa NjMZ ODzCoh', 'CFjYLb iiM jYqIJm ZuBNedZ' ],
        [ 'tzRk WJWHwa NjMZ ODzCoh CFjYLb', 'iiM jYqIJm ZuBNedZ' ],
        [ 'tzRk WJWHwa NjMZ ODzCoh CFjYLb iiM', 'jYqIJm ZuBNedZ' ],
        [ 'tzRk WJWHwa NjMZ ODzCoh CFjYLb iiM jYqIJm', 'ZuBNedZ' ]
      ]`, () => {
        const arr = ['tzRk', 'WJWHwa', 'NjMZ', 'ODzCoh', 'CFjYLb', 'iiM', 'jYqIJm', 'ZuBNedZ'];
        expect(partList(arr)).toEqual([
            [ 'tzRk', 'WJWHwa NjMZ ODzCoh CFjYLb iiM jYqIJm ZuBNedZ' ],
            [ 'tzRk WJWHwa', 'NjMZ ODzCoh CFjYLb iiM jYqIJm ZuBNedZ' ],
            [ 'tzRk WJWHwa NjMZ', 'ODzCoh CFjYLb iiM jYqIJm ZuBNedZ' ],
            [ 'tzRk WJWHwa NjMZ ODzCoh', 'CFjYLb iiM jYqIJm ZuBNedZ' ],
            [ 'tzRk WJWHwa NjMZ ODzCoh CFjYLb', 'iiM jYqIJm ZuBNedZ' ],
            [ 'tzRk WJWHwa NjMZ ODzCoh CFjYLb iiM', 'jYqIJm ZuBNedZ' ],
            [ 'tzRk WJWHwa NjMZ ODzCoh CFjYLb iiM jYqIJm', 'ZuBNedZ' ]
          ]);
    });
    test(`Given [ 'VjQuGaR', 'sUDgZ', 'zbf', 'JoKWD', 'EvUKuvb', 'rYy', 'vTdaOBh', 'TIvPg', 'TTpRAE' ], return [
        [ 'VjQuGaR', 'sUDgZ zbf JoKWD EvUKuvb rYy vTdaOBh TIvPg TTpRAE' ],
        [ 'VjQuGaR sUDgZ', 'zbf JoKWD EvUKuvb rYy vTdaOBh TIvPg TTpRAE' ],
        [ 'VjQuGaR sUDgZ zbf', 'JoKWD EvUKuvb rYy vTdaOBh TIvPg TTpRAE' ],
        [ 'VjQuGaR sUDgZ zbf JoKWD', 'EvUKuvb rYy vTdaOBh TIvPg TTpRAE' ],
        [ 'VjQuGaR sUDgZ zbf JoKWD EvUKuvb', 'rYy vTdaOBh TIvPg TTpRAE' ],
        [ 'VjQuGaR sUDgZ zbf JoKWD EvUKuvb rYy', 'vTdaOBh TIvPg TTpRAE' ],
        [ 'VjQuGaR sUDgZ zbf JoKWD EvUKuvb rYy vTdaOBh', 'TIvPg TTpRAE' ],
        [ 'VjQuGaR sUDgZ zbf JoKWD EvUKuvb rYy vTdaOBh TIvPg', 'TTpRAE' ]
      ]`, () => {
        const arr = [ 'VjQuGaR', 'sUDgZ', 'zbf', 'JoKWD', 'EvUKuvb', 'rYy', 'vTdaOBh', 'TIvPg', 'TTpRAE' ]
        expect(partList(arr)).toEqual([
            [ 'VjQuGaR', 'sUDgZ zbf JoKWD EvUKuvb rYy vTdaOBh TIvPg TTpRAE' ],
            [ 'VjQuGaR sUDgZ', 'zbf JoKWD EvUKuvb rYy vTdaOBh TIvPg TTpRAE' ],
            [ 'VjQuGaR sUDgZ zbf', 'JoKWD EvUKuvb rYy vTdaOBh TIvPg TTpRAE' ],
            [ 'VjQuGaR sUDgZ zbf JoKWD', 'EvUKuvb rYy vTdaOBh TIvPg TTpRAE' ],
            [ 'VjQuGaR sUDgZ zbf JoKWD EvUKuvb', 'rYy vTdaOBh TIvPg TTpRAE' ],
            [ 'VjQuGaR sUDgZ zbf JoKWD EvUKuvb rYy', 'vTdaOBh TIvPg TTpRAE' ],
            [ 'VjQuGaR sUDgZ zbf JoKWD EvUKuvb rYy vTdaOBh', 'TIvPg TTpRAE' ],
            [ 'VjQuGaR sUDgZ zbf JoKWD EvUKuvb rYy vTdaOBh TIvPg', 'TTpRAE' ]
          ]);
    });
});

//https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript