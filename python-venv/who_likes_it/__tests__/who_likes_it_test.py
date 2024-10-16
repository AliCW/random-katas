from kata_function.who_likes_it import who_likes_it

def test_1():
    array = []
    assert who_likes_it(array) == 'no one likes this'

def test_2():
    array = ['Peter']
    assert who_likes_it(array) == 'Peter likes this'

def test_3():
    array = ['Jacob', 'Alex']
    assert who_likes_it(array) == 'Jacob and Alex like this'

def test_4():
    array = ['Max', 'John', 'Mark']
    assert who_likes_it(array) == 'Max, John and Mark like this'

def test_5():
    array = ['Alex', 'Jacob', 'Mark', 'Max']
    assert who_likes_it(array) == 'Alex, Jacob and 2 others like this'

def test_6():
    array = ["Max", "John", "Mark", "Jacob", "Hugh", "Peter"]
    assert who_likes_it(array) == 'Max, John and 4 others like this'

def test_7():
    array = ["Hugh", "Peter", "Max", "John", "Mark", "Jacob", "Another", "Name", "Here"]
    assert who_likes_it(array) == 'Hugh, Peter and 7 others like this'

#https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/python