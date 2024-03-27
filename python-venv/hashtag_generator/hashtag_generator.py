def hashtag_generator(string):

    if len(string) < 1:
        return False
    
    split = string.split(" ")
    output = []

    for i in range(len(split)):
        if len(split[i]) != 0:
            output.append(split[i][0].upper() + split[i][1:].lower())

    if len("#" + "".join(output)) > 140:
        return False
    else:
       return "#" + "".join(output)


#https://www.codewars.com/kata/52449b062fb80683ec000024/train/python