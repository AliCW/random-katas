def find_missing_letter(list):
    previous = list[0]

    for i in range(1, len(list), 1):
        if ord(list[i]) - ord(previous) != 1:
            return chr(ord(list[i]) - 1)
        previous = list[i]

#https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/python