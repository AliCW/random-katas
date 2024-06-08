def first_smallest(array, n):
    spread = array.copy()
    indices = []
    smallest = []

    for i in range(0, n, 1):
        indices.append(spread.index(min(spread)))
        spread[spread.index(min(spread))] = spread[spread.index(max(spread))] + 1

    indices.sort()

    for j in range(0, len(indices), 1):
        smallest.append(array[indices[j]])

    return smallest

#https://www.codewars.com/kata/5aec1ed7de4c7f3517000079/train/python