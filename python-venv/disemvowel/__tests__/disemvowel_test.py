from kata_function.disemvowel import disemvowel

def test_1():
    string = "This website is for losers LOL!"
    assert disemvowel(string) == "Ths wbst s fr lsrs LL!"

def test_2():
    string = "No offense but,\nYour writing is among the worst I've ever read"
    assert disemvowel(string) == "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"

def test_3():
    string = "What are you, a communist?"
    assert disemvowel(string) == "Wht r y,  cmmnst?"

def test_4():
    string = "PmoQkyWvjHU iy yaOG"
    assert disemvowel(string) == "PmQkyWvjH y yG"

def test_5():
    string = "jsIdkuGUcr lEoOlrvUjongFUlbjvvA"
    assert disemvowel(string) == "jsdkGcr llrvjngFlbjvv"

def test_6():
    string = "GIueAhejb E KZPGaNzIiVUOT"
    assert disemvowel(string) == "Ghjb  KZPGNzVT"
    
def test_7():
    string = "OHid KKXYqDsYogqHcxofG eyin"
    assert disemvowel(string) == "Hd KKXYqDsYgqHcxfG yn" 

def test_8():
    string = "mSiVAyBTLdCkR"
    assert disemvowel(string) == "mSVyBTLdCkR"



#https://www.codewars.com/kata/52fba66badcd10859f00097e/train/python