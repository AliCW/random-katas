from first_non_repeating_char import first_non_repeating_letter

def test_1():
    string = "a"
    assert first_non_repeating_letter(string) == "a"

def test_2():
    string = "stress"
    assert first_non_repeating_letter(string) == "t"

def test_3():
    string = "moonmen"
    assert first_non_repeating_letter(string) == "e"

def test_4():
    string = "sTreSS"
    assert first_non_repeating_letter(string) == "T"

def test_5():
    string = "Go hang a salami, I'm a lasagna hog!"
    assert first_non_repeating_letter(string) == ","

def test_6():
    string = "aaaa"
    assert first_non_repeating_letter(string) == ""

def test_7():
    string = "xoxoxoxo"
    assert first_non_repeating_letter(string) == ""

def test_8():
    string = "∞§ﬁ›ﬂ∞§"
    assert first_non_repeating_letter(string) == "ﬁ"

    

#https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/python