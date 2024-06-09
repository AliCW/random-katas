def difference_of_2(array):
    differences = []

    for i in range(len(array)):
        for j in range(len(array)):
            if array[i] - array[j] == 2:
                if array[i] > array[j]:
                    differences.append((array[j], array[i]))

    differences.sort(key = lambda x: x[0])

    return differences

#https://www.codewars.com/kata/5340298112fa30e786000688/train/python