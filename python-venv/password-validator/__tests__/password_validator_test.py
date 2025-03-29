from kata_function.password_validator import password

def test_1():
    string = "Abcd1234"
    assert password(string) == True

def test_2():
    string = "Abcd123"
    assert password(string) == False

def test_3():
    string = "abcd1234"
    assert password(string) == False

def test_4():
    string = "AbcdefGhijKlmnopQRsTuvwxyZ1234567890"
    assert password(string) == True

def test_5():
    string = "ABCD1234"
    assert password(string) == False

def test_5():
    string = "Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"
    assert password(string) == True

def test_6():
    string = "!@#$%^&*()-_+={}[]|\:;?/>.<,"
    assert password(string) == False