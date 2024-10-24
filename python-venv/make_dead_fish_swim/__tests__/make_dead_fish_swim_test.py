from kata_function.make_dead_fish_swim import deadfish

def test_1():
    string = 'iiisdoso'
    assert deadfish(string) == [8, 64]

def test_2():
    string = 'io'
    assert deadfish(string) == [1]

def test_3():
    string = 'do'
    assert deadfish(string) == [-1]

def test_4():
    string = 'iiso'
    assert deadfish(string) == [4]

def test_5():
    string = ''
    assert deadfish(string) == []

def test_6():
    string = 'disc'
    assert deadfish(string) == []

def test_7():
    string = 'infinitesimal o distance o destination'
    assert deadfish(string) == [10, 100, 9803]