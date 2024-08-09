def higher_or_lower(string):
    stringArr = string.split()
    numbers = list(map(lambda x: int(x), stringArr))

    return str(max(numbers)) + " " + str(min(numbers))


#https://www.codewars.com/kata/554b4ac871d6813a03000035/train/python