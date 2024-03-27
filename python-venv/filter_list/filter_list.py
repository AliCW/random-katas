def filter_list(l):

    output = []

    for num in l:
        if type(num) is int or type(num) is float:
            output.append(num)

    return output
    
#https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/python