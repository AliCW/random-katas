def uniq(array):
    if len(array) == 1:
        return array

    out = []
    for i in range(0, len(array) - 1, 1):
        if i == 0:
            out.append(array[0])
        if array[i] != array[i + 1]:
            out.append(array[i + 1])

    return out

#https://www.codewars.com/kata/52249faee9abb9cefa0001ee/train/python