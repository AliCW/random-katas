from kata_function.break_camelCase import break_camelCase

def test_1():
    string = "test"
    assert break_camelCase(string) == "test"

def test_2():
    string = "goodOwn"
    assert break_camelCase(string) == "good Own"

def test_3():
    string = "helloWorld"
    assert break_camelCase(string) == "hello World"

def test_4():
    string = "This Is camelCase"
    assert break_camelCase(string) == "This Is camel Case"

def test_5():
    string = "camelCasingTest"
    assert break_camelCase(string) == "camel Casing Test"

def test_6():
    string = "lookNounsFewDayWork"
    assert break_camelCase(string) == "look Nouns Few Day Work"

def test_7():
    string = "placeProblemProblemLongOld"
    assert break_camelCase(string) == "place Problem Problem Long Old"

def test_8():
    string = "childHaveBadProblemOwnGreatOldSmall"
    assert break_camelCase(string) == "child Have Bad Problem Own Great Old Small"

def test_9():
    string = "numberOldFewLeavePointRightLifeFact"
    assert break_camelCase(string) == "number Old Few Leave Point Right Life Fact"




#https://www.codewars.com/kata/5208f99aee097e6552000148/train/python