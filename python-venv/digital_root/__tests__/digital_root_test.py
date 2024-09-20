from kata_function.digital_root import digital_root

def test_1():
    integer = 16
    assert digital_root(integer) == 7

def test_2():
    integer = 11
    assert digital_root(integer) == 2

def test_3():
    integer = 942
    assert digital_root(integer) == 6

def test_4():
    integer = 132189
    assert digital_root(integer) == 6

def test_5():
    integer = 493193
    assert digital_root(integer) == 2

def test_6():
    integer = 123456789
    assert digital_root(integer) == 9

def test_7():
    integer = 987654321
    assert digital_root(integer) == 9

#https://www.codewars.com/kata/541c8630095125aba6000c00/train/python