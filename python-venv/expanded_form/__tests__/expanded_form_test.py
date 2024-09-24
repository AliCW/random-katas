from kata_function.expanded_form import expanded_form

def test_1():
    integer = 8
    assert expanded_form(integer) == '8'

def test_2():
    integer = 12
    assert expanded_form(integer) == '10 + 2'

def test_3():
    integer = 42
    assert expanded_form(integer) == '40 + 2'

def test_4():
    integer = 70304
    assert expanded_form(integer) == '70000 + 300 + 4'

def test_5():
    integer = 9000000
    assert expanded_form(integer) == '9000000'

def test_6():
    integer = 11300030
    assert expanded_form(integer) == '10000000 + 1000000 + 300000 + 30'

def test_7():
    integer = 92093403034573
    assert expanded_form(integer) == '90000000000000 + 2000000000000 + 90000000000 + 3000000000 + 400000000 + 3000000 + 30000 + 4000 + 500 + 70 + 3'


#https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/python