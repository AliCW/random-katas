import re

def password(string):

    if len(string) < 8:
        return False

    upper = re.findall("[A-Z]", string)
    lower = re.findall("[a-z]", string)
    num = re.findall("[0-9]", string)

    if upper and lower and num:
        return True
    else:
        return False
