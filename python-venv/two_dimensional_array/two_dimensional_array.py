def matrix(array):

    output = []

    for i in range(len(array)):
        output.append([])

        for j in range(len(array[i])):
            if array[i] == array[j] and array[i][j] > -1:
                output[i].append(1)
            elif array[i] == array[j] and array[i][j] < 0:
                output[i].append(0)
            else:
                output[i].append(array[i][j])

    return output

#https://www.codewars.com/kata/581214d54624a8232100005f/train/python