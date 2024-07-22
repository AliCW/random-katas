from kata_function.check_two_and_three import check_two_and_three

def test_1():
    array = ["a", "a", "a", "b", "b"]
    check_two_and_three(array)
    assert array == ["a", "a", "a", "b", "b"]

def test_2():
    array = ["a", "a", "a", "b", "b"]
    assert check_two_and_three(array) == True

def test_3():
    array = ["a", "c", "a", "c", "b"]
    assert check_two_and_three(array) == False

def test_4():
    array = ["a", "a", "a", "a", "a"]
    assert check_two_and_three(array) == False

def test_5():
    array = ["a", "a", "a", "a", "b"]
    assert check_two_and_three(array) == False

def test_6():
    array = ["a", "a", "c", "a", "b"]
    assert check_two_and_three(array) == False

def test_7 ():
    array = ["b", "b", "c", "b", "c"]
    assert check_two_and_three(array) == True

#https://www.codewars.com/kata/5a9e86705ee396d6be000091/train/python