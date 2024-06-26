def two_sum(array, integer):

    for i in range(0, len(array), 1):
        for j in range(i + 1, len(array), 1):
            if array[i] + array[j] == integer:
                return (i, j)

#https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/python