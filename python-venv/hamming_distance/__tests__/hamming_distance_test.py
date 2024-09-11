from kata_function.hamming_distance import hamming_distance

def test_1():
    string1 = 'string'
    string2 = 'string'
    assert hamming_distance(string1, string2) == 0

def test_2():
    string1 = 'I like turtles'
    string2 = 'I like turkeys'
    assert hamming_distance(string1, string2) == 3

def test_3():
    string1 = 'a man a plan a canal'
    string2 = 'a man a plan sobanal'
    assert hamming_distance(string1, string2) == 3

def test_4():
    string1 = 'hamming and cheese'
    string2 = 'Hamming and Cheese'
    assert hamming_distance(string1, string2) == 2

def test_5():
    string1 = 'espresso'
    string2 = 'Expresso'
    assert hamming_distance(string1, string2) == 2

def test_6():
    string1 = 'old father, old artificer'
    string2 = 'of my soul the uncreated'
    assert hamming_distance(string1, string2) == 24



#https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69/train/python