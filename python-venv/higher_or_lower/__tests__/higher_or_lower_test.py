from kata_function.higher_or_lower import higher_or_lower

def test_1():
    string = "1 3 5 7 8 9"
    assert higher_or_lower(string) == "9 1"

def test_2():
    string = "1 2 3"
    assert higher_or_lower(string) == "3 1"

def test_3():
    string = "1 2"
    assert higher_or_lower(string) == "2 1"

def test_4():
    string = "1 3 5 7 9"
    assert higher_or_lower(string) == "9 1"

def test_5():
    string = "1 2 3 -5 8 100 -100"
    assert higher_or_lower(string) == "100 -100"

def test_6():
    string = "-1 1 0 0"
    assert higher_or_lower(string) == "1 -1"

def test_7():
    string = "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 9 -7"
    assert higher_or_lower(string) == "9 -7"

#https://www.codewars.com/kata/554b4ac871d6813a03000035/train/python