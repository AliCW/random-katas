import math

def find_max_divisors(a, b):
    if b - a == 0:
        return a
    if b - a == 1:
        check = [a, b]
        return max(check)

    start = a
    factors = 0
    divisors = {}
    for i in range(start, b + 1, 1):
        for j in range(1, round(math.sqrt(i)) + 1, 1): 
            if i % j == 0:
                factors += 1
                if j != i / j:
                    factors += 1
        divisors[i] = factors
        factors = 0

    maxDivisors = max(divisors.values())
    for key in divisors:
        if divisors[key] == maxDivisors:
            return start
        start += 1


#https://www.codewars.com/kata/588c0a38b7cd14085300003f/train/python