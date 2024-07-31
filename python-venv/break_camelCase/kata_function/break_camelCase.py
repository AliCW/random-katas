def break_camelCase(string):
    camel = list(string)
    countCaps = 0
    for j in range(1, len(camel), 1):
        if ord(camel[j]) >= 65 and ord(camel[j]) <= 90 and ord(camel[j - 1]) != 32:
            countCaps += 1
  
    length = len(camel) + countCaps
    for i in range(1, length, 1):
        if ord(camel[i]) >= 65 and ord(camel[i]) <= 90 and ord(camel[i - 1]) != 32:
            camel.insert(i, " ")
            
    return "".join(camel)


#https://www.codewars.com/kata/5208f99aee097e6552000148/train/python