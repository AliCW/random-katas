def mine_location(array):
    for i in range (len(array)):
        for j in range(len(array[i])):
            if array[i][j] == 1:
                return [i, j]
            
#https://www.codewars.com/kata/528d9adf0e03778b9e00067e/train/python