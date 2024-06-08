def histogram_v2(array):

    total = sum(array)
    percentageArray = []

    for i in range(len(array)):
        if array[i] == 0:
            percentageArray.append(0)
        else:
            percentageArray.append(int(array[i] / int(total) * 100))

    rev = percentageArray[::-1]
    output = ""
    dice = 6

    for i in range(len(rev)):
        output += str(dice) + "|"
        dice -= 1
        if rev[i] == 0:
            output += "\n"
        else:
            cent = int(rev[i]) / 2
            output += "█" * int(cent) + " " + str(rev[i]) + "%\n"

    return output


#https://www.codewars.com/kata/5d5f5ea8e3d37b001dfd630a/train/python
