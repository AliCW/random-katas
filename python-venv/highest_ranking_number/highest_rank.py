def highest_rank(array):
    output = []
    dict = {item: array.count(item) for item in array} #count integers

    for key in dict:
        output.append([int(key), dict[key]]) #append key/values to sublists

    output = sorted(output, key=lambda x: x[1]) #sort sublists by occurrence
    outputSorted = []

    for arr in range(len(output)): #find duplicates
        if output[arr][1] == output[len(output) - 1][1]:
            outputSorted.append(output[arr][0])

    return max(outputSorted)

#https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/python