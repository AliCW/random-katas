from more_zeroes import more_zeroes

def test_1():
    string = 'abcde'
    assert more_zeroes(string) == ['a', 'b', 'd']

def test_2():
    string = 'Great job!'
    assert more_zeroes(string) == ['a', ' ', 'b', '!']

def test_3():
    string = 'DIGEST'
    assert more_zeroes(string) == ['D', 'I', 'E', 'T']

def test_4():
    string = 'abcdeabcde'
    assert more_zeroes(string) == ['a', 'b', 'd']

def test_5():
    string = 'Forgiveness is the fragrance that the violet sheds on the heal that has crushed it'
    assert more_zeroes(string) == ["F", " ", "h", "a", "d"]

def test_6():
    string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_'
    assert more_zeroes(string) == ['a', 'b', 'd', 'h', 'p', 'A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'L', 'P', 'Q', 'R', 'T', 'X', '0']

def test_7():
    string = 'thequickbrownfoxjumpsoverthelazydog'
    assert more_zeroes(string) == ['h', 'b', 'p', 'a', 'd']

def test_8():
    string = 'THEQUICKBROWNFOXJUMPSOVERTHELAZYDOG'
    assert more_zeroes(string) == ['T', 'H', 'E', 'Q', 'I', 'C', 'B', 'R', 'F', 'X', 'J', 'P', 'L', 'A', 'D']


#https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/train/python