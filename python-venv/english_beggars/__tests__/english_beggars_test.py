from kata_function.english_beggars import english_beggars

def test_1():
    values = [1, 2, 3, 4, 5]
    beggars = 2
    english_beggars(values, beggars)
    assert values == [1, 2, 3, 4, 5]

def test_2():
    values = [1, 2, 3, 4, 5]
    beggars = 1
    assert english_beggars(values, beggars) == [15]

def test_3():
    values = [1, 2, 3, 4, 5]
    beggars = 2
    assert english_beggars(values, beggars) == [9, 6]

def test_4 ():
    values = [1, 2, 3, 4, 5]
    beggars = 3
    assert english_beggars(values, beggars) == [5, 7, 3]

def test_5():
    values = [1, 2, 3, 4, 5]
    beggars = 6
    assert english_beggars(values, beggars) == [1, 2, 3, 4, 5, 0]

def test_6():
    values = [1, 2, 3, 4, 5]
    beggars = 0
    assert english_beggars(values, beggars) == []

def test_7():
    values = [1, 2, 3, 4, 5]
    beggars = 19
    assert english_beggars(values, beggars) == [1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

def test_8():
    values = [328, 9, 1, 9, 203, 43, 7, 131, 353, 227, 7, 15, 44, 50]
    beggars = 14
    assert english_beggars(values, beggars) == [328, 9, 1, 9, 203, 43, 7, 131, 353, 227, 7, 15, 44, 50]

def test_9():
    values = [22, 339, 272, 928, 14, 3, 74, 8, 300, 854, 3, 126, 583, 4, 7]
    beggars = 4
    assert english_beggars(values, beggars) == [919, 1200, 356, 1062]
    

# https://www.codewars.com/kata/59590976838112bfea0000fa/train/python