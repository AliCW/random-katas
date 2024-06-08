from kata_function.find_divisors import find_divisors

def test_1():
    number = 15
    assert find_divisors(number) == [3, 5]

def test_2():
    number = 12
    assert find_divisors(number) == [2, 3, 4, 6]

def test_3():
    number = 13
    assert find_divisors(number) == "13 is a prime number"

def test_4():
    number = 100
    assert find_divisors(number) == [2, 4, 5, 10, 20, 25, 50]

def test_5():
    number = 1001
    assert find_divisors(number) == [7, 11, 13, 77, 91, 143]

def test_6():
    number = 97
    assert find_divisors(number) == "97 is a prime number"

#https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/python