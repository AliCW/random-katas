from kata_function.difference_of_squares import difference_of_squares

def test_1():
    number = 10
    assert difference_of_squares(number) == 2640

def test_2():
    number = 5
    assert difference_of_squares(number) == 170

def test_3():
    number = 100
    assert difference_of_squares(number) == 25164150

def test_4():
    number = 40
    assert difference_of_squares(number) == 650260

def test_5():
    number = 79
    assert difference_of_squares(number) == 9818120

def test_6():
    number = 1
    assert difference_of_squares(number) == 0

def test_7():
    number = 53
    assert difference_of_squares(number) == 1996722

def test_8():
    number = 72
    assert difference_of_squares(number) == 6779364

def test_9():
    number = 60
    assert difference_of_squares(number) == 3275090