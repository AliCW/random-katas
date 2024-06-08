from kata_function.detect_pangram import detect_pangram

def test_1():
    string = "The quick brown fox jumps over the lazy dog."
    assert detect_pangram(string) == True

def test_2():
    string = "Cwm fjord bank glyphs vext quiz"
    assert detect_pangram(string) == True

def test_3():
    string = "Pack my box with five dozen liquor jugs."
    assert detect_pangram(string) == True

def test_4():
    string = "How quickly daft jumping zebras vex."
    assert detect_pangram(string) == True

def test_5 ():
    string = "ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"
    assert detect_pangram(string) == True

def test_6():
    string = "This isn't a pangram!"
    assert detect_pangram(string) == False

def test_7():
    string = "abcdefghijklm opqrstuvwxyz"
    assert detect_pangram(string) == False

def test_8():
    string = "Aacdefghijklmnopqrstuvwxyz"
    assert detect_pangram(string) == False

#https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/python