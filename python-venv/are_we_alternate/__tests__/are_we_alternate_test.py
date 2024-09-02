from kata_function.are_we_alternate import are_we_alternate

def test_1():
    string = 'amazon'
    assert are_we_alternate(string) == True

def test_2():
    string = 'apple'
    assert are_we_alternate(string) == False

def test_3():
    string = 'banana'
    assert are_we_alternate(string) == True

def test_4():
    string = 'fcfgf'
    assert are_we_alternate(string) == False

def test_5():
    string = 'hegeg'
    assert are_we_alternate(string) == True

def test_6():
    string = 'frkvmgdrgjdnmkddvdaxcxwgceh'
    assert are_we_alternate(string) == False

def test_7():
    string = 'atatatatatatatatatatatata'
    assert are_we_alternate(string) == True


#https://www.codewars.com/kata/59325dc15dbb44b2440000af/train/python