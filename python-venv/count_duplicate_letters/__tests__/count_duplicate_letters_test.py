from kata_function.count_duplicate_letters import count_duplicates

def test_1():
    string = ''
    assert count_duplicates(string) == 0

def test_2():
    string = 'abcdefg'
    assert count_duplicates(string) == 0

def test_3():
    string = 'aabdecfg'
    assert count_duplicates(string) == 1

def test_4():
    string = 'aabedfj'
    assert count_duplicates(string) == 1

def test_5():
    string = 'aadDegjn047'
    assert count_duplicates(string) == 2

def test_6():
    string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    assert count_duplicates(string) == 26

def test_7():
    string = 'bb00fghyylmoopqw'
    assert count_duplicates(string) == 4

def test_8():
    string = 'Indivisibilities'
    assert count_duplicates(string) == 2

def test_9():
    string = 'abcdefghijklmnabcdefgABCDEFabcdeABCDABCaba'
    assert count_duplicates(string) == 7