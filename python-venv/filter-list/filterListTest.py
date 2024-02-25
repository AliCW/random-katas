from filterList import filter_list

def test_1():
    l = [1, 2, 'a', 'b']
    assert filter_list(l) == [1, 2]

def test_2():
    l = [1, 'a', 'b', 0, 15]
    assert filter_list(l) == [1, 0, 15]

def test_3():
    l = [1, 2, 'aasf', '1', '123', 123]
    assert filter_list(l) == [1, 2, 123]

def test_4():
    l = ['4tv', 547, ']33l', 271.22]
    assert filter_list(l) == [547, 271.22]

def test_5():
    l = [172.36, 'NA', 817, 32, '0=', 877, '12', '462']
    assert filter_list(l) == [172.36, 817, 32, 877]

def test_6():
    l = []
    assert filter_list(l) == []

def test_7():
    l = ['1GAc\\']
    assert filter_list(l) == []

def test_8():
    l = [1.6, 1, 'gkd', ['glksa']]
    assert filter_list(l) == [1.6, 1]

#https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/python