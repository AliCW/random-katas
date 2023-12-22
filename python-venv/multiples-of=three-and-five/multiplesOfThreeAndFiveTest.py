from multiplesOfThreeAndFive import multiplesOfThreeAndFive;

def test_1():
    number = 4
    assert multiplesOfThreeAndFive(number) == 3

def test_2():
    number = 10
    assert multiplesOfThreeAndFive(number) == 23

def test_3():
    number = 5055
    assert multiplesOfThreeAndFive(number) == 5959845

def test_4():
    number = 95038
    assert multiplesOfThreeAndFive(number) == 2107559520

def test_5():
    number = 23883
    assert multiplesOfThreeAndFive(number) == 133071300

def test_6():
    number = 47945
    assert multiplesOfThreeAndFive(number) == 536328753