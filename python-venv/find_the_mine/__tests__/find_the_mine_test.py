from kata_function.find_the_mine import mine_location

def test_1():
    array = [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ]
    mine_location(array)
    assert array == [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ]

def test_2():
    array = [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ]
    assert mine_location(array) == [0, 0]

def test_3():
    array = [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ]
    assert mine_location(array) == [1, 1]

def test_4():
    array = [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ]
    assert mine_location(array) == [2, 1]

def test_5():
    array = [
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0
            ],
            [
                1, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0
            ]
            ]
    assert mine_location(array) == [6, 0]

#https://www.codewars.com/kata/528d9adf0e03778b9e00067e/train/python