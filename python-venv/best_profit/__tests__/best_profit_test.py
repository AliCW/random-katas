from kata_function.best_profit import max_profit

def test_1():
    array = [3, 4]
    max_profit(array)
    assert array == [3, 4]

def test_2():
    array = [3, 4]
    assert max_profit(array) == 1

def test_3():
    array = [10, 7, 5, 8, 11, 9]
    assert max_profit(array) == 6

def test_4():
    array = [9, 9]
    assert max_profit(array) == 0

def test_5():
    array = [10, 7, 5, 4, 1]
    assert max_profit(array) == -1

#https://www.codewars.com/kata/58f174ed7e9b1f32b40000ec/train/python
#the order matters a lot! - this isnt expressed in the kata

#find the index of the lowest number & lowest number
#slice right from here, find the highest number from what is left & negate