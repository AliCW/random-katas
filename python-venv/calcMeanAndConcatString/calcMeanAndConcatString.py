import re

def calcMeanAndConcatString(lst):

    string = "".join(lst)

    word = re.findall("[a-z]", string)
    outputString = "".join(word)

    stringNumbers = re.findall("[0-9]", string)
    numbers = list(map(int, stringNumbers))

    length = len(numbers)
    total = sum(numbers)

    return [total / length, outputString]

#https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/train/python