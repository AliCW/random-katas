from highest_rank import highest_rank

def test_1():
    array = [1, 2, 3, 4, 5]
    highest_rank(array)
    assert array == [1, 2, 3, 4, 5]

def test_2():
    array = [12, 10, 8, 12, 7, 6, 4, 10, 12]
    assert highest_rank(array) == 12

def test_3():
    array = [9,8,30,5,11,17,24,13,4,8,21,25,6,9,9]
    assert highest_rank(array) == 9

def test_4():
    array = [1,29,18,18,18,5,18,10,10,10,21,15,9,27,27,30,18,15]
    assert highest_rank(array) == 18

def test_5():
    array = [2,22,22,22,21,6,24,24,24,11,6,6,6,6,13,11]
    assert highest_rank(array) == 6

def test_6():
    array = [6,21,9,9,9,16,29,29,4,12,15,15,30,17,24,18,10,14,27]
    assert highest_rank(array) == 9

def test_7():
    array = [20,20,20,21,21,21,4,6,5,8,7,2,11,16,16,12,19,2]
    assert highest_rank(array) == 21

def test_8():
    array = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]
    assert highest_rank(array) == 12

#https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/python