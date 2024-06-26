from kata_function.two_sum import two_sum

def test_1():
    array = [1, 2, 3]
    integer = 4
    two_sum(array, integer)
    assert array == [1, 2, 3]

def test_2():
    array = [1, 2, 3]
    integer = 4
    try:
        assert two_sum(array, integer) == (0, 2)
    except AssertionError:   
        assert two_sum(array, integer) == (2, 0)

def test_3():
    array = [2, 7, 11, 15]
    integer = 9
    try:
        assert two_sum(array, integer) == (0, 1)
    except AssertionError:
        assert two_sum(array, integer) == (1, 0)

def test_4():
    array = [3, 2, 4]
    integer = 6
    try:
        assert two_sum(array, integer) == (1, 2)
    except AssertionError:
        assert two_sum(array, integer) == (2, 1)

def test_5():
    array = [3, 3]
    integer = 6
    try:
        assert two_sum(array, integer) == (0, 1)
    except AssertionError:
        assert two_sum(array, integer) == (1, 0)

def test_6():
    array = [2, 5, 5, 11]
    integer = 10
    try:
        assert two_sum(array, integer) == (1, 2)
    except AssertionError:
        assert two_sum(array, integer) == (2, 1)

def test_7():
    array = [1234, 5678, 9012]
    integer = 14690
    try:
        assert two_sum(array, integer) == (1, 2)
    except AssertionError:
        assert two_sum(array, integer) == (2, 1)

def test_8():
    array = [68, 26, 25, 53, 11, 50, 44, 4, 76, 5, 6, 47, 82, 34, 48, 53, 101, 90, 114, 24, 18, 4, 35, 35, 5, 28, 74, 2, 20, 21, 99, 25, 26, 23, 27, 12, 0, 30, 103, 94, 34, 14, 10, 114, 116, 78, 74, 13, 58, 50, 111, 72, 25, 86, 67, 64, 66, 13, 39]
    integer = 46
    try:
        assert two_sum(array, integer) == (1, 28)
    except AssertionError:
        assert two_sum(array, integer) == (28, 1)

def test_9():
    array = [8, 19, 16, 4, 18, 5, 7, 13, 14, 5, 15, 25, 0, 15]
    integer = 14
    try:
        assert two_sum(array, integer) == (8, 12)
    except AssertionError:
        assert two_sum(array, integer) == (12, 8)

#https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/python