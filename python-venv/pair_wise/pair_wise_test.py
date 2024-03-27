from pair_wise import pair_wise

def test_1():
    arr = [1, 2, 3, 4, 5, 6]
    n = 3
    pair_wise(arr, n)
    assert arr == [1, 2, 3, 4, 5, 6]

def test_2():
    arr = [1, 4, 2, 3, 0, 5]
    n = 7
    assert pair_wise(arr, n) == 11

def test_3():
    arr = [1, 3, 2, 4]
    n = 4
    assert pair_wise(arr, n) == 1

def test_4():
    arr = [1, 1, 1]
    n = 2
    assert(pair_wise(arr, n)) == 1

def test_5():
    arr = []
    n = 0
    assert pair_wise(arr, n) == 0

def test_6():
    arr = [0, 0, 0, 0, 0]
    n = 1
    assert pair_wise(arr, n) == 0

def test_7():
    arr = [0, 0, 0, 0, 1, 1]
    n = 1
    assert pair_wise(arr, n) == 10

def test_8():
    arr = [15, 1, 1]
    n = 5
    assert pair_wise(arr, n) == 0

def test_9():
    arr = [11,21,0,2,9,2,11,1,1,5,20,3,8,1,11,4,6,17,15,0,4,6,6,5,11,6,9,11,8,0,11,10,10,9,7,2,7,4,4,4,4,13]
    n = 12
    assert pair_wise(arr, n) == 395

def test_10():
    arr = [2,5,5,4,10,13,0,3,3,1,0,1,13,3,8,13,1,4,3]
    n = 6
    assert pair_wise(arr, n) == 72