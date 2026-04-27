from kata_function.find_the_missing_letter import find_missing_letter

def test_1():
    list = ["a", "b", "c", "d", "f"]
    assert find_missing_letter(list) == "e"

def test_2():
    list = ["O", "Q", "R", "S"]
    assert find_missing_letter(list) == "P"

def test_3():
    list = ["c", "d", "e", "g", "h", "i"]
    assert find_missing_letter(list) == "f"

def test_4():
    list = ["M", "O", "P", "Q"]
    assert find_missing_letter(list) == "N"

def test_5():
    list = ["F", "G", "H", "J", "K", "L", "M", "N"]
    assert find_missing_letter(list) == "I"

def test_6():
    list = ["q", "r", "s", "t", "v", "w", "x"]
    assert find_missing_letter(list) == "u"

#https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/python