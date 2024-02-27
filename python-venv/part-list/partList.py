def part_list(arr):

    output = []
    sliceIndex = 0

    for i in range(len(arr) - 1):
        sliceIndex += 1
        input = []
        add = arr[0:sliceIndex]
        appendFront = ' '.join(add)

        extra = arr[sliceIndex:len(arr)]
        appendBack = ' '.join(extra)
        input.append(appendFront)
        input.append(appendBack)

        output.append(input)    

    return output
