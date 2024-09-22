def count(string):

    output = {}
    for i in range(len(string)):
        if string[i] in output:
            output[string[i]] += 1
        else:
            output[string[i]] = 1

    return output

#https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/python