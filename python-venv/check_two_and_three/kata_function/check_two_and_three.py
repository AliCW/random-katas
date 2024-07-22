def check_two_and_three(array):
    check = {}
    for i in range(0, len(array), 1):
        if array[i] in check:
            check[array[i]] += 1
        else:
            check[array[i]] = 1

    if len(list(check.keys())) != 2:
        return False
    elif list(check.values())[0] == 3 and list(check.values())[1] == 2:
        return True
    elif list(check.values())[0] == 2 and list(check.values())[1] == 3:
        return True
    else:
        return False


#https://www.codewars.com/kata/5a9e86705ee396d6be000091/train/python