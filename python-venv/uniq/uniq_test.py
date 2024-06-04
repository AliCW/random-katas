from uniq import uniq

def test_1():
    array = ['a','a','b','b','c','a','b','c','c']
    uniq(array)
    assert array == ['a','a','b','b','c','a','b','c','c']

def test_2():
    array = ['a','a','b','b','c','a','b','c','c']
    assert uniq(array) == ['a','b','c','a','b','c']

def test_3():
    array = ['a','a','a','b','b','b','c','c','c']
    assert uniq(array) == ['a', 'b', 'c']

def test_4():
    array = [None, 'a', 'a']
    assert uniq(array) == [None, 'a']

def test_5():
    array = ['']
    assert uniq(array) == ['']

def test_6():
    array = ['w', 'w', 'w']
    assert uniq(array) == ['w']

def test_7():
    array = ['fk', 'hey', 'hey', 'hey', 'z', 'z', 'z', 'dy', 'rew', 'rew', 'rew', 'rew', 'jah', 'jah', 'jah', 'vso', 'yt'];
    assert uniq(array) == ['fk', 'hey', 'z', 'dy', 'rew', 'jah', 'vso', 'yt']

def test_8():
    array = []
    assert uniq(array) == []

def test_9():
    array = ['n', 'n',  'z', 'z', 'z', 'jd', 'jd', 'jd', 'j', 'j', 'h',  'h', 'h', 'x', 'x']
    assert uniq(array) == ['n', 'z', 'jd', 'j', 'h', 'x']

#https://www.codewars.com/kata/52249faee9abb9cefa0001ee/train/python