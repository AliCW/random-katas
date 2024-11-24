from kata_function.equal_sides_of_an_array import find_even_index

def test_1():
    array = [1,2,3,4,3,2,1]
    assert find_even_index(array) == 3

def test_2():
    array = [1,100,50,-51,1,1]
    assert find_even_index(array) == 1 

def test_3():
    array = [1,2,3,4,5,6]
    assert find_even_index(array) == -1

def test_4():
    array = [20,10,30,10,10,15,35]
    assert find_even_index(array) == 3

def test_5():
    array = [8, 8]
    assert find_even_index(array) == -1

def test_6():
    array = [8, 0]
    assert find_even_index(array) == 0

def test_7():
    array = [0, 8]
    assert find_even_index(array) == 1

def test_8():
    array = [7, 3, -3]
    assert find_even_index(array) == 0

def test_9():
    array = [8]
    assert find_even_index(array) == 0

def test_10():
    array = [0, 0, 0, 0, 0]
    assert find_even_index(array) == 0 

#https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/python