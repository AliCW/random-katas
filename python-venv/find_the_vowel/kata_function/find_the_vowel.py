import re

def vowel(string):
    output = []

    for i in range(0, len(string), 1):
        upper = string[i].upper()
        if len(re.findall("[AEIOUY]", upper)) > 0:
            output.append(i + 1)

    return output

#https://www.codewars.com/kata/5680781b6b7c2be860000036/train/python
