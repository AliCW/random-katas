from kata_function.simple_string_expansion import string_expansion

def  test_1():
    string = '3abc'
    assert string_expansion(string) =='aaabbbccc'

def test_2():
    string = ''
    assert string_expansion(string) == ''

def test_3():
    string = '3D2a5d2f'
    assert string_expansion(string) == 'DDDaadddddff'

def test_4():
    string = '0d0a0v0t0y'
    assert string_expansion(string) == ''

def test_5():
    string = '3d332f2a'
    assert string_expansion(string) == 'dddffaa'

def test_6():
    string = 'abcde'
    assert string_expansion(string) == 'abcde'

def test_7():
    string = 'a2bcde'
    assert string_expansion(string) == 'abbccddee'

def test_8():
    string = '5YQ7A28r8Cr6m5Kq'
    assert string_expansion(string) == 'YYYYYQQQQQAAAAAAArrrrrrrrCCCCCCCCrrrrrrrrmmmmmmKKKKKqqqqq'

def test_9():
    string = '0Qj3ok34vK8DYWDs'
    assert string_expansion(string) == 'oookkkvvvvKKKKDDDDDDDDYYYYYYYYWWWWWWWWDDDDDDDDssssssss'

def test_10():
    string = 'S1OnbiNh47qn1Q56'
    assert string_expansion(string) == 'SOnbiNhqqqqqqqnnnnnnnQ'

def test_11():
    string = 'A3IkANV0U0bR51nW'
    assert string_expansion(string) == 'AIIIkkkAAANNNVVVnW'

def test_12():
    string = 'OlbG97skvn04hM81'
    assert string_expansion(string) == 'OlbGssssssskkkkkkkvvvvvvvnnnnnnnhhhhMMMM'

#https://www.codewars.com/kata/5ae326342f8cbc72220000d2/train/python