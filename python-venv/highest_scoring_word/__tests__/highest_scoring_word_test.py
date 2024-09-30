from kata_function.highest_scoring_word import high

def test_1():
    string = 'man i need a taxi up to ubud'
    assert high(string) == 'taxi'

def test_2():
    string = 'aa b'
    assert high(string) == 'aa'

def test_3():
    string = 'b aa'
    assert high(string) == 'b'

def test_4():
    string = 'bb d'
    assert high(string) == 'bb'

def test_5():
    string = 'd bb'
    assert high(string) == 'd'

def test_6():
    string = 'aaa b'
    assert high(string) == 'aaa'

def test_7():
    string = 'what time are we climbing up the volcano'
    assert high(string) == 'volcano'