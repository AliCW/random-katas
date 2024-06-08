from kata_function.the_latest_clock import the_latest_clock;

def test_1():
    a = 1
    b = 9
    c = 8
    d = 3
    assert the_latest_clock(a, b, c, d) == "19:38"

def test_2():
    a = 1
    b = 2
    c = 8
    d = 9
    assert the_latest_clock(a, b, c, d) == "19:28"

def test_3():
    a = 0
    b = 0
    c = 0
    d = 0
    assert the_latest_clock(a, b, c, d) == "00:00"

def test_4():
    a = 1
    b = 2
    c = 3
    d = 4
    assert the_latest_clock(a, b, c, d) == "23:41"

def test_5():
    a = 2
    b = 7
    c = 5
    d = 1
    assert the_latest_clock(a, b, c, d) == "21:57"

def test_6():
    a = 9
    b = 2
    c = 5
    d = 3
    assert the_latest_clock(a, b, c, d) == "23:59"

def test_7():
    a = 0
    b = 0
    c = 1
    d = 2
    assert the_latest_clock(a, b, c, d) == "21:00"

def test_8():
    a = 1
    b = 4
    c = 4
    d = 1
    assert the_latest_clock(a, b, c, d) == "14:41"

#https://www.codewars.com/kata/58925dcb71f43f30cd00005f/train/python