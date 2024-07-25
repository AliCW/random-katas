from kata_function.not_very_secure import alphanumeric

def test_1():
    string = ""
    assert alphanumeric(string) == False

def test_2():
    string = "string"
    assert alphanumeric(string) == True

def test_3():
    string = "0125846"
    assert alphanumeric(string) == True

def test_4():
    string = "abcdefghijklmnopqrstuvwxyz0125846789"
    assert alphanumeric(string) == True

def test_5():
    string = "012 84 6"
    assert alphanumeric(string) == False

def test_6():
    string = "hello-_world!"
    assert alphanumeric(string) == False

def test_7():
    string = "hello123world-_!{}()\"£$%^&*¬`,.<>/@~#=+"
    assert alphanumeric(string) == False

def test_8():
    string = "hello world_'?\\\\"
    assert alphanumeric(string) == False

def test_9():
    string = "TQUeJX\oj'`"
    assert alphanumeric(string) == False

#https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/python