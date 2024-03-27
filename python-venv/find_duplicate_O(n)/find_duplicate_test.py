from find_duplicate import find_duplicate

def test_1():
    arr = [1, 2, 3, 4, 1]
    find_duplicate(arr)
    assert arr == [1, 2, 3, 4, 1]

def test_2():
    arr = [1, 1]
    assert find_duplicate(arr) == 1

def test_3():
    arr = [1, 2, 2, 3]
    assert find_duplicate(arr) == 2

def test_4():
    arr = [5, 4, 3, 2, 1, 1]
    assert find_duplicate(arr) == 1

def test_5():
    arr = [1, 3, 2, 5, 4, 5, 7, 6]
    assert find_duplicate(arr) == 5

def test_6():
    arr = [8, 2, 6, 3, 7, 2, 5, 1, 4]
    assert find_duplicate(arr) == 2

def test_7():
    arr = [3, 9, 4, 13, 6, 12, 8, 15, 2, 17, 14, 14, 16, 7, 10, 5, 1, 11]
    assert find_duplicate(arr) == 14

def test_8():
    arr =  [16, 19, 13, 20, 19, 9, 8, 23, 10, 22, 6, 14, 2, 7, 15, 4, 1, 18, 24, 3, 21, 12, 17, 11, 5]
    assert find_duplicate(arr) == 19

def test_9():
    arr = [1, 14, 23, 3, 11, 26, 5, 15, 21, 13, 25, 2, 27, 17, 6, 9, 16, 19, 22, 4, 8, 7, 20, 12, 24, 18, 10, 16]
    assert find_duplicate(arr) == 16

def test_10():
    arr = [27, 26, 15, 24, 10, 1, 23, 32, 20, 2, 34, 8, 29, 35, 19, 28, 31, 26, 5, 11, 36, 22, 30, 6, 9, 33, 17, 18, 16, 13, 7, 21, 25, 3, 14, 4, 12]
    assert find_duplicate(arr) == 26

def test_11():
    arr = [17, 1, 7, 15, 41, 22, 3, 13, 32, 34, 42, 12, 35, 37, 30, 16, 8, 10, 29, 18, 6, 21, 2, 38, 20, 28, 28, 4, 31, 33, 27, 23, 25, 24, 26, 40, 9, 39, 14, 11, 19, 36, 5]
    assert find_duplicate(arr) == 28

#https://www.codewars.com/kata/558f0553803bc3c4720000af/train/python