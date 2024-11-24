def find_even_index(array):

    for i in range(0, len(array), 1):
        left = 0
        right = 0
        for j in range(0, len(array), 1):
            if(i > j):
                left += array[j]
            elif(j > i):
                right += array[j]
        if left == right:
            return i

    return -1

#can you loop & slice either side of i, then count the slice & evaluate?

#https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/python