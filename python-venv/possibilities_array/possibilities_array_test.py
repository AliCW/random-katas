from possibilities_array import possibilities_array;

def test_1():
    arr = [0,2,19,4,4]
    assert possibilities_array(arr) == False

def test_2():
    arr = [3,2,1,0]
    assert possibilities_array(arr) == True

def test_3():
    arr = [0,1,2,3]
    assert possibilities_array(arr) == True

def test_4():
    arr = [1,2,3,4]
    assert possibilities_array(arr) == False

def test_5():
    arr = [0,2,3]
    assert possibilities_array(arr) == False

def test_6():
    arr = [0]
    assert possibilities_array(arr) == True

def test_7():
    arr = [0,1,2,3,4,5,6,7,8,9]
    assert possibilities_array(arr) == True

def test_8():
    arr = [0,1,3,-2,5,4]
    assert possibilities_array(arr) == False

def test_9():
    arr = [1,-1,2,-2,3,-3,6]
    assert possibilities_array(arr) == False

def test_10():
    arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62]
    assert possibilities_array(arr) == True

def test_11():
    arr = [17, 12, 14, 18, 19, 7, 13, 10, 15, 16, 9, 4, 11, 8, 3, 1, 6, 2, 5, 0]
    assert possibilities_array(arr) == True

def test_12():
    arr = [17, 2, 3, 11, 19, 19, 21, 15, 13, 14, 0, 5, 10, 19, 7, 4, 8, 6, 16, 9, 12, 1]
    assert possibilities_array(arr) == False


#https://www.codewars.com/kata/59b710ed70a3b7dd8f000027/train/python