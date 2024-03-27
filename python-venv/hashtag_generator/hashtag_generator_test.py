from hashtag_generator import hashtag_generator

def test_1():
    string = ""
    assert hashtag_generator(string) == False

def test_2():
    string = "Codewars"
    assert hashtag_generator(string) == "#Codewars"

def test_3():
    string = "Codewars        "
    assert hashtag_generator(string) == "#Codewars"

def test_4():
    string = "        Codewars"
    assert hashtag_generator(string) == "#Codewars"

def test_5():
    string = "Codewars Is Nice"
    assert hashtag_generator(string) == "#CodewarsIsNice"

def test_6():
    string = "codewars is nice"
    assert hashtag_generator(string) == "#CodewarsIsNice"

def test_7():
    string = "CoDeWaRs is niCe"
    assert hashtag_generator(string) == "#CodewarsIsNice"

def test_8():
    string = "c i n"
    assert hashtag_generator(string) == "#CIN"
    
def test_9():
    string = "codewars is nice"
    assert hashtag_generator(string) == "#CodewarsIsNice"

def test_10():
    string = "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
    assert hashtag_generator(string) == False
    
def test_11():
    string = " a  bb  ccc  dddd  eeeee  ffffff  ggggggg  hhhhhhhh  iiiiiiiii  jjjjjjjjjj  kkkkkkkkkkk  llllllllllll  mmmmmmmmmmmmm  nnnnnnnnnnnnnn  ooooooooooooooo  pppppppppppppppp  qqq"
    assert hashtag_generator(string) == "#ABbCccDdddEeeeeFfffffGggggggHhhhhhhhIiiiiiiiiJjjjjjjjjjKkkkkkkkkkkLlllllllllllMmmmmmmmmmmmmNnnnnnnnnnnnnnOooooooooooooooPpppppppppppppppQqq"


#https://www.codewars.com/kata/52449b062fb80683ec000024/train/python