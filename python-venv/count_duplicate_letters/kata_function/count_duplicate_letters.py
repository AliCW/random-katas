def count_duplicates(string):
    letter_dict = {}
    split = list(string.lower())

    for i in range(len(split)):
        if split[i] in letter_dict:
            letter_dict[split[i]] += 1
        else:
            letter_dict[split[i]] = 1

    output = 0
    for key in letter_dict:
        if letter_dict[key] > 1:
            output += 1

    return output