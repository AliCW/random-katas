def grabscrab(string, array):
    sort = sorted(list(string))
    output = []

    for i in range(0, len(array), 1):
        check = sorted(list(array[i]))
        if ''.join(sort) == ''.join(check):
            output.append(array[i])

    return output


#https://www.codewars.com/kata/52b305bec65ea40fe90007a7/train/python