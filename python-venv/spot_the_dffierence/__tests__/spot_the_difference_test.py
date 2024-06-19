from kata_function.spot_the_difference import spot

def test_1():
    string1 = 'abcdefg'
    string2 = 'abcqetg'
    assert spot(string1, string2) == [3, 5]

def test_2():
    string1 = 'Hello World!'
    string2 = 'hello world.'
    assert spot(string1, string2) == [0, 6, 11]

def test_3():
    string1 = 'FixedGrey'
    string2 = 'FixedGrey'
    assert spot(string1, string2) == []

def test_4():
    string1 = 'bD B'
    string2 = 'BD B'
    assert spot(string1, string2) == [0]

def test_5():
    string1 = 's/LrQ TiVXDlhnSeWnieGp'
    string2 = 's/LrQ TiVXDlHnSeWNieGp'
    assert spot(string1, string2) == [12, 17]

def test_6():
    string1 = 'SXExDWf BBd id HU lZl s'
    string2 = 'SXExDWf BBd ID HU LZl S'
    assert spot(string1, string2) == [12, 13, 18, 22]

def test_7():
    string1 = 'G.L    Wj e .mpWozP  !Gh Z'
    string2 = 'G.L    Wj e .mpWoZP  !Gh Z'
    assert spot(string1, string2) == [17]

#https://www.codewars.com/kata/5881460c780e0dd207000084/train/python