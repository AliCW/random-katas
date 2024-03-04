from palindromeValidity import palindromeValidity

def test_1():
    string = ""
    assert palindromeValidity(string) == True

def test_2():
    string = "101"
    assert palindromeValidity(string) == True

def test_3():
    string = "911"
    assert palindromeValidity(string) == False

def test_4():
    string = "RotaTor"
    assert palindromeValidity(string) == True

def test_5():
    string = "A man, a plan, a canal - Panama"
    assert palindromeValidity(string) == True

def test_6():
    string = "Abba Zabba, you're my only friend"
    assert palindromeValidity(string) == False

def test_7():
    string = "Under_scores; Serocsrednu"
    assert palindromeValidity(string) == True

def test_8():
    string = "Eva: Can I see bees in a cave?"
    assert palindromeValidity(string) == True
    