from kata_function.delete_nth import delete_nth

def test_1():
    array = [1, 2, 2, 3, 4]
    integer = 1
    delete_nth(array, integer)
    assert array == [1, 2, 2, 3, 4]

def test_2():
    array = [1, 2, 2, 3, 4]
    integer = 1
    assert delete_nth(array, integer) == [1, 2, 3, 4]

def test_3():
    array = [1,1,3,3,7,2,2,2,2]
    integer = 3
    assert delete_nth(array, integer) == [1, 1, 3, 3, 7, 2, 2, 2]

def test_4():
    array = [1,1,1,2,3,5,5,5,5,5,6,8,8,8,8,8,8,8,0,2,4]
    integer = 4
    assert delete_nth(array, integer) == [1,1,1,2,3,5,5,5,5,6,8,8,8,8,0,2,4]

def test_5():
    array = [33, 33, 33, 40, 33, 40, 40, 33, 40, 40, 33, 40, 40, 40, 33, 40, 33, 40, 33]
    integer = 10
    assert delete_nth(array, integer) == [33, 33, 33, 40, 33, 40, 40, 33, 40, 40, 33, 40, 40, 40, 33, 40, 33, 40, 33]

def test_6():
    array = [50, 29, 42, 50, 40, 40, 42, 29, 50, 40, 40, 40, 29, 29, 40, 42, 40, 50, 40, 50, 40, 50, 42, 50, 42, 50, 40, 50, 42]
    integer = 6
    assert delete_nth(array, integer) == [50, 29, 42, 50, 40, 40, 42, 29, 50, 40, 40, 40, 29, 29, 40, 42, 50, 50, 50, 42, 42, 42]

def test_7():
    array = [24, 44, 44, 24, 46, 46, 46, 46, 46, 46, 24, 24, 24, 46, 44, 46]
    integer = 7
    assert delete_nth(array, integer) == [24, 44, 44, 24, 46, 46, 46, 46, 46, 46, 24, 24, 24, 46, 44]

def test_8():
    array = [42, 12, 42, 42, 42, 42, 12, 12, 42, 12, 16, 1, 42, 42, 43, 12, 42, 12, 42, 16]
    integer = 9
    assert delete_nth(array, integer) == [42, 12, 42, 42, 42, 42, 12, 12, 42, 12, 16, 1, 42, 42, 43, 12, 42, 12, 16]


#https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/python