from kata_function.ones_and_zeroes import ones_and_zeroes

def test_1():
    array = [0, 0, 0, 1]
    ones_and_zeroes(array)
    assert array == [0, 0, 0, 1]

def test_2():
    array = [0, 0, 0, 1]
    assert ones_and_zeroes(array) == 1

def test_3():
    array = [0, 0, 1, 0]
    assert ones_and_zeroes(array) == 2

def test_4():
    array = [1, 1, 1, 1]
    assert ones_and_zeroes(array) == 15

def test_5():
    array = [0, 1, 1, 0]
    assert ones_and_zeroes(array) == 6

def test_6():
    array = [1, 0, 0, 1]
    assert ones_and_zeroes(array) == 9

def test_7():
    array = [1, 0, 1, 1]
    assert ones_and_zeroes(array) == 11

#https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/python