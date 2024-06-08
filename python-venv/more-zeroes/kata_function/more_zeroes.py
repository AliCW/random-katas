def more_zeroes(string):

    binaries = []
    indices = []
    characters = [letter for letter in string]

    for i in range(len(characters)):
        binaries.append(bin(ord(characters[i]))[2:len(bin(ord(characters[i])))])

    for j in range(len(binaries)):
        if binaries[j].count('0') >= 4:
            indices.append(j)

    split = list(string)
    output = []

    for k in range(len(split)):
        if split[k] in output:
            continue
        if k in indices:
            output.append(split[k])
            
    return output

#https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/train/python