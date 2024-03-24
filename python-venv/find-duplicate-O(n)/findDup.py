def findDup(arr):

    dict = []
    output = 0

    for i in range(len(arr)):
        if arr[i] in dict:
            output = arr[i]
            break
        else:
            dict += [arr[i]]
            
    return output

#https://www.codewars.com/kata/558f0553803bc3c4720000af/train/python