def digital_root(integer):

    def equate(num):
        toString = list(str(num))
        toInt = [int(numString) for numString in toString]
        return sum(toInt)
    
    initialSum = equate(integer)

    if initialSum < 9:
        return initialSum
    
    secondEquate = 10
    while secondEquate > 9:
        secondEquate = equate(initialSum)
        if secondEquate > 9:
            secondEquate = equate(secondEquate)

    return secondEquate

#https://www.codewars.com/kata/541c8630095125aba6000c00/train/python