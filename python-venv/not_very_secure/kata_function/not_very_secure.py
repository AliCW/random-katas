import re

def alphanumeric(string):
    if string == "":
        return False
    elif len(re.findall("\s", string)) > 0:
        return False
    elif len(re.findall("[-_!{}()\"£?$%^&*¬'``,.<>/@~\[\]#=+:\;\|\\\\]", string)) > 0:
        return False

    return True

#https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/python