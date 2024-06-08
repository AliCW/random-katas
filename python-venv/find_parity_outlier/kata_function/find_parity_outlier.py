def find_outlier(arr):

    evens = []
    odds = []

    for i in range(len(arr)):
        if(arr[i] % 2 == 0):
            evens.append(arr[i])
        else:
            odds.append(arr[i])

    if(len(evens) > len(odds)):
        return odds[0]
    else:
        return evens[0]
