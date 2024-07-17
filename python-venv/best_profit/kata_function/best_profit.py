def max_profit(array):

    minIndex = array.index(min(array))
    sliced = array[minIndex : len(array)]
    

    return sliced