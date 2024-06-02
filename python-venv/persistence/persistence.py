from functools import reduce
def persistence(number):

    count = 0
    multiply = number

    while multiply > 9:
        count += 1
        multiply = list(str(multiply))
        multiply = reduce((lambda a, b: int(a) * int(b)), multiply)

    return count

#https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/python