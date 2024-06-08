def find_divisors(number):
    divisors = []
    for i in range(2, number, 1):

        if (number / i).is_integer() == True:
            divisors.append(i)

    if len(divisors) == 0:
        return str(number) + " is a prime number"
    return divisors

#https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/python