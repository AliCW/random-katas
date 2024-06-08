from kata_function.sort_the_gift_code import sort_gift_code

def test_1():
    string = "abcdef"
    assert sort_gift_code(string) == "abcdef"

def test_2():
    string = "pqksuvy"
    assert sort_gift_code(string) == "kpqsuvy"

def test_3():
    string = "zyxwvutsrqponmlkjihgfedcba"
    assert sort_gift_code(string) == "abcdefghijklmnopqrstuvwxyz"

def test_4():
    string = "qgcahkxfljwuv"
    assert sort_gift_code(string) == "acfghjklquvwx"

def test_5():
    string = "avbncrftxpkdisl"
    assert sort_gift_code(string) == "abcdfiklnprstvx"

def test_6():
    string = "qgdcezofxprtkvbhmnjyilau"
    assert sort_gift_code(string) == "abcdefghijklmnopqrtuvxyz"

#https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3/train/python