from almost_even import almost_even

def test_1():
    total = 10
    parts = 1
    assert almost_even(total, parts) == [10]

def test_2():
    total = 2
    parts = 2
    assert almost_even(total, parts) == [1, 1]

def test_3():
    total = 20
    parts = 5
    assert almost_even(total, parts) == [4, 4, 4, 4, 4]

def test_4():
    total = 54
    parts = 6
    assert almost_even(total, parts) == [9, 9, 9, 9, 9, 9]

def test_5():
    total = 20
    parts = 6
    assert almost_even(total, parts) == [3, 3, 3, 3, 4, 4]

def test_6():
    total = 4000
    parts = 37
    assert almost_even(total, parts) == [108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 109, 109, 109, 109]

def test_7():
    total = 244
    parts = 14
    assert almost_even(total, parts) == [17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18]

def test_8():
    total = 18
    parts = 17
    assert almost_even(total, parts) == [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]

def test_9():
    total = 157
    parts = 16
    assert almost_even(total, parts) == [9,  9,  9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]

#https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b/python