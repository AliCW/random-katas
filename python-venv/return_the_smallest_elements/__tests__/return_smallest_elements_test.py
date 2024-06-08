from kata_function.return_smallest_elements import first_smallest

def test_1():
    array = [1, 2, 3, 4, 5]
    n = 3
    first_smallest(array, n)
    assert array == [1, 2, 3, 4, 5]

def test_2():
    array = [1, 2, 3, 4, 5]
    n = 3
    assert first_smallest(array, n) == [1, 2, 3]

def test_3():
    array = [5, 4, 3, 2, 1]
    n = 3
    assert first_smallest(array, n) == [3, 2, 1]

def test_4():
    array = [1, 2, 3, 1, 2]
    n = 3
    assert first_smallest(array, n) == [1, 2, 1]

def test_5():
    array = [1, 2, 3, -4, 0]
    n = 3
    assert first_smallest(array, n) == [1, -4, 0]

def test_6():
    array = [1, 2, 3, 4, 5]
    n = 0
    assert first_smallest(array, n) == []

def test_7():
    array = [1, 2, 3, 4, 5]
    n = 5
    assert first_smallest(array, n) == [1, 2, 3, 4, 5]

def test_8():
    array = [4, -8, -10, 6, 9, 8, 9, 9, -6, -7, -3, 8, 8, -6]
    n = 7
    assert first_smallest(array, n) == [4, -8, -10, -6, -7, -3, -6]

def test_9():
    array = [-3, 10, 0, 3, 5, 7, -5, 8, 7, -4, -8, 4, 5, -3, 3, 3, 6, 5, 8, -4, 8]
    n = 5
    assert first_smallest(array, n) == [-3, -5, -4, -8, -4]

#https://www.codewars.com/kata/5aec1ed7de4c7f3517000079/train/python