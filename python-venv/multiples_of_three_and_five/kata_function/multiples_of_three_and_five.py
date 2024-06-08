def multiples_of_three_and_five(number):
    output = 0

    for num in range(number):
        checkThree = num / 3
        checkFive = num / 5
        if (checkThree).is_integer() == True or (checkFive).is_integer() == True:
            output += num

    return output