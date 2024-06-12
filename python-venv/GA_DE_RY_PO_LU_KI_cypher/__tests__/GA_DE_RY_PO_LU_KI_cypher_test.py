from kata_function.GA_DE_RY_PO_LU_KI_cypher import encode
from kata_function.GA_DE_RY_PO_LU_KI_cypher import decode

def test_1():
    string = "Ala has a cat"
    assert encode(string) == "Gug hgs g cgt"

def test_2():
    string = "ABCD"
    assert encode(string) == "GBCE"

def test_3():
    string = "gaderypoluki"
    assert encode(string) == "agedyropulik"

def test_4():
    string = "wJG4vhz6BvVDCZlDdfeOr"
    assert encode(string) == "wJA4vhz6BvVECZuEefdPy"

def test_5():
    string = "Iy5rgUVckbq"
    assert encode(string) == "Kr5yaLVcibq"

def test_6():
    string = "Gug hgs g cgt"
    assert decode(string) == "Ala has a cat"

def test_7():
    string = "agedyropulik"
    assert decode(string) == "gaderypoluki"

def test_8():
    string = "GBCE"
    assert decode(string) == "ABCD"

def test_9():
    string = "QWKmvkb ekE wdkwdmsdkgfn djg"
    assert decode(string) == "QWImvib diD weiwemseiafn eja"

def test_10():
    string = "FVNjknvj sjc js csd"
    assert decode(string) == "FVNjinvj sjc js cse"


#https://www.codewars.com/kata/592a6ad46d6c5a62b600003f/train/python