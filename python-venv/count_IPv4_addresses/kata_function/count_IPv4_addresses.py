def count_IPv4(start, end):
    count = 0

    for i in range(4):
        multi = int(end.split('.')[i]) - int(start.split('.')[i])
        if i == 0:
            count += multi * 16777216
        if i == 1:
            count += multi * 65536
        if i == 2:
            count += multi * 256
        if i == 3:
            count += int(end.split('.')[i]) - int(start.split('.')[i])

    return count

#https://www.codewars.com/kata/526989a41034285187000de4/train/python