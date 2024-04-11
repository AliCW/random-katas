def histogram(array):

    output = ""
    dice = 6
    rev = array[::-1]

    for i in range(len(rev)):
        output += str(dice) + "|"
        dice -= 1
        if rev[i] == 0:
            output += "\n"
        else:
            output += "#" * rev[i] + " " + str(rev[i]) + "\n"
            
    return output

#https://www.codewars.com/kata/57d532d2164a67cded0001c7/train/python