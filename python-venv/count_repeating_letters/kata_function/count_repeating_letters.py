def count_repeating_letters(string):
    count = 0
    for i in range(0, len(string) - 1, 1):
        if(string[i] == string[i + 1]):
            count += 1

    return count