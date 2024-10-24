def deadfish(string):
    split = list(string)

    digit = 0
    output = []
    for i in range(len(split)):
        if split[i] == 'i':
            digit += 1
        if split[i] == 'd':
            digit -= 1
        if split[i] == 's':
            digit *= digit
        if split[i] == 'o':
            output.append(digit)

    return output
