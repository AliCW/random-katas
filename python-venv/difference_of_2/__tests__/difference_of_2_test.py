from kata_function.difference_of_2 import difference_of_2

def test_1():
    array = [1, 2, 3, 4]
    difference_of_2(array)
    assert array == [1, 2, 3, 4]

def test_2():
    array = [1, 2, 3, 4]
    assert difference_of_2(array) == [(1, 3), (2, 4)]

def test_3():
    array = [85]
    assert difference_of_2(array) == []

def test_4():
    array = [1, 3, 4, 6]
    assert difference_of_2(array) == [(1, 3), (4, 6)]

def test_5():
    array = [4, 1, 2, 3]
    assert difference_of_2(array) == [(1, 3), (2, 4)]

def test_6():
    array = [56, 77, 87,  0, 86, 70, 46, 44, 43, 98, 64]
    assert difference_of_2(array) == [(44, 46)]

def test_7():
    array = [97, 16, 77, 82, 32, 14]
    assert difference_of_2(array) == [(14, 16)]

def test_8():
    array = [39, 97, 35, 99, 18, 6, 75, 76, 19, 30, 42, 82, 58, 50, 68, 98, 52, 70, 0, 93, 81, 25]
    assert difference_of_2(array) == [(50, 52), (68, 70), (97, 99)]

#https://www.codewars.com/kata/5340298112fa30e786000688/train/python