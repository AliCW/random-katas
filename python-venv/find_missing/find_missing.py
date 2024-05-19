def find_missing(array1, array2):
    sort1 = array1
    sort1.sort()
    sort2 = array2
    sort2.sort()

    for i in range(len(sort1)):
        if i == len(sort1) - 1:
            return sort1[len(sort1) - 1]
        if sort1[i]!= sort2[i]:
            return sort1[i]




# def find_missing(arr1, arr2):
    # return sum(arr1) - sum(arr2)