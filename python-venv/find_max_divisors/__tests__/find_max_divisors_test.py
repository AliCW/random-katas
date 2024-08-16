from kata_function.find_max_divisors import find_max_divisors

def test_1():
    a = 15
    b = 30
    assert find_max_divisors(a, b) == 24

def test_2():
    a = 1
    b = 2
    assert find_max_divisors(a, b) == 2

def test_3():
    a = 52
    b = 156
    assert find_max_divisors(a, b) == 120

def test_4():
    a = 86
    b = 1521
    assert find_max_divisors(a, b) == 1260

def test_5():
    a = 46
    b = 4051
    assert find_max_divisors(a, b) == 2520

def test_6():
    a = 85
    b = 4717
    assert find_max_divisors(a, b) == 2520

def test_7():
    a = 83
    b = 6760
    assert find_max_divisors(a, b) == 5040

def test_8():
    a = 54
    b = 62
    assert find_max_divisors(a, b) == 60

def test_9():
    a = 15
    b = 48
    assert find_max_divisors(a, b) == 48

#https://www.codewars.com/kata/588c0a38b7cd14085300003f/train/python
