from kata_function.numbers_of_letters_of_numbers import numbers_of_letters

def test_1():
    number = 60
    assert numbers_of_letters(number) == ["sixzero", "seven", "five", "four"]

def test_2():
    number = 12
    assert numbers_of_letters(number) == ["onetwo", "six", "three", "five", "four"]

def test_3():
    number = 37
    assert numbers_of_letters(number) == ["threeseven", "onezero", "seven", "five", "four"]

def test_4():
    number = 311
    assert numbers_of_letters(number) == ["threeoneone", "oneone", "six", "three", "five", "four"]

def test_5():
    number = 999
    assert numbers_of_letters(number) == ["nineninenine", "onetwo", "six", "three", "five", "four"]

def test_6():
    number = 648
    assert numbers_of_letters(number) == ["sixfoureight", "onetwo", "six", "three", "five", "four"]

def test_7():
    number = 241
    assert numbers_of_letters(number) == ["twofourone", "onezero", "seven", "five", "four"]

def test_8():
    number = 866
    assert numbers_of_letters(number) == ["eightsixsix", "oneone", "six", "three", "five", "four"]

def test_9():
    number = 350
    assert numbers_of_letters(number) == ["threefivezero", "onethree", "eight", "five", "four"]

def test_10():
    number = 4
    assert numbers_of_letters(number) == ["four"]

    
#https://www.codewars.com/kata/599febdc3f64cd21d8000117/train/python