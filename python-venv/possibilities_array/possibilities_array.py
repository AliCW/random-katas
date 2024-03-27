def possibilities_array(arr):

    if max(arr) != len(arr) - 1:
        return False

    sort = sorted(arr)
    check = 0

    for num in sort:
        if num != check:
            return False
        check += 1

    return True

#https://www.codewars.com/kata/59b710ed70a3b7dd8f000027/train/python