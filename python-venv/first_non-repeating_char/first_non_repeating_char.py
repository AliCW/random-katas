def first_non_repeating_letter(string):

    if len(string) <= 1:
        return string
    
    dict = {item: string.lower().count(item) for item in string.lower()}
    init= []

    for i in range(len(string)):
        init.append([string[i], i])

    singles = []
    for key in dict:
        if dict[key] == 1:
            singles.append(key)

    for j in range(len(init)):
        if init[j][0].lower() in singles:
            return init[j][0]

    return ""



#https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/python