from kata_function.grouped_by_commas import group_by_commas

def test_1():
    number = 1
    assert group_by_commas(number) == "1"

def test_2():
    number = 12
    assert group_by_commas(number) == "12"

def test_3():
    number = 123
    assert group_by_commas(number) == "123"

def test_4():
    number = 1234
    assert group_by_commas(number) == "1,234"

def test_5():
    number = 12345
    assert group_by_commas(number) == "12,345"

def test_6():
    number = 123456
    assert group_by_commas(number) == "123,456"

def test_7():
    number = 1234567
    assert group_by_commas(number) == "1,234,567"

def test_8():
    number = 12345678
    assert group_by_commas(number) == "12,345,678"

def test_9():
    number = 123456789
    assert group_by_commas(number) == "123,456,789"

def test_9():
    number = 1234567890
    assert group_by_commas(number) == "1,234,567,890"

#https://www.codewars.com/kata/5274e122fc75c0943d000148/train/python