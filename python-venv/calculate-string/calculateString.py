import re

def calculateString(string):

    left = []
    right = []
    split = []
    symbol = ""

    if string.find("/") > 0:
        symbol = "/"
        split = string.split(symbol)
    elif string.find("-") > 0:
        symbol = "-"
        split = string.split(symbol)
    elif string.find("*") > 0:
        symbol = "*"
        split = string.split(symbol)
    elif string.find("+") > 0:
        symbol = "+"
        split = string.split(symbol)

    for i in range(len(split[0])):
        if re.search("[0-9.]", split[0][i]) != None:
            left.append(split[0][i])
        
    for j in range(len(split[1])):
        if re.search("[0-9.]", split[1][j]) != None:
            right.append(split[1][j])

    if left[len(left) - 1] == ".":
        del left[len(left) - 1]
    elif right[len(right) - 1] == ".":
        del right[len(right) - 1]

    left = "".join(left)
    right = "".join(right)

    if symbol == "/":
        output =  float(left) / float(right)
        return str(round(output))
    if symbol == "-":
        output =  float(left) - float(right)
        return str(round(output))
    if symbol == "+":
        output =  float(left) + float(right)
        return str(round(output))
    if symbol == "*":
        output =  float(left) * float(right)
        return str(round(output))


#https://www.codewars.com/kata/56b5dc75d362eac53d000bc8/train/python