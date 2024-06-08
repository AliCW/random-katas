from kata_function.isomorphic_strings import isomorphic

def test_1():
    a = "AA"
    b = "BB"
    assert isomorphic(a, b) == True

def test_2():
    a = "ABC"
    b = "AAA"
    assert isomorphic(a, b) == False

def test_3():
    a = "SEE"
    b = "SAW"
    assert isomorphic(a, b) == False

def test_4():
    a = "ESTATE"
    b = "DUELED"
    assert isomorphic(a, b) == True

def test_5():
    a = "RAMBUNCTIOUSLY"
    b = "THERMODYNAMICS"
    assert isomorphic(a, b) == True

def test_6():
    a = "ACBDFD"
    b = "ASHNTG"
    assert isomorphic(a, b) == False

def test_7():
    a = "abcdefghijk"
    b = "abcdefghijba"
    assert isomorphic(a, b) == False