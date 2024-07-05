def english_beggars(values, beggars):
    if beggars == 0:
        return []
    
    output = []
    for i in range(0, beggars, 1):
        output.append(0)

    count = 0
    for j in range(len(values)):
        output[count] += values[j]
        count += 1
        if count == beggars:
            count = 0

    return output

# https://www.codewars.com/kata/59590976838112bfea0000fa/train/python