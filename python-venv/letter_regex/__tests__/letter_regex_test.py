from kata_function.letter_regex import is_it_letter
import random
import string


def generate(type, length=1):
    if type == 1:
        lower = string.ascii_lowercase
    elif type == 2:
        lower = string.ascii_uppercase
    elif type == 3:
        lower = string.digits
    elif type == 4:
        lower = string.punctuation
    result = ''.join(random.choice(lower) for i in range(length))
    return result


def test_1():
    s = "a"
    assert is_it_letter(s) == True

def test_2():
    s = "A"
    assert is_it_letter(s) == True

def test_3():
    s = "!"
    assert is_it_letter(s) == False

def test_4():
    s = "4"
    assert is_it_letter(s) == False

def test_5():
    s = generate(1)
    assert is_it_letter(s) == True

def test_6():
    s = generate(2)
    assert is_it_letter(s) == True

def test_7():
    s = generate(3)
    assert is_it_letter(s) == False

def test_8():
    s = generate(4)
    assert is_it_letter(s) == False
    

#https://www.codewars.com/kata/57a06b07cf1fa58b2b000252/train/python