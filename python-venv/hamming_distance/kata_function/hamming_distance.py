def hamming_distance(string1, string2):
    output = 0
    length = 0
    difference = 0
    if len(string1) < len(string2):
        length = len(string1)
        difference = len(string2) - len(string1)
    else:
        length = len(string2)
        difference = len(string1) - len(string2)

    for i in range(0, length, 1):
        if string1[i] != string2[i]:
            output += 1

    return output + difference


#https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69/train/python