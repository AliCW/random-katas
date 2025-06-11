def group_by_commas(number):

    string = str(number)
    if len(string) <= 3:
        return string
    
    split = list(string)
    split.reverse()
    count = 1

    for i in range(0, len(string), 1):
        if i == 3:
            split.insert(i, ',')
        elif i != 0 and i % 3 == 0:
            split.insert(i + count, ',')
            count = count + 1

    split.reverse()
    return "".join(split)

#https://www.codewars.com/kata/5274e122fc75c0943d000148/train/python