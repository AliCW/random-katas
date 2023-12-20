from calcMeanAndConcatString import calcMeanAndConcatString

def test_1():
    lst = ["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]
    assert calcMeanAndConcatString(lst) == [3.6, "udiwstagwo"]

def test_2():
    lst = ["0", "c", "7", "x", "6", "2", "3", "5", "w", "7", "0", "y", "v", "u", "h", "i", "n", "u", "0", "0"]
    assert calcMeanAndConcatString(lst) == [3.0, "cxwyvuhinu"]

def test_3():
    lst = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "a", "a", "d", "d", "g", "q", "u", "v", "y", "y"]
    assert calcMeanAndConcatString(lst) == [0.9, "aaddgquvyy"]

def test_4():
    lst = ["s", "n", "9", "l", "0", "m", "i", "z", "9", "7", "y", "4", "z", "3", "3", "k", "4", "1", "0", "k"]
    assert calcMeanAndConcatString(lst) == [4.0, "snlmizyzkk"]

def test_5():
    lst = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "a", "a", "d", "d", "g", "q", "u", "v", "y", "y"]
    assert calcMeanAndConcatString(lst) == [1.0, "aaddgquvyy"]

#https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/train/python