from kata_function.count_characters import count

def test_1():
    string = ''
    assert count(string) == {}

def test_2():
    string = 'a'
    assert count(string) == {"a": 1}

def test_3():
    string = 'ABC'
    assert count(string) == {"A": 1, "B": 1, "C": 1}

def test_4():
    string = 'aba'
    assert count(string) == {"a": 2, "b": 1}

def test_5():
    string = 'tvghj'
    assert count(string) == {"g": 1, "h": 1, "j": 1, "t": 1, "v": 1}

def test_6():
    string = 'IUClAlfJDdgPnkVKJZpPfIslGQIMpueCkLyvpXQszjRnVxFFwcLSx'
    assert count(string) == {"A": 1,
            "C": 2,
            "D": 1,
            "F": 2,
            "G": 1,
            "I": 3,
            "J": 2,
            "K": 1,
            "L": 2,
            "M": 1,
            "P": 2,
            "Q": 2,
            "R": 1,
            "S": 1,
            "U": 1,
            "V": 2,
            "X": 1,
            "Z": 1,
            "c": 1,
            "d": 1,
            "e": 1,
            "f": 2,
            "g": 1,
            "j": 1,
            "k": 2,
            "l": 3,
            "n": 2,
            "p": 3,
            "s": 2,
            "u": 1,
            "v": 1,
            "w": 1,
            "x": 2,
            "y": 1,
            "z": 1}
    
def test_7():
    string = 'FGjOlskgzeGDTxloRbAmvlpJPRtEEIePZlYxtWwU'
    assert count(string) == {"A": 1,
            "D": 1,
            "E": 2,
            "F": 1,
            "G": 2,
            "I": 1,
            "J": 1,
            "O": 1,
            "P": 2,
            "R": 2,
            "T": 1,
            "U": 1,
            "W": 1,
            "Y": 1,
            "Z": 1,
            "b": 1,
            "e": 2,
            "g": 1,
            "j": 1,
            "k": 1,
            "l": 4,
            "m": 1,
            "o": 1,
            "p": 1,
            "s": 1,
            "t": 2,
            "v": 1,
            "w": 1,
            "x": 2,
            "z": 1}
    
#https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/python