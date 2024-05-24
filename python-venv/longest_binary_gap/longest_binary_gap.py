def gap(number):
    binary = list(bin(number)[2:len(bin(number))])
    output = []

    for i in range(0, len(binary), 1):
        count = 0
        if binary[i] == '0':
            count += 1
            for j in range(i, len(binary), 1):
                if binary[j] == '0':
                    i += 1
                    count += 1
                else:
                    output.append(count)
                    break

    if len(output) == 0:
        return 0

    return max(output) - 1

#https://www.codewars.com/kata/55b86beb1417eab500000051/train/python