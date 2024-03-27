from part_list import part_list

def test_1():
    arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    part_list(arr)
    assert arr == ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

def test_2():
    arr = []
    assert part_list(arr) == []

def test_3():
    arr = ["I", "wish", "I", "hadn't", "come"]
    assert part_list(arr) ==  [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]

def test_4():
    arr = ["cdIw", "tzIy", "xDu", "rThG"]
    assert part_list(arr) == [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]]

def test_5():
    arr = ["vJQ", "anj", "mQDq", "sOZ"]
    assert part_list(arr) == [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]]
    
def test_6():
    arr = ['tzRk', 'WJWHwa', 'NjMZ', 'ODzCoh', 'CFjYLb', 'iiM', 'jYqIJm', 'ZuBNedZ']
    assert part_list(arr) == [
            [ 'tzRk', 'WJWHwa NjMZ ODzCoh CFjYLb iiM jYqIJm ZuBNedZ' ],
            [ 'tzRk WJWHwa', 'NjMZ ODzCoh CFjYLb iiM jYqIJm ZuBNedZ' ],
            [ 'tzRk WJWHwa NjMZ', 'ODzCoh CFjYLb iiM jYqIJm ZuBNedZ' ],
            [ 'tzRk WJWHwa NjMZ ODzCoh', 'CFjYLb iiM jYqIJm ZuBNedZ' ],
            [ 'tzRk WJWHwa NjMZ ODzCoh CFjYLb', 'iiM jYqIJm ZuBNedZ' ],
            [ 'tzRk WJWHwa NjMZ ODzCoh CFjYLb iiM', 'jYqIJm ZuBNedZ' ],
            [ 'tzRk WJWHwa NjMZ ODzCoh CFjYLb iiM jYqIJm', 'ZuBNedZ' ]
          ]

def test_7():
    arr = [ 'VjQuGaR', 'sUDgZ', 'zbf', 'JoKWD', 'EvUKuvb', 'rYy', 'vTdaOBh', 'TIvPg', 'TTpRAE' ]
    assert part_list(arr) == [
            [ 'VjQuGaR', 'sUDgZ zbf JoKWD EvUKuvb rYy vTdaOBh TIvPg TTpRAE' ],
            [ 'VjQuGaR sUDgZ', 'zbf JoKWD EvUKuvb rYy vTdaOBh TIvPg TTpRAE' ],
            [ 'VjQuGaR sUDgZ zbf', 'JoKWD EvUKuvb rYy vTdaOBh TIvPg TTpRAE' ],
            [ 'VjQuGaR sUDgZ zbf JoKWD', 'EvUKuvb rYy vTdaOBh TIvPg TTpRAE' ],
            [ 'VjQuGaR sUDgZ zbf JoKWD EvUKuvb', 'rYy vTdaOBh TIvPg TTpRAE' ],
            [ 'VjQuGaR sUDgZ zbf JoKWD EvUKuvb rYy', 'vTdaOBh TIvPg TTpRAE' ],
            [ 'VjQuGaR sUDgZ zbf JoKWD EvUKuvb rYy vTdaOBh', 'TIvPg TTpRAE' ],
            [ 'VjQuGaR sUDgZ zbf JoKWD EvUKuvb rYy vTdaOBh TIvPg', 'TTpRAE' ]
          ]