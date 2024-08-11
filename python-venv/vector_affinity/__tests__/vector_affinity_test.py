from kata_function.vector_affinity import vector_affinity

def test_1():
    xs = [1, 2, 3, 4, 5]
    ys = [1, 4, 3, 4, 6]
    vector_affinity(xs, ys)
    assert xs == [1, 2, 3, 4, 5]
    assert ys == [1, 4, 3, 4, 6]

def test_2():
    xs = [1, 2, 3]
    ys = [1, 2, 3]
    assert vector_affinity(xs, ys) == 1

def test_3():
    xs = [1, 2, 3, 4, 5]
    ys = [1, 2, 2, 4, 3]
    assert vector_affinity(xs, ys) == 0.6

def test_4():
    xs = [1, 2, 3]
    ys = [1, 2, 3, 4, 5]
    assert vector_affinity(xs, ys) == 0.6

def test_5():
    xs = [1, 2, 3, 4]
    ys = [1, 2, 3, 5]
    assert vector_affinity(xs, ys) == 0.75

def test_6():
    xs = [6, 6, 6, 6, 6, 6]
    ys = [6]
    assert vector_affinity(xs, ys) == 0.16666666666666663

def test_7():
    xs = [None]
    ys = []
    assert vector_affinity(xs, ys) == 0

def test_8():
    xs = [None]
    ys = [None]
    assert vector_affinity(xs, ys) == 1

def test_9():
    xs = []
    ys = []
    assert vector_affinity(xs, ys) == 1

def test_10():
    xs = [None, None]
    ys = [None]
    assert vector_affinity(xs, ys) == 0.5

def test_11():
    xs = [45, 11, 26, 27, 25, 14, 34, 64, 30, 43, 43, 63, 15, 30, 29, 15, 63, 56, 48, 35, 37, 10, 11, 45, 10, 35, 51, 63, 5, 28, 16, 56, 9, 25, 29, 64, 6, 22, 39, 15, 35, 54, 27, 18, 49, 63, 59, 44, 15, 66, 65, 49, 62, 29, 35, 60, 48, 9, 54, 57, 16, 55, 45, 16, 12]
    ys = [56, 34, 29, 27, 12, 44, 1, 47, 23, 62, 50, 25, 40, 42, 40, 19, 18, 50, 32, 7, 43, 61, 34, 0, 34, 60, 39, 38, 14, 50, 50, 30, 39, 7, 49, 30, 10, 60, 52, 65, 22, 53, 34, 60, 8, 64, 23, 54, 1, 52, 28, 66, 25, 34, 20, 19, 38, 15, 3, 47]
    assert vector_affinity(xs, ys) == 0.01538461538461533

#https://www.codewars.com/kata/5498505a43e0fd83620010a9/train/python