from kata_function.length_of_seq import length_of_seq

def test_1():
    array = [1, 2, 3, 4, 1]
    integer = 1
    length_of_seq(array, integer)
    assert array == [1, 2, 3, 4, 1]

def test_2():
    array = []
    integer = 1
    assert length_of_seq(array, integer) == 0

def test_3():
    array = [1]
    integer = 1
    assert length_of_seq(array, integer) == 0

def test_4():
    array = [1, 1]
    integer = 1
    assert length_of_seq(array, integer) == 2

def test_5():
    array = [-7, 4, 2, -12, 4]
    integer = 6
    assert length_of_seq(array, integer) == 0

def test_6():
    array = [-7, 3, -7, -7, 2, 1]
    integer = -7
    assert length_of_seq(array, integer) == 0

def test_7():
    array = [1, 2, 3, 1]
    integer = 1
    assert length_of_seq(array, integer) == 4

def test_8():
    array = [-7, 5, 0, 2, 9, 5]
    integer = 5
    assert length_of_seq(array, integer) == 5

def test_9():
    array = [-7, 6, 2, -7, 4]
    integer = -7
    assert length_of_seq(array, integer) == 4

def test_10():
    array = [-7, 5, 0, 2, 9, 7]
    integer = 5
    assert length_of_seq(array, integer) == 0


#https://www.codewars.com/kata/5566b0dd450172dfc4000005/train/python