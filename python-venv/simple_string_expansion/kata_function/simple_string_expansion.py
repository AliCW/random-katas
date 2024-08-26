import re

def string_expansion(string):

    if len(re.findall("[0-9]", string)) == 0:
        return string

    output = ''
    first = False

    for i in range(len(string)):
        if len(re.findall("[0-9]", string[i])) > 0:
            first = True
            for j in range(i + 1, len(string), 1):
                if len(re.findall("[0-9]", string[j])) > 0:
                    break
                output += string[j] * int(string[i])

        if first == False:
            output += string[i]

    return output

#https://www.codewars.com/kata/5ae326342f8cbc72220000d2/train/python