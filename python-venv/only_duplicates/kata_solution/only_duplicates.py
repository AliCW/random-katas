def only_duplicates(string):
    counts = {}
    for i in range(0, len(string), 1):
        if string[i] in counts:
            counts[string[i]] += 1
        else:
            counts[string[i]] = 1

    output = ""
    for j in range(0, len(string), 1):
        if counts[string[j]] > 1:
            output += string[j]

    return output


#https://www.codewars.com/kata/5a1dc4baffe75f270200006b/train/python