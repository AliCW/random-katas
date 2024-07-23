import re

def disemvowel(string):
    output = re.findall("[^aeiouAEIOU]", string)
    return "".join(output)


#https://www.codewars.com/kata/52fba66badcd10859f00097e/train/python