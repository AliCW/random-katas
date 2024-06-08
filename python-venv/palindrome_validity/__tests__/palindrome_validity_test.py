from kata_function.palindrome_validity import palindrome_validity

def test_1():
    string = ""
    assert palindrome_validity(string) == True

def test_2():
    string = "101"
    assert palindrome_validity(string) == True

def test_3():
    string = "911"
    assert palindrome_validity(string) == False

def test_4():
    string = "RotaTor"
    assert palindrome_validity(string) == True

def test_5():
    string = "A man, a plan, a canal - Panama"
    assert palindrome_validity(string) == True

def test_6():
    string = "Abba Zabba, you're my only friend"
    assert palindrome_validity(string) == False

def test_7():
    string = "Under_scores; Serocsrednu"
    assert palindrome_validity(string) == True

def test_8():
    string = "Eva: Can I see bees in a cave?"
    assert palindrome_validity(string) == True
    