from longest_binary_gap import gap

def test_1():
    assert gap(9) == 2

def test_2():
    assert gap(529) == 4

def test_3():
    assert gap(20) == 1

def test_4():
    assert gap(15) == 0

def test_5():
    assert gap(32) == 0

def test_6():
    assert gap(1044) == 5

def test_7():
    assert gap(964) == 3

#https://www.codewars.com/kata/55b86beb1417eab500000051/train/python