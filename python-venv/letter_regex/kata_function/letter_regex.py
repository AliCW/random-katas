import re

def is_it_letter(s):
    check = re.search("[A-Za-z]", s)

    if check:
        return True
    else:
        return False

#https://www.codewars.com/kata/57a06b07cf1fa58b2b000252/train/python