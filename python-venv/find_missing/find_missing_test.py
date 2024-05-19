from find_missing import find_missing

def test_1():
    arr1 = [1, 2, 2, 3]
    arr2 = [1, 2, 3]
    find_missing(arr1, arr2)
    assert arr1 == [1, 2, 2, 3]
    assert arr2 == [1, 2, 3]

def test_2():
    arr1 = [1, 2, 2, 3]
    arr2 = [1, 2, 3]
    assert find_missing(arr1, arr2) == 2

def test_3():
    arr1 = [6, 1, 3, 6, 8, 2]
    arr2 = [3, 6, 6, 1, 2]
    assert find_missing(arr1, arr2) == 8

def test_4():
    arr1 = [7]
    arr2 = []
    assert find_missing(arr1, arr2) == 7

def test_5():
    arr1 = [4, 3, 3, 61, 8, 8]
    arr2 = [8, 61, 8, 3, 4]
    assert find_missing(arr1, arr2) == 3

def test_6():
    arr1 = [4, 3, 2, 7, 6, 5]
    arr2 = [4, 3, 2, 7, 5]
    assert find_missing(arr1, arr2) == 6

def test_7():
    arr1 = [0, 0, 0, 0, 0]
    arr2 = [0, 0, 0, 0]
    assert find_missing(arr1, arr2) == 0