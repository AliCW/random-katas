from kata_solution.only_duplicates import only_duplicates

def test_1():
    string = "abccdefee"
    assert only_duplicates(string) == "cceee"

def test_2():
    string = "hello"
    assert only_duplicates(string) == "ll"

def test_3():
    string = "colloquial"
    assert only_duplicates(string) == "ollol"

def test_4():
    string = "foundersandcoders"
    assert only_duplicates(string) == "ondersndoders"

def test_5():
    string = "ehfgfffaihf"
    assert only_duplicates(string) == "hffffhf"

def test_6():
    string = "hhhgfgedeei"
    assert only_duplicates(string) == "hhhggeee"

def test_7():
    string = "eehgfieeecg"
    assert only_duplicates(string) == "eegeeeg"

def test_8():
    string = "egbhceceifh"
    assert only_duplicates(string) == "ehceceh"

def test_9():
    string = "ifegfehhfhc"
    assert only_duplicates(string) == "fefehhfh"



#https://www.codewars.com/kata/5a1dc4baffe75f270200006b/train/python