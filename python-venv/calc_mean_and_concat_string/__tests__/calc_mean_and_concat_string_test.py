from kata_function.calc_mean_and_concat_string import calc_mean_and_concat_string

def test_1():
    array = ["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]
    assert calc_mean_and_concat_string(array) == [3.6, "udiwstagwo"]

def test_2():
    array = ["0", "c", "7", "x", "6", "2", "3", "5", "w", "7", "0", "y", "v", "u", "h", "i", "n", "u", "0", "0"]
    assert calc_mean_and_concat_string(array) == [3.0, "cxwyvuhinu"]

def test_3():
    array = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "a", "a", "d", "d", "g", "q", "u", "v", "y", "y"]
    assert calc_mean_and_concat_string(array) == [0.9, "aaddgquvyy"]

def test_4():
    array = ["s", "n", "9", "l", "0", "m", "i", "z", "9", "7", "y", "4", "z", "3", "3", "k", "4", "1", "0", "k"]
    assert calc_mean_and_concat_string(array) == [4.0, "snlmizyzkk"]

def test_5():
    array = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "a", "a", "d", "d", "g", "q", "u", "v", "y", "y"]
    assert calc_mean_and_concat_string(array) == [1.0, "aaddgquvyy"]

#https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/train/python