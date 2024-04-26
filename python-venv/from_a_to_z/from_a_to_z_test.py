from from_a_to_z import gimmie_the_letters

def test_1():
    string = "a-b"
    assert gimmie_the_letters(string) == "ab"

def test_2():
    string = "A-B"
    assert gimmie_the_letters(string) == "AB"

def test_3():
    string = "a-z"
    assert gimmie_the_letters(string) == "abcdefghijklmnopqrstuvwxyz"

def test_4():
    string = "h-o"
    assert gimmie_the_letters(string) == "hijklmno"

def test_5():
    string = "Q-Z"
    assert gimmie_the_letters(string) == "QRSTUVWXYZ"

def test_6():
    string = "J-J"
    assert gimmie_the_letters(string) == "J"

#https://www.codewars.com/kata/6512b3775bf8500baea77663/train/python
    


        #     test.assert_equals(gimme_the_letters("g-i"), "ghi")
        # test.assert_equals(gimme_the_letters("H-I"), "HI")
        # test.assert_equals(gimme_the_letters("y-z"), "yz")
        # test.assert_equals(gimme_the_letters("e-k"), "efghijk")
        # test.assert_equals(gimme_the_letters("a-q"), "abcdefghijklmnopq")
        # test.assert_equals(gimme_the_letters("F-O"), "FGHIJKLMNO")    