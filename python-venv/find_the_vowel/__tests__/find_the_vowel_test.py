from kata_function.find_the_vowel import vowel

def test_1():
    assert vowel(string="Mmmmm") == []

def test_2():
    assert vowel(string="apple") == [1, 5]

def test_3():
    assert vowel(string="super") == [2, 4]

def test_4():
    assert vowel(string="supercalifragilisticexpialidocious") == [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]

def test_5():
    assert vowel(string="jzaWFjggopVXcwtjzDmSmbLpyXfBBoIz") == [3,9,25,30,31]
    
def test_6():
    assert vowel(string="GboEDkUhSirwPlodsKJGkPzNVWyELomucO") == [3,4,7,10,15,27,28,30,32,34]

#https://www.codewars.com/kata/5680781b6b7c2be860000036/train/python