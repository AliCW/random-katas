import re

def are_we_alternate(string):
    initial = 0
    if len(re.findall("[aeiou]", string[0])) > 0:
        initial += 1

    check = [initial]
    for i in range(1, len(string), 1):
        if len(re.findall("[aeiou]", string[i])) > 0:
            check.append(1)
        else:
            check.append(0)

    for j in range(0, len(check) - 1, 1):
        if check[j] == check[j + 1]:
            return False

    return True

#https://www.codewars.com/kata/59325dc15dbb44b2440000af/train/python