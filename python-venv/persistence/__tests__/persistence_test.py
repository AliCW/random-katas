from kata_function.persistence import persistence

def test_1():
    number = 4
    assert persistence(number) == 0

def test_2():
    number = 39
    assert persistence(number) == 3

def test_3():
    number = 25
    assert persistence(number) == 2

def test_4():
    number = 999
    assert persistence(number) == 4

def test_5():
    number = 1678
    assert persistence(number) == 4

def test_6():
    number = 12
    assert persistence(number) == 1

def test_7():
    number = 4021435
    assert persistence(number) == 1

def test_8():
    number = 123456789
    assert persistence(number) == 2

#https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/python