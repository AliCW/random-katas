from validIPv4 import validIPv4

def test_1():
    str = "192.168.1.1"
    assert validIPv4(str) == True

def test_2():
    str = "0.0.0.0"
    assert validIPv4(str) == True

def test_3():
    str = "12.255.56.1"
    assert validIPv4(str) == True

def test_4():
    str = ""
    assert validIPv4(str) == False

def test_5():
    str = "123.456.789.10"
    assert validIPv4(str) == False

def test_6():
    str = "12.34.56"
    assert validIPv4(str) == False

def test_7():
    str = "137.255.156.100"
    assert validIPv4(str) == True

def test_8():
    str = "abc.def.ghi.jkl"
    assert validIPv4(str) == False

def test_9():
    str = "01.02.03.04"
    assert validIPv4(str) == False

def test_10():
    str = "192,45,67,89"
    assert validIPv4(str) == False

def test_11():
    str = "192.158.0.0."
    assert validIPv4(str) == False

def test_12():
    str = " 1.2.3.4"
    assert validIPv4(str) == False

def test_13():
    str = "1.2.3.4 "
    assert validIPv4(str) == False

def test_14():
    str = "1e0.1e1.1e2.1e3"
    assert validIPv4(str) == False

def test_15():
    str = "12.34.56.-7"
    assert validIPv4(str) == False

def test_16():
    str = "1.2.3.4\n"
    assert validIPv4(str) == False

def test_17():
    str = "\n1.2.3.4"
    assert validIPv4(str) == False

def test_18():
    str = "56.135.147."
    assert validIPv4(str) == False

def test_19():
    str = "bc180.212.251.61"
    assert validIPv4(str) == False

def test_20():
    str = "30.221.94.239"
    assert validIPv4(str) == True

def test_21():
    str = ".180.42.225"
    assert validIPv4(str) == False