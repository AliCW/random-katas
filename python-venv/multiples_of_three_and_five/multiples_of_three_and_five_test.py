from multiples_of_three_and_five import multiples_of_three_and_five

def test_1():
    number = 4
    assert multiples_of_three_and_five(number) == 3

def test_2():
    number = 10
    assert multiples_of_three_and_five(number) == 23

def test_3():
    number = 5055
    assert multiples_of_three_and_five(number) == 5959845

def test_4():
    number = 95038
    assert multiples_of_three_and_five(number) == 2107559520

def test_5():
    number = 23883
    assert multiples_of_three_and_five(number) == 133071300

def test_6():
    number = 47945
    assert multiples_of_three_and_five(number) == 536328753